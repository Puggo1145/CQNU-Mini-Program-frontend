import { Routes, Route } from "react-router-dom"
import { View } from "@tarojs/components"

import TagContent from "./TagContent/TagContent"
import Hot from './Hot/Hot'
import Message from "./Message/Message"

export default function Content() {

    return (
        <View className="index-content">
            <Routes>
                <Route path="/pages/index/index" element={<TagContent />} />
                <Route path="/pages/index/hot" element={<Hot />} />   
                <Route path="/pages/index/message" element={<Message />} />
            </Routes>
        </View>
    )
}
