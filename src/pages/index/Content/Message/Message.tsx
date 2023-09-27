import { View, Text } from "@tarojs/components"

// store
import useMessage from "@/store/messages"

import "./Message.css"

export default function Message() {

    const [likes, reply, officialMessages] = useMessage(state => [state.likes, state.reply, state.officialMessages])

    return (
        <View className="message-wrapper">
            <View className="messages">
                <View className="message">
                    <Text className="message-name">收到的赞</Text>
                    {likes !== 0 && <View className="message-number">{likes}</View>}
                </View>
                <View className="message">
                    <Text className="message-name">评论回复</Text>
                    {reply !== 0 && <View className="message-number">{reply}</View>}
                </View>
                <View className="message">
                    <Text className="message-name">官方消息</Text>
                    {officialMessages !== 0 && <View className="message-number">{officialMessages}</View>}
                </View>
            </View>
        </View>
    )
}
