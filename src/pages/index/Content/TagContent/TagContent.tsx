import { View, Text, Image } from "@tarojs/components"
import { useState, Fragment } from "react"

import likeIcon from "../../../../static/post/post-like-icon.png"
import commentIcon from "../../../../static/post/post-comment-icon.png"

interface postContentType {
    title: string
    description: string
    picture?: string
    userId: string
    avatarUrl: string
    nickname: string
    likeNum: number
    commentNum: number
}

interface tagType {
    tagName: string
    isCurrent: boolean
}


export default function TagContent() {

    const [order, setOrder] = useState<'reply' | 'publish'>('reply')

    const [posts, setPosts] = useState<postContentType[]>([
        { title: '教务系统怎么选课？', description: '新生，不太懂教务系统怎么用...', picture: '#', userId: 'uuid-111', avatarUrl: '', nickname: '这是一个昵称', likeNum: 0, commentNum: 0 },
        { title: '宿舍水电怎么充值啊？', description: '如题', userId: 'uuid-111', avatarUrl: '', nickname: '这是一个昵称', likeNum: 0, commentNum: 0 },
        { title: '如何评价原神这款游戏', description: '我不好评价，大伙们怎么看？', userId: 'uuid-111', avatarUrl: '', nickname: '这是一个昵称', likeNum: 0, commentNum: 0 },
    ])

    const [tags, setTags] = useState<tagType[]>([
        { tagName: '热门', isCurrent: true },
        { tagName: '校园日常', isCurrent: false },
        { tagName: '新生', isCurrent: false },
        { tagName: '求助', isCurrent: false },
        { tagName: '交友', isCurrent: false },
        { tagName: '考研', isCurrent: false },
    ])

    function handleTagClick(tagName: string): void {
        const newtags = tags.map((tag) => {
            return {
                ...tag,
                isCurrent: tag.tagName === tagName
            }
        })
        setTags(newtags)
    }

    function handleOrderSwitch(order: string): void {
        setOrder(order as 'reply' | 'publish')
    }

    return (
        <Fragment>
            <View className="index-content-tags-createPost"></View>
            <View className="index-content-tags">
                {
                    tags.map((tag) => {
                        return (
                            <View
                                className="index-content-tag"
                                style={tag.isCurrent ? { backgroundColor: '#4e6aff', color: '#fff' } : {}}
                                onClick={() => handleTagClick(tag.tagName)}
                            >
                                {tag.tagName}
                            </View>
                        )
                    })
                }
            </View>
            <View className="index-tagContent">
                <View className="index-tagContent-order">
                    <Text>查看顺序</Text>
                    <View className="index-content-orderSwitch">
                        <View className={`index-content-orderSwitch-item ${order === 'reply' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('reply')}>回复</View>
                        <View className={`index-content-orderSwitch-item ${order === 'publish' && 'order-isCurrent'}`} onClick={() => handleOrderSwitch('publish')}>发布</View>
                    </View>
                </View>
                <View className="index-content-posts">
                    {
                        posts.map((post) => {
                            return (
                                <View className="index-content-post" key={post.userId}>
                                    <View className="post-texts">
                                        <Text className="post-title">{post.title}</Text>
                                        <Text className="post-description">{post.description}</Text>
                                    </View>
                                    {post.picture && <Image src={post.picture} className="post-picture" mode="widthFix" />}
                                    <View className="post-info">
                                        <View className="post-info-user">
                                            <Image src={post.avatarUrl} className="post-user-avatar" />
                                            <Text>{post.nickname}</Text>
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
                </View>
            </View>
        </Fragment>

    )
}
