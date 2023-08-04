import { useState } from "react"
import { View, Text } from "@tarojs/components"

import "./Message.css"

interface messageNumberType {
    receivedLikes: string
    reply: string
    officialMessages: string
}

export default function Message() {

    const [messageNumber, setMessageNumber] = useState<messageNumberType>({
        receivedLikes: '28',
        reply: '23',
        officialMessages: '34'
    })

    return (
        <View className="message-wrapper">
            <View className="messages">
                <View className="message">
                    <Text className="message-name">收到的赞</Text>
                    <View className="message-number">{messageNumber.receivedLikes}</View>
                </View>
                <View className="message">
                    <Text className="message-name">评论回复</Text>
                    <View className="message-number">{messageNumber.reply}</View>
                </View>
                <View className="message">
                    <Text className="message-name">官方消息</Text>
                    <View className="message-number">{messageNumber.officialMessages}</View>
                </View>
            </View>
        </View>
    )
}
