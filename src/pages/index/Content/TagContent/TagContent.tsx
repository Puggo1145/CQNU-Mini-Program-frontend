import Taro from "@tarojs/taro";
import { View, Text, Image, ScrollView } from "@tarojs/components"
import { useState, useEffect, Fragment } from "react"
import PubSub from 'pubsub-js';

// stores
import useUser from "@/store/userInfo"
import usePostData from "@/store/postData"
import useRequest from '@/store/request'

import { makeRequest } from "@/common/utilities/requester";

// types
import { PostType } from "@/types/postpage";

import './TagContent.css'

import likeIcon from "../../../../static/post/post-like-icon.png";
import commentIcon from "../../../../static/post/post-comment-icon.png";
import contentReviwing from "../../../../static/common/contentReviewing.png";
import contentUnpass from "../../../../static/common/ContentUnpass.png";

interface tagType {
    tagName: string
    isCurrent: boolean
}

export default function TagContent() {
    // store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const [user_id, isLogin, toLoginPage] = useUser((state) => [state.id, state.isLogin, state.toLoginPage]);
    const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl]);
    const postData = usePostData((state) => state) // 获取Tags

    // 一些基本state ——————————————————————————————————————————————————————————————————————————————————————
    const [posts, setPosts] = useState<PostType[]>([]);
    const [tags, setTags] = useState<tagType[]>([]);
    const [order, setOrder] = useState<'reply' | 'publish'>('reply'); // 阅读顺序

    // 刷新相关state ——————————————————————————————————————————————————————————————————————————————————————

    // 分块传输内容，每次刷新5条，该 page 用于计算要跳过的内容的数量，以定位到正确的位置返回数据
    const [page, setPage] = useState<number>(1); // page：接下来要请求的页数，用于下拉刷新时跳过已获取的数据，请求新数据
    const [isRefresh, setIsRefresh] = useState<boolean>(false); // 刷新锁，防止上一次刷新未完成就重复刷新
    const [contentLoaded, setContentLoaded] = useState<boolean>(false); // 所有 posts 是否已经加载完毕，加载完毕则不再触发请求
    const [shouldRefresh, setShouldRefresh] = useState<boolean>(false); // 在重置数据并刷新的方法中，检查以上state是否已经完成更新，完成更新后再刷新

    // 核心方法：
    // 1. 请求 posts
    const getPosts = async () => {
        try {
            if (isRefresh || contentLoaded) return; // 防止重复刷新

            setIsRefresh(true); // 禁止下一次刷新

            // 获取当前选中的 tag 并请求
            const currentTag = tags.find((tag) => tag.isCurrent)?.tagName;
            const res = await makeRequest({
                method: 'GET',
                url: requestUrl,
                path: `/api/v1/posts/${encodeURIComponent(currentTag as string)}?sort=${order}&page=${page}`,
                requestService: 'backend',
                timeout: 5000 // 超时时间
            });

            if (res.statusCode === 200) {
                const prevPosts = posts;
                const updatedPosts = prevPosts.concat(res.data.data.posts);

                setPosts(updatedPosts); // 更新posts
                setPage(res.data.page + 1); // 更新page

                setIsRefresh(false); // 允许下一次刷新
            } else {
                throw new Error(`Request failed with status code: ${res.statusCode}`);
            }

            // posts 被全部请求完后
            if (res.data.data.posts.length === 0) {
                setContentLoaded(true);
            };
        } catch (err) {
            setIsRefresh(false);
            setContentLoaded(true);
            Taro.showToast({
                title: '数据加载失败',
                icon: 'error'
            });
        };
    };

    // 2. 重置 state 并刷新（切换 tag, order 或下拉刷新时调用）
    // 切换 tag，order 或 下拉刷新的本质都是在新参数下请求新的数据或请求最新的数据，而不是在当前的参数下继续请求
    // 因此，此处清空 posts，重置 page，解开 contentLoaded 锁，然后再请求数据，获取到的数据就是全新的数据
    const resetAndRefresh = async () => {
        setPosts([]);
        setPage(1);
        setContentLoaded(false);
        setShouldRefresh(true);
    };
    useEffect(() => {
        if (shouldRefresh) {
            getPosts();
            setShouldRefresh(false);
        }
    }, [shouldRefresh]);
    // 由于，state 更新是异步的，直接调用可能会出现值未更新就 getPosts 的情况，所以用 shouldRefresh 来确保 state 已经更新


    // 页面数据初始化：将社区的基本数据渲染到页面上———————————————————————————————————————————————————————————————————————————
    // 1. 加载Tags
    useEffect(() => {
        let newTags = postData.tags.map((tag, index) => {
            return {
                tagName: tag,
                isCurrent: index === 0 ? true : false // 第一个tag默认选中
            }
        })
        setTags(newTags)
    }, [postData]);

    // 2. 确保 tags 加载完毕后再请求 posts，
    // 该方法同时承担了切换 tag 或 order 时的刷新功能
    useEffect(() => {
        if (tags.length === 0) return;

        resetAndRefresh();
    }, [tags, order]);

    // 2. 注册页面事件（用于从某些页面返回后需要更新数据，例如创建完帖子后，需要刷新）
    // A. 从页面返回后刷新
    useEffect(() => {
        let refreshPageToken = PubSub.subscribe('refreshPage', () => {
            resetAndRefresh();
        });

        return () => {
            PubSub.unsubscribe(refreshPageToken);
        };
    }, []);
    // B. 更新点赞数和评论数
    useEffect(() => {
        let updateLikeNum = PubSub.subscribe('updatePostData', async (msg, data) => {
            const newposts = posts.map((post) => {
                if (post._id === data.post_id) {
                    return {
                        ...post,
                        likeNum: data.likeNum,
                        commentNum: data.commentNum
                    }
                } else {
                    return post
                }
            });
            setPosts(newposts);
        });

        return () => {
            PubSub.unsubscribe(updateLikeNum);
        };
    }, [posts])

    // 页面功能——————————————————————————————————————————————————————————————————————————————————————————————

    // A. 切换Tag
    function handleTagClick(tagName: string) {
        // 切换Tag显示
        const newtags = tags.map((tag) => {
            return {
                ...tag,
                isCurrent: tag.tagName === tagName
            }
        });
        setTags(newtags);
    };

    // B. 切换查看顺序
    function handleOrderSwitch(order: string): void {
        setOrder(order as 'reply' | 'publish');
    };

    // 跳转到帖子
    function enterPost(post_id: string) {

        if (!isLogin) {
            toLoginPage()

            return
        }

        Taro.navigateTo({
            url: '/pages/posts/postpage/postpage?' + `post_id=${post_id}`
        })
    };

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
                <ScrollView className="index-content-posts"
                    scrollY={true}
                    enablePassive="true"
                    lowerThreshold={50}
                    onScrollToLower={() => getPosts()}

                    enableBackToTop={true}
                    refresherEnabled={true} // 开启下拉刷新
                    refresherThreshold={45}
                    refresherTriggered={isRefresh}
                    onRefresherRefresh={resetAndRefresh}
                >
                    {
                        posts.sort((a, b) => {
                            if (a.isTopped && !b.isTopped) return -1;
                            if (!a.isTopped && b.isTopped) return 1;
                            return 0;
                        }).map((post) => {
                            return (
                                <View className="index-content-post" key={post._id} onClick={() => enterPost(post._id)}>
                                    {post.isTopped && <Text className="post-top">置顶</Text>}
                                    <View className="post-texts">
                                        <Text className="post-title">{post.title}</Text>
                                        <Text className="post-description">{post.content}</Text>
                                    </View>
                                    {post.pictures.length !== 0 && post.pictures.map((picture) => {
                                        let picturePath;
                                        if (picture === 'reviewing') picturePath = contentReviwing;
                                        else if (picture === 'block') picturePath = contentUnpass;
                                        else picturePath = picture;

                                        return (
                                            <Image src={picturePath} className="post-picture" mode="aspectFill" />
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
                                                <Text>{post.likeNum}</Text>
                                            </View>
                                            <View className="post-comment">
                                                <Image src={commentIcon}></Image>
                                                <Text>{post.commentNum}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View className="spacer">{contentLoaded ? '你到达了世界的尽头' : '加载中...'}</View>
                </ScrollView>
            </View>
        </Fragment>
    )
}
