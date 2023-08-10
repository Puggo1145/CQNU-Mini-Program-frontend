import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './postpage.css'

interface postContentType {
    userId: string
    avatarUrl: string
    nickname: string
    userLevel: number
    title: string
    description: string
    pictures: string[]
    editTime: string
}

interface commentType {
    commentId: string
    userId: '',
    avatarUrl: string
    nickname: string
    userLevel: number
    commentContent: string
    postTime: string
}

export default function createpost() {

    const [currentCommentView, setCurrentCommentView] = useState<number>(0)

    const [postContent, setPostContent] = useState<postContentType>({
        userId: '',
        avatarUrl: '#',
        nickname: '114514',
        userLevel: 0,
        title: '',
        description: '',
        pictures: ['#'],
        editTime: ''
    })

    const [comments, setComments] = useState<commentType[]>([
        { commentId: '', userId: '', avatarUrl: '#', nickname: '114514', userLevel: 0, commentContent: '你说的对，但是，原神是一款由米哈游自主研发的开放世界冒险游戏', postTime: '2023-8-10' }
    ])

    const [commentsNum, setCommentsNum] = useState<number>(0)

    return (
        <View className='postpage-wrapper'>
            <View className='postpage-header'>
                <View className='postpage-header-left'>
                    <View className='postpage-back' onClick={() => { Taro.navigateBack() }}></View>
                    <View className='postpage-userInfo'>
                        <Image className='postpage-avatar avatarStyle' src={postContent.avatarUrl}></Image>
                        <Text className='postpage-nickname'>{postContent.nickname}</Text>
                        <View className='postpage-userLevel'>{postContent.userLevel}</View>
                    </View>
                </View>
                <View className='postpage-options'></View>
            </View>
            <View className='postpage-mainSection'>
                <View className='postpage-content'>
                    <Text className='postpage-title'>{postContent.title}</Text>
                    <Text className='postpage-description'>{postContent.description}</Text>
                    {
                        postContent.pictures.map((item, index) => {
                            return (
                                <Image className='postpage-image' src={item} key={index}></Image>
                            )
                        })
                    }
                    <Text className='postpage-editTime'>编辑于{postContent.editTime}</Text>
                </View>
                <View className='postpage-comments'>
                    <View className='postpage-commentsTop'>
                        <Text className='postpage-commentsNum'>共计{commentsNum}条评论</Text>
                        <View className='postpage-commentViewSwitcher'>
                            <View className={currentCommentView === 0 ? 'currentCommentView' : ''} onClick={() => { setCurrentCommentView(0) }}>热门</View>
                            <View className={currentCommentView === 1 ? 'currentCommentView' : ''} onClick={() => { setCurrentCommentView(1) }}>时间</View>
                        </View>
                    </View>
                    {
                        comments.map((item) => {
                            return (
                                <View className='postpage-comment' key={item.commentId}>
                                    <View className='postpage-commentUserInfo'>
                                        <Image className='avatarStyle' src={item.avatarUrl}></Image>
                                        <Text>{item.nickname}</Text>
                                        <View className='postpage-userLevel'>{item.userLevel}</View>
                                        <View className='postpage-likeComment'></View>
                                    </View>
                                    <Text className='postpage-commentContent'>{item.commentContent}</Text>
                                    <Text className='postpage-editTime'>{item.postTime}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View className='postpage-footer'>

            </View>
        </View>
    )
}