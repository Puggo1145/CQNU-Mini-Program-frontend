import { useState, useEffect } from "react"
import { View, ScrollView } from "@tarojs/components"
import Taro from "@tarojs/taro"

import { makeRequest } from "@/common/utilities/requester"

import useUser from "@/store/userInfo"
import useRequest from '@/store/request'

import './Hot.css'

interface hotTagtype {
  post_id: string
  title: string
  hot_index: string
}

export default function Hot() {

  const [isLogin, toLoginPage] = useUser((state) => [state.isLogin, state.toLoginPage])
  const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])


  const [hotTags, setHotTags] = useState<hotTagtype[]>([
  ])

  const [hotTagColor, setHotTagColor] = useState<string[]>(['#ee5551', '#fc8623', '#e7ac67', '#ec9b3a'])

  useEffect(() => {
    // 获取热榜
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await makeRequest({
      method: 'GET',
      url: requestUrl,
      path: '/api/v1/posts/getHotList',
    });

    console.log(res);
    const hotTags = res.data.data.posts.map(post => {
      return {
        post_id: post._id,
        title: post.title,
        hot_index: Math.round(post.heat)
      }
    });
    setHotTags(hotTags);
  };

  return (
    <View className="hot-wrapper">
      <View className="hot-banner">Banner</View>
      <ScrollView
        className="hot-tags"
        scrollY={true}
        enablePassive="true"
        enhanced={true}
        showScrollbar={false}
      >
        {
          hotTags.map((item, index) => {
            return (
              <View className="hot-tag" key={item.post_id} onClick={
                () => {

                  if (!isLogin) {
                    toLoginPage()

                    return
                  }

                  Taro.navigateTo({
                    url: '/pages/posts/postpage/postpage?' + `post_id=${item.post_id}`
                  })
                }
              }>
                <View className="hot-tag-left">
                  <View className="hot-tag-rank" style={index < 3 ? { backgroundColor: hotTagColor[index] } : { color: hotTagColor[3] }}>{index + 1}</View>
                  <View className="hot-tag-title">{item.title}</View>
                </View>
                <View className="hot-tag-index">{item.hot_index} 热度</View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}
