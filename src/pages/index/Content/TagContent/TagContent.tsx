import Taro, { useLoad } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components"
import { useState, useEffect, Fragment } from "react"
import PubSub from 'pubsub-js';

// stores
import useUser from "@/store/userInfo"
import usePostData from "@/store/postData"
import useRequest from '@/store/request'

// types
import { PostType } from "@/types/postpage";

import './TagContent.css'

import likeIcon from "../../../../static/post/post-like-icon.png"
import commentIcon from "../../../../static/post/post-comment-icon.png"

interface tagType {
    tagName: string
    isCurrent: boolean
}


export default function TagContent() {
    // store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const [user_id, isLogin, toLoginPage] = useUser((state) => [state.id, state.isLogin, state.toLoginPage]);

    const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl]);

    const postData = usePostData((state) => state) // 获取Tags

    // 一些基本state——————————————————————————————————————————————————————————————————————————————————————
    const [posts, setPosts] = useState<PostType[]>([]);

    const [tags, setTags] = useState<tagType[]>([]);

    // 阅读顺序
    const [order, setOrder] = useState<'reply' | 'publish'>('reply');

    // 将社区的基本数据渲染到页面上————————————————————————————————————————————————————————————————————————————
    // 加载Tags
    useEffect(() => {
        let newTags = postData.tags.map((tag, index) => {
            return {
                tagName: tag,
                isCurrent: index === 0 ? true : false // 第一个tag默认选中
            }
        })
        setTags(newTags)
    }, [postData]);

    // 管理 url 参数变化，刷新页面
    useEffect(() => {
        if (tags.length === 0 || !order) return

        const currentTag = tags.find((tag) => tag.isCurrent)?.tagName;

        Taro.request({
            method: 'GET',
            url: `${requestUrl}/v1/posts/${currentTag}?sort=${order}`,
            success(res) {
                console.log(res.data.data.posts);

                setPosts(res.data.data.posts)
            }
        });
    }, [tags, order]);

    // 注册刷新页面事件
    useEffect(() => {
        let refreshPageToken = PubSub.subscribe('refreshPage', () => {
            const currentTag = tags.find((tag) => tag.isCurrent)?.tagName;
            // 刷新页面
            Taro.request({
                method: 'GET',
                url: `${requestUrl}/v1/posts/${currentTag}?sort=${order}`,
                success(res) {
                    setPosts(res.data.data.posts)
                }
            });
        });

        return () => {
            PubSub.unsubscribe(refreshPageToken);
        };

    }, [tags]);

    // 页面功能——————————————————————————————————————————————————————————————————————————————————————————————

    // 切换Tag
    function handleTagClick(tagName: string) {
        // 切换Tag显示
        const newtags = tags.map((tag) => {
            return {
                ...tag,
                isCurrent: tag.tagName === tagName
            }
        })
        setTags(newtags)
    };

    // 切换查看顺序
    function handleOrderSwitch(order: string): void {
        setOrder(order as 'reply' | 'publish')
    }

    // 跳转到帖子
    function enterPost(post_id: string) {

        if (!isLogin) {
            toLoginPage()

            return
        }

        Taro.navigateTo({
            url: '/pages/posts/postpage/postpage?' + `post_id=${post_id}`
        })
    }

    return (
        <Fragment>
            <View className="index-content-tags-createPost" onClick={
                () => {

                    if (!isLogin) {
                        toLoginPage()
                    }

                    Taro.navigateTo({
                        url: '/pages/posts/createpost/createpost'
                    })
                }}
            ></View>
            <View className="index-content-tags">
                {
                    tags.map((tag) => {
                        return (
                            <View
                                className="index-content-tag"
                                style={tag.isCurrent ? { backgroundColor: '#4e6aff', color: '#fff' } : {}}
                                onClick={() => handleTagClick(tag.tagName)}
                            >
                                {tag.tagName}
                            </View>
                        )
                    })
                }
            </View>
            <View className="index-tagContent">
                {
                    tags.find((tag) => tag.isCurrent)?.tagName !== '热门' &&
                    <View className="index-tagContent-order">

                        <Text>查看顺序</Text>
                        <View className="index-content-orderSwitch">
                            <View className={`index-content-orderSwitch-item ${order === 'reply' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('reply')}>回复</View>
                            <View className={`index-content-orderSwitch-item ${order === 'publish' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('publish')}>发布</View>
                        </View>
                    </View>

                }
                <View className="index-content-posts">
                    {
                        posts.map((post) => {
                            return (
                                <View className="index-content-post" key={post._id} onClick={() => enterPost(post._id)}>
                                    <View className="post-texts">
                                        <Text className="post-title">{post.title}</Text>
                                        <Text className="post-description">{post.content}</Text>
                                    </View>
                                    {post.pictures.length !== 0 && post.pictures.map((picture) => {
                                        return (
                                            <Image src={picture} className="post-picture" mode="widthFix" />
                                        )
                                    })}
                                    <View className="post-info">
                                        <View className="post-info-user">
                                            <Image src={post.user.avatar} className="post-user-avatar" />
                                            <Text>{post.user.nick_name}</Text>
                                        </View>
                                        <View className="post-info-data">
                                            <View className="post-like">
                                                <Image src={likeIcon} />
                                                <Text>{post.likes_num}</Text>
                                            </View>
                                            <View className="post-comment">
                                                <Image src={commentIcon}></Image>
                                                <Text>{post.comments_num}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </Fragment>
    )
}
