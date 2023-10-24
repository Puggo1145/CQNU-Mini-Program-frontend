import { useState } from "react"
import { View, Text, ScrollView } from "@tarojs/components"
import Taro, { useLoad } from "@tarojs/taro"

import Header from "@/common/Header/Header"

import { makeRequest } from "@/common/utilities/requester"
import timeStampToDate from '@/common/utilities/timeStampToDate'

import useRequest from "@/store/request"

import { PostType } from "@/types/postpage"

import './myposts.css'

export default function myposts() {

    const [posts, setPosts] = useState<PostType[]>([]);
    const requestUrl = useRequest((state) => state.requestUrl);

    useLoad(async () => {
        // 请求用户的帖子
        const token = Taro.getStorageSync('token');

        const res = await makeRequest({
            method: 'GET',
            url: requestUrl,
            path: '/api/v1/users/posts',
            requestService: 'backend',
            header: {
                Authorization: token
            },
        });

        if (res.statusCode === 200) {
            setPosts(res.data.data.posts);
        } else {
            Taro.showToast({
                title: '信息获取失败',
                icon: 'error',
                duration: 2000
            });
        };
    });

    return (
        <View className="myposts-wrapper">
            <Header title="我的帖子" />
            <ScrollView
                className="myposts-content"
                scrollY={true}
            >
                {
                    posts.map((post) => {
                        return (
                            <View className="myposts-post" key={post._id} onClick={
                                () => Taro.navigateTo({
                                    url: `/pages/posts/postpage/postpage?post_id=${post._id}`
                                })
                            }>
                                <Text className="myposts-post-title">{post.title}</Text>
                                <Text className="myposts-post-content">{post.content.length > 25 ? `${post.content.slice(0, 25)}...` : post.content}</Text>
                                <Text className="myposts-post-createdAt">{timeStampToDate(post.createdAt)}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
