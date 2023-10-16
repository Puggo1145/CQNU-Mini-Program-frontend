import { View, Text, Button } from "@tarojs/components"

import './indexPrompt.less'

export default function indexPrompt() {
    return (
        <View className="indexPrompt-wrapper">
            <Text className="indexPrompt-title">你好！</Text>
            <Text className="indexPrompt-p">欢迎来到智慧重师小程序</Text>
        </View>
    )
}