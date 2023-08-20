import Taro from "@tarojs/taro"
import { View, Text, Image } from "@tarojs/components"
import { useState, useEffect, Fragment } from "react"

import useUser from "@/store/userInfo"
import usePostData from "@/store/postData"

import './TagContent.css'

import likeIcon from "../../../../static/post/post-like-icon.png"
import commentIcon from "../../../../static/post/post-comment-icon.png"

interface postContentType {
    post_id: string
    title: string
    content: string
    picture?: string
    user_id: string
    avatar_url: string
    nick_name: string
    likes_num: number
    comments_num: number
}

interface tagType {
    tagName: string
    isCurrent: boolean
}


export default function TagContent() {
// store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const [user_id, isLogin, toLoginPage] = useUser((state) => [state.user_id, state.isLogin, state.toLoginPage])

// 一些基本state——————————————————————————————————————————————————————————————————————————————————————
    const [posts, setPosts] = useState<postContentType[]>([
        { post_id: 'x', title: '教务系统怎么选课？', content: '新生，不太懂教务系统怎么用...', picture: '#', user_id: 'uuid-111', avatar_url: '#', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
        { post_id: 'x', title: '宿舍水电怎么充值啊？', content: '如题', user_id: 'uuid-111', avatar_url: '', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
        { post_id: 'x', title: '如何评价原神这款游戏', content: '我不好评价，大伙们怎么看？', user_id: 'uuid-111', avatar_url: '#', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
    ])

    const [tags, setTags] = useState<tagType[]>([
        { tagName: '热门', isCurrent: true },
        { tagName: '校园日常', isCurrent: false },
        { tagName: '新生', isCurrent: false },
        { tagName: '求助', isCurrent: false },
        { tagName: '交友', isCurrent: false },
        { tagName: '考研', isCurrent: false },
    ])

    // 阅读顺序
    const [order, setOrder] = useState<'reply' | 'publish'>('reply')

// 将社区的基本数据渲染到页面上————————————————————————————————————————————————————————————————————————————
    
    // 获取Tags
    const postData = usePostData((state) => state)
    // 加载Tags
    useEffect(() => {
        let newTags = postData.tags.map((tag, index) => {
            return {
                tagName: tag,
                isCurrent: index === 0 ? true : false // 第一个tag默认选中
            }
        })
        setTags(newTags)
    }, [postData])
    // 默认加载第一个tag的帖子
    useEffect(() => {
        if (tags.length === 0) return // 确保Tags已经加载
        Taro.request({
            method: 'GET',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/1',
            success(res) {
                setPosts(res.data.data.postsList)
            }
        })
    }, [tags])


// 页面功能——————————————————————————————————————————————————————————————————————————————————————————————

    // 切换Tag，并加载对应帖子
    function handleTagClick(tagName: string): void {
        // 切换Tag显示
        const newtags = tags.map((tag) => {
            return {
                ...tag,
                isCurrent: tag.tagName === tagName
            }
        })
        setTags(newtags)

        // 加载对应帖子
        Taro.request({
            method: 'GET',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/1' + `?tag=${tagName}`,
            success(res) {
                setPosts(res.data.data.postsList)
            }
        })
    }

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
            url: '/pages/posts/postpage/postpage?' + `post_id=${post_id}&user_id=${user_id}`
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
                <View className="index-tagContent-order">
                    <Text>查看顺序</Text>
                    <View className="index-content-orderSwitch">
                        <View className={`index-content-orderSwitch-item ${order === 'reply' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('reply')}>回复</View>
                        <View className={`index-content-orderSwitch-item ${order === 'publish' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('publish')}>发布</View>
                    </View>
                </View>
                <View className="index-content-posts">
                    {
                        posts.map((post) => {
                            return (
                                <View className="index-content-post" key={post.post_id} onClick={() => enterPost(post.post_id)}>
                                    <View className="post-texts">
                                        <Text className="post-title">{post.title}</Text>
                                        <Text className="post-description">{post.content}</Text>
                                    </View>
                                    {post.picture && <Image src={post.picture} className="post-picture" mode="widthFix" />}
                                    <View className="post-info">
                                        <View className="post-info-user">
                                            <Image src={post.avatar_url} className="post-user-avatar" />
                                            <Text>{post.nick_name}</Text>
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
