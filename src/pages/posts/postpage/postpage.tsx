import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { useLoad, getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'

import useStore from '@/store/store'
import useUser from '@/store/userInfo'

import './postpage.css'

import likeImg from '../../../static/post/post-like-icon.png'
import likeActivated from '../../../static/post/post-like-activated-icon.png'

interface postContentType {
    post_id: string
    title: string
    content: string
    pictures?: string[]
    user_id: string
    avatar_url: string
    nick_name: string
    user_level: number
    likes_num: number
    comments_num: number
    edit_time: string
}

interface commentType {
    comment_id: string
    user_id: '',
    nickName: string
    user_level: number
    avatar_url: string
    comment_likes: number
    comment_content: string
    comment_time: string
    isLiked: boolean
}

export default function postpage() {
    useLoad(() => {
        getContent()
        getComments()
    })

    // 数据store ————————————————————————————————————————————————————————————————————————————————————
    // 本用户 id
    const user_id = useUser((state) => state.user_id)


    // 基本 states ————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)

    const [currentCommentView, setCurrentCommentView] = useState<number>(0) // 评论排序方式
    const [isLiked, setIsLiked] = useState<boolean>(false) // 是否点赞帖子

    // 帖子内容
    const [postContent, setPostContent] = useState<postContentType>({
        post_id: 'string',
        title: 'string',
        content: 'string',
        pictures: [],
        user_id: 'xxx',
        avatar_url: 'string',
        nick_name: 'string',
        user_level: 0,
        likes_num: 0,
        comments_num: 0,
        edit_time: '2023-10-1'
    })

    // 评论内容
    const [comments, setComments] = useState<commentType[]>([
        { comment_id: '', user_id: '', avatar_url: '#', nickName: '114514', user_level: 0, comment_content: '', comment_likes: 0, comment_time: '2021-10-1', isLiked: false }
    ])

    const [commentsNum, setCommentsNum] = useState<number>(0) // 评论总数
    // 页面功能 ————————————————————————————————————————————————————————————————————————————————————

    function getContent() {
        const post_id = getCurrentInstance().router?.params.post_id
        const user_id = getCurrentInstance().router?.params.user_id
        Taro.request({
            method: 'POST',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/visitpost',
            data: {
                post_id: post_id,
                user_id: user_id
            },
            success(res) {
                setPostContent(res.data.data.post_info[0])
            }
        })
    }

    function getComments() {
        const post_id = getCurrentInstance().router?.params.post_id
        const user_id = getCurrentInstance().router?.params.user_id
        Taro.request({
            method: 'POST',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/visitpost',
            data: {
                post_id: post_id,
                user_id: user_id
            },
            success(res) {
                setComments(res.data.data.commentsList.map((item) => {
                    return {
                        ...item,
                        isLiked: false
                    }
                }))
            }
        })
    }

    useEffect(() => {
        setCommentsNum(comments.length)
    }, [comments])

    // 点赞帖子
    function likePost() {
        // 更新帖子点赞数
        setPostContent((prev) => {
            return {
                ...prev,
                likes_num: isLiked ? prev.likes_num - 1 : prev.likes_num + 1
            }
        })
        setIsLiked(!isLiked)

        // 向后端发送点赞请求
        Taro.request({
            method: 'POST',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/likepost',
            data: {
                post_id: postContent.post_id,
                user_id: user_id // 这是当前用户的id
            },
            // success(res) {
            //     if (res.statusCode === 200) {

            //     }
            // }
        })
    }

    // 点赞评论
    function likeComment(comment_id) {
        // 更新评论点赞数
        setComments((prev) => {
            return prev.map((item) => {
                if (item.comment_id === comment_id) {
                    return {
                        ...item,
                        isLiked: !item.isLiked,
                        comment_likes: item.isLiked ? item.comment_likes - 1 : item.comment_likes + 1
                    }
                } else {
                    return item
                }
            })
        })

        // 向后端发送点赞请求
        Taro.request({
            method: 'POST',
            url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/likecomment',
            data: {
                comment_id: comment_id,
                user_id: user_id // 当前用户的id
            },
            // success(res) {
            //     if (res.statusCode === 200) {

            //     }
            // }
        })
    }

    // 监听键盘弹起事件
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0)
    Taro.onKeyboardHeightChange((res) => {
        setKeyboardHeight(res.height)
    })

    // 发送评论
    function sendComment(event) {
        const commentContent = event.detail.value

        if (commentContent) {
            Taro.request({
                method: 'POST',
                url: 'http://127.0.0.1:4523/m1/3097587-0-default/api/posts/createcomment',
                data: { commentContent },
                success(res) {
                    if (res.statusCode === 200) {
                        getComments()
                        Taro.showToast({
                            title: '评论成功',
                            icon: 'success',
                            duration: 2000
                        })
                    }
                }
            })
        }
    }

    return (
        <View className='postpage-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className='postpage-header'>
                <View className='postpage-header-left'>
                    <View className='postpage-back' onClick={() => { Taro.navigateBack() }}></View>
                    <View className='postpage-userInfo'>
                        <Image className='postpage-avatar avatarStyle' src={postContent.avatar_url}></Image>
                        <Text className='postpage-nickname'>{postContent.nick_name}</Text>
                        <View className='postpage-userLevel'>Lv.{postContent.user_level}</View>
                    </View>
                </View>
                <View className='postpage-options'></View>
            </View>
            <View className='postpage-mainSection'>
                <View className='postpage-mainSection-wrapper'>
                    <View className='postpage-content'>
                        <Text className='postpage-title' userSelect>{postContent.title}</Text>
                        <Text className='postpage-description' userSelect>{postContent.content}</Text>
                        {
                            postContent.pictures?.map((item, index) => {
                                return (
                                    <Image className='postpage-image' src={item} key={index} mode="widthFix"></Image>
                                )
                            })
                        }
                        <Text className='postpage-editTime'>编辑于{postContent.edit_time}</Text>
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
                                    <View className='postpage-comment' key={item.comment_id}>
                                        <View className='postpage-likecomment' onClick={() => likeComment(item.comment_id)}>
                                            <Image src={item.isLiked ? likeActivated : likeImg} className='postpage-likecomment-icon'></Image>
                                            <Text className='postpage-likecomment-num'>{item.comment_likes}</Text>
                                        </View>
                                        <View className='postpage-commentUserInfo'>
                                            <Image className='avatarStyle' src={item.avatar_url}></Image>
                                            <Text>{item.nickName}</Text>
                                            <View className='postpage-userLevel'>Lv.{item.user_level}</View>
                                            <View className='postpage-likeComment'></View>
                                        </View>
                                        <Text className='postpage-commentContent'>{item.comment_content}</Text>
                                        <Text className='postpage-editTime'>{item.comment_time}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View className='postpage-commentBar' style={{ bottom: keyboardHeight === 0 ? '30px' : keyboardHeight + 'px' }}>
                <Input
                    className='postpage-commentInput'
                    placeholder='发一条友善的评论'
                    adjustPosition={false}
                    onConfirm={sendComment}
                >
                </Input>
                <View className='postpage-likePost' onClick={likePost}>
                    <Image src={isLiked ? likeActivated : likeImg}></Image>
                    {postContent.likes_num > 99 ? '99+' : postContent.likes_num}
                </View>
                <View className='postpage-sharePost'></View>
            </View>
        </View>
    )
}