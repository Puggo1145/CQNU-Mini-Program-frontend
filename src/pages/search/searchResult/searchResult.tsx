import { useState, useEffect } from "react"
import { View, Text, Image, ScrollView } from "@tarojs/components"
import Taro from "@tarojs/taro"

import { makeRequest } from "@/common/utilities/requester"

import useStore from "@/store/store"
import useUser from "@/store/userInfo"
import useRequest from '@/store/request'

import { PostType } from "../../../types/postpage"

import './searchResult.css'

import likeIcon from "../../../static/post/post-like-icon.png"
import commentIcon from "../../../static/post/post-comment-icon.png"
import defaultAvatar from '@/static/mine/defaultAvatar.png'

export default function searchResult() {
// store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight);
    const user_id = useUser((state) => state.id);
    const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl]);


// 一些基本state——————————————————————————————————————————————————————————————————————————————————————
    // 搜索关键词
    const [keyWord, setKeyWord] = useState<string>('')
    // 搜索结果
    const [posts, setPosts] = useState<PostType[]>([]);
    // page
    const [page, setPage] = useState<number>(1);
    // 请求锁
    const [requestLock, setRequestLock] = useState<boolean>(false); // 请求锁，防止上一次请求未完成时发起新的请求

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
        if (keyWord === '') return;

        getSearchResult();
    }, [keyWord])

    async function getSearchResult() {
        if (requestLock) return;

        setRequestLock(true); // 上锁，开始请求
        
        const searchRes = await makeRequest({
            method: 'GET',
            url: requestUrl,
            path: `/api/v1/posts/search/${encodeURIComponent(keyWord)}?page=${page}`,
            requestService: 'backend',
        })

        if (searchRes.statusCode === 200) {
            const newPosts = posts.concat(searchRes.data.data.posts);
            
            setPosts(newPosts);
            setPage(page + 1);
            console.log(searchRes.data);
            
        } else {
            Taro.showToast({
                title: '出现了一些问题',
                icon: 'error'
            });
        };

        setRequestLock(posts.length + searchRes.data.data.posts.length === searchRes.data.length); // 解锁
    };

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
                <ScrollView 
                    className="searchResult-resultPosts-wrapper"
                    scrollY={true}
                    enablePassive="true"
                    lowerThreshold={50}
                    onScrollToLower={getSearchResult}
                    enableBackToTop={true}
                >
                    {
                        posts.map((post) => {
                            return (
                                <View className="searchResult-resultPost" key={post._id} onClick={() => enterPost(post._id)}>
                                    <View className="post-texts">
                                        <Text className="post-title">{post.title}</Text>
                                        <Text className="post-description">{post.content}</Text>
                                    </View>
                                    {post.pictures.length !== 0 && <Image src={post.pictures[0]} className="post-picture" mode="aspectFill" />}
                                    <View className="post-info">
                                        <View className="post-info-user">
                                            <Image src={post.user.avatar || defaultAvatar} className="post-user-avatar" />
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
                    <View className="spacer" style={{height: '12px'}}></View>
                </ScrollView>
            </View>
        </View>
    )
}
