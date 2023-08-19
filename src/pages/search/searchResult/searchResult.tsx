import { useState, useEffect } from "react"
import { View, Text, Image } from "@tarojs/components"
import Taro from "@tarojs/taro"

import useStore from "@/store/store"
import useUser from "@/store/userInfo"

import './searchResult.css'


import likeIcon from "../../../static/post/post-like-icon.png"
import commentIcon from "../../../static/post/post-comment-icon.png"

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

export default function searchResult() {
// store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)
    const user_id = useUser((state) => state.user_id)

// 一些基本state——————————————————————————————————————————————————————————————————————————————————————
    // 搜索关键词
    const [keyWord, setKeyWord] = useState<string>('')
    // 搜索结果
    const [posts, setPosts] = useState<postContentType[]>([
        { post_id: 'x', title: '教务系统怎么选课？', content: '新生，不太懂教务系统怎么用...', picture: '#', user_id: 'uuid-111', avatar_url: '#', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
        { post_id: 'x', title: '宿舍水电怎么充值啊？', content: '如题', user_id: 'uuid-111', avatar_url: '', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
        { post_id: 'x', title: '如何评价原神这款游戏', content: '我不好评价，大伙们怎么看？', user_id: 'uuid-111', avatar_url: '#', nick_name: '这是一个昵称', likes_num: 0, comments_num: 0 },
    ])


// 页面功能 ————————————————————————————————————————————————————————————————————————————————————————————————
    // 获取搜索关键词
    useEffect(() => {
        const router = Taro.getCurrentInstance().router
        if (!router) return
        const { key_word } = router.params
        setKeyWord(key_word as string)
    }, [])

    // 获取搜索结果
    useEffect(() => {
        Taro.request({
            method: 'GET',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/1?keyword=' + keyWord,
            success: (res) => {
                setPosts(res.data.data.postsList)
            }
        })
    }, [keyWord])

    // 跳转到帖子
    function enterPost(post_id: string) {
        Taro.navigateTo({
            url: '/pages/posts/postpage/postpage?' + `post_id=${post_id}&user_id=${user_id}`
        })
    }

    return (
        <View className="searchResult-wrapper" style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className="searchResult-header">
                <View className="searchResult-header-back" onClick={() =>
                    Taro.switchTab({
                        url: '/pages/index/index'
                    })
                }></View>
                <View className="searchResult-searchBar" onClick={() => {
                    Taro.navigateBack()
                }}>{keyWord}</View>
            </View>
            <View className="searchResult-resultPosts">
                <View className="searchResult-resultPosts-wrapper">
                    {
                        posts.map((post) => {
                            return (
                                <View className="searchResult-resultPost" key={post.post_id} onClick={() => enterPost(post.post_id)}>
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
        </View>
    )
}
