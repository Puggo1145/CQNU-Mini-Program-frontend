import { useState } from 'react'
import Taro from '@tarojs/taro'
import { useLoad, getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'

// stores
import useStore from '@/store/store'
import useUser from '@/store/userInfo'
import useRequest from '@/store/request'

// utilities
import PostpageFn from './PostpageFn' // 处理 postpage 页面的各种功能模块
import timeStrToDate from '@/common/utilities/timeStampToDate' // 时间戳转换为日期格式

// types
import { PostType } from '@/types/postpage'
import { commentType } from '@/types/postpage'

// css
import './postpage.css'

// images
import likeImg from '../../../static/post/post-like-icon.png'
import likeActivated from '../../../static/post/post-like-activated-icon.png'
import deleteImg from '../../../static/post/delete.png'



export default function postpage() {

// 数据store ————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)
    
    const post_id = getCurrentInstance().router?.params.post_id; // 目标 post_id
    const user_id = useUser((state) => state.id) // 本机用户 id

    const [request_url, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

// 基本 states ————————————————————————————————————————————————————————————————————————————————————
    const [postContent, setPostContent] = useState<PostType>({
        _id: '',
        title: '加载中...',
        content: '加载中...',
        pictures: [],
        tag: '',
        user: {
            _id: '',
            nick_name: '加载中...',
            avatar: '',
            user_level: 0,
            user_exp: 0,
        },
        likes_num: 0,
        comments_num: 0,
        createdAt: '',
    }); // 帖子内容
    const [comments, setComments] = useState<commentType[]>([]) // 评论内容
    
    // 页面功能 states
    const [commentsNum, setCommentsNum] = useState<number>(0); // 评论总数
    const [currentCommentView, setCurrentCommentView] = useState<number>(0) // 评论排序方式
    const [isLiked, setIsLiked] = useState<boolean>(false) // 是否点赞帖子
    const [moreIsOpened, setMoreIsOpened] = useState<boolean>(false) // 是否打开更多选项

// 页面功能 ————————————————————————————————————————————————————————————————————————————————————
    // 实例化 postpageFn    
    const postpageFn = new PostpageFn( request_url, post_id as string, user_id ); 

    // 页面内容初始化
    useLoad( async () => {
        // 1. 获取帖子所有内容
        const postContent = await postpageFn.getPostContent();
        setPostContent(postContent);
        
    });
        

    // 监听键盘弹起事件
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
    Taro.onKeyboardHeightChange((res) => {
        setKeyboardHeight(res.height)
    });

    // 开关 more 选项
    function handleMoreClick(event) {
        setMoreIsOpened(!moreIsOpened)
    };

    // 删除帖子
    // let deleteCheck = 0 // 点击两次才可以删除
    // function deletePost() {
    //     if (deleteCheck === 0) {
    //         Taro.showToast({
    //             title: '再次点击以确认删除',
    //             icon: 'none',
    //             duration: 2000
    //         })
    //         deleteCheck++
    //         return
    //     } else if (deleteCheck === 1) {
    //         Taro.request({
    //             method: 'POST',
    //             url: requestUrl + '/posts/deletepost',
    //             data: {
    //                 user_id: user_id,
    //                 post_id: postContent.post_id
    //             },
    //             success(res) {
    //                 if (res.statusCode === 200) {
    //                     Taro.showToast({
    //                         title: '删除成功',
    //                         icon: 'success',
    //                         duration: 2000
    //                     })
    //                     setTimeout(() => {
    //                         Taro.navigateBack()
    //                     }, 2000)
    //                 } else {
    //                     Taro.showToast({
    //                         title: '删除失败, 请重试',
    //                         icon: 'none',
    //                         duration: 2000
    //                     })
    //                 }
    //             }
    //         })

    //         deleteCheck = 0
    //     }
    // };


    return (
        <View className='postpage-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className='postpage-header'>
                <View className='postpage-header-left'>
                    <View className='postpage-back' onClick={() => { Taro.navigateBack() }}></View>
                    <View className='postpage-userInfo'>
                        <Image className='postpage-avatar avatarStyle' src={postContent.user.avatar}></Image>
                        <Text className='postpage-nickname'>{postContent.user.nick_name}</Text>
                        <View className='postpage-userLevel'>Lv.{postContent.user.user_level}</View>
                    </View>
                </View>
                <View className='postpage-options' onClick={() => setMoreIsOpened(!moreIsOpened)}></View>
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
                        <Text className='postpage-editTime'>编辑于{timeStrToDate(postContent.createdAt)}</Text>
                    </View>
                 
                    <View className='postpage-comments'>
                        <View className='postpage-commentsTop'>
                            <Text className='postpage-commentsNum'>共计{commentsNum}条评论</Text>
                            <View className='postpage-commentViewSwitcher'>
                                <View className={currentCommentView === 0 ? 'currentCommentView' : ''} onClick={() => { setCurrentCommentView(0) }}>热门</View>
                                <View className={currentCommentView === 1 ? 'currentCommentView' : ''} onClick={() => { setCurrentCommentView(1) }}>时间</View>
                            </View>
                        </View>
                        {/* {
                            comments.map((item) => {
                                return (
                                    <View className='postpage-comment' key={item.comment_id}>
                                        <View className='postpage-likecomment' onClick={() => {}}>
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
                        } */}
                    </View>
                </View>

            </View>
            <View className='postpage-commentBar' style={{ bottom: keyboardHeight === 0 ? '30px' : keyboardHeight + 'px' }}>
                <Input
                    className='postpage-commentInput'
                    placeholder='发一条友善的评论'
                    adjustPosition={false}
                    // onConfirm={sendComment}
                >
                </Input>
                {
                    keyboardHeight >= 30 ?
                        <View className='postpage-send'
                            // onClick={sendComment}
                        >发送</View>
                        :
                        <View className='postpage-right'>
                            <View className='postpage-likePost' onClick={() => {}}>
                                <Image src={isLiked ? likeActivated : likeImg}></Image>
                                {postContent.likes_num > 99 ? '99+' : postContent.likes_num}
                            </View>
                            <View className='postpage-sharePost'></View>
                        </View>
                }
            </View>
            {moreIsOpened &&
                <View className='postpage-more-backgroundMask' onClick={handleMoreClick}>
                    <View className='postpage-more' onClick={(event) => event.stopPropagation()}>
                        {user_id === postContent.user._id && <View className='postpage-item postpage-delete' onClick={() => {}}>
                            <Image src={deleteImg}></Image>
                            <Text>删除</Text>
                        </View>}
                    </View>
                </View>}
        </View>
    )
}