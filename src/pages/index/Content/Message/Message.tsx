import { View, Text } from "@tarojs/components"
import Taro from "@tarojs/taro"

// store
import useMessage from "@/store/messages"

import "./Message.css"

export default function Message() {

    const {all, likes, reply, officialMessages, setMessageNum} = useMessage(state => state)

    const handleMessageClick = (targetPage: string) => {
        // 1. 标记为已读，清除本地消息数
        if (targetPage === 'likes') {
            setMessageNum({ all: all - likes, likes: 0 });
        } else if (targetPage === 'reply') {
            setMessageNum({ all: all - reply, reply: 0 });
        } else {
            setMessageNum({ all: all - officialMessages, officialMessages: 0 });
        };

        Taro.navigateTo({
            url: `/pages/index/Content/Message/MessageDetails/MessageDetails?targetPage=${targetPage}`
        });
    };

    return (
        <View className="message-wrapper">
            <View className="messages">
                <View className="message" onClick={() => handleMessageClick('likes')}>
                    <Text className="message-name">收到的赞</Text>
                    {likes !== 0 && <View className="message-number">{likes}</View>}
                </View>
                <View className="message" onClick={() => handleMessageClick('reply')}>
                    <Text className="message-name">评论回复</Text>
                    {reply !== 0 && <View className="message-number">{reply}</View>}
                </View>
                <View className="message" onClick={() => handleMessageClick('officialMessages')}>
                    <Text className="message-name">官方消息</Text>
                    {officialMessages !== 0 && <View className="message-number">{officialMessages}</View>}
                </View>
            </View>
        </View>
    )
}
