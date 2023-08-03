import { useState } from "react"
import { View } from "@tarojs/components"

import TagContent from "./TagContent/TagContent"

interface tagType {
    tagName: string
    isCurrent: boolean
}

export default function Content() {

    const [tags, setTags] = useState<tagType[]>([
        { tagName: '热门', isCurrent: true },
        { tagName: '校园日常', isCurrent: false },
        { tagName: '新生', isCurrent: false },
        { tagName: '求助', isCurrent: false },
        { tagName: '交友', isCurrent: false },
    ])

    // function handleTagClick

    return (
        <View className="index-content">
            <View className="index-content-tags">
                {
                    tags.map((tag) => {
                        return (
                            <View className="index-content-tag" style={ tag.isCurrent ? {backgroundColor: '#4e6aff', color: '#fff'} : {}}>{tag.tagName}</View>
                        )
                    })
                }
            </View>
            <TagContent />
        </View>
    )
}
