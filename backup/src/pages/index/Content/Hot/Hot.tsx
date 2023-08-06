import { useState } from "react"
import { View, Text } from "@tarojs/components"

import './Hot.css'

interface hotTagtype {
  post_id: string
  title: string
  hot_index: string
}

export default function Hot() {

  const [hotTags, setHotTags] = useState<hotTagtype[]>([
    {post_id: '1', title: '热榜1', hot_index: '1'},
    {post_id: '2', title: '热榜2', hot_index: '2'},
    {post_id: '3', title: '热榜3', hot_index: '3'},
    {post_id: '4', title: '热榜4', hot_index: '4'},
    {post_id: '5', title: '热榜5', hot_index: '5'},
  ])

  const [hotTagColor, setHotTagColor] = useState<string[]>(['#ee5551', '#fc8623', '#e7ac67', '#ec9b3a'])

  return (
    <View className="hot-wrapper">
      <View className="hot-banner">Banner</View>
      <View className="hot-tags">
        {
          hotTags.map((item, index) => {
            return (
              <View className="hot-tag" key={item.post_id}>
                <View className="hot-tag-left">
                  <View className="hot-tag-rank" style={index < 3 ? {backgroundColor: hotTagColor[index]} : {color: hotTagColor[3]}}>{index + 1}</View>
                  <View className="hot-tag-title">{item.title}</View>
                </View>
                <View className="hot-tag-index">{item.hot_index}万热度</View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
