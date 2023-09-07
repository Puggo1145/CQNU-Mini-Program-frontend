import { useState } from 'react';
import Taro from '@tarojs/taro';
import { useLoad, getCurrentInstance } from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';
import PubSub from 'pubsub-js';

// stores
import useStore from '@/store/store';
import useUser from '@/store/userInfo';
import useRequest from '@/store/request';

// utilities
import PostpageFn from './PostpageFn'; // 处理 postpage 页面的各种功能模块
import timeStrToDate from '@/common/utilities/timeStampToDate'; // 时间戳转换为日期格式

// types
import { PostType, commentType } from '@/types/postpage';

// css
import './postpage.css';

// images
import likeImg from '../../../static/post/post-like-icon.png';
import likeActivated from '../../../static/post/post-like-activated-icon.png';
import deleteImg from '../../../static/post/delete.png';



export default function postpage() {

    // 数据store ————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)

    const post_id = getCurrentInstance().router?.params.post_id; // 目标 post_id
    const user_id = useUser((state) => state.id) // 本机用户 id

    const [request_url, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

    // 基本 states ————————————————————————————————————————————————————————————————————————————————————
    const [postContent, setPostContent] = useState<postContent>({
        post: {
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
            views: 0,
            likeNum: 0,
            commentNum: 0,
            createdAt: '',
            repliedAt: '',
        },
        userFootPrint: {
            isLiked: false,
        }
    }); // 帖子内容

    const [comments, setComments] = useState<commentType []>([]); // 帖子评论
    const [commentContent, setCommentContent] = useState(''); // 评论内容

    // 页面功能 states
    const [currentCommentView, setCurrentCommentView] = useState<number>(0) // 评论排序方式: 0 为热门，1 为时间
    const [moreIsOpened, setMoreIsOpened] = useState<boolean>(false) // 是否打开更多选项

    const [isLiked, setIsLiked] = useState<boolean>(false) // 是否点赞帖子

    interface postContent {
        post: PostType,
        userFootPrint: {
            isLiked: boolean,
        }
    };

    // 页面功能 ————————————————————————————————————————————————————————————————————————————————————
    // 实例化 postpageFn    
    const postpageFn = new PostpageFn(request_url, post_id as string);

    // 页面内容初始化
    useLoad(async () => {

        // 1. 获取帖子所有内容
        const postContent = await postpageFn.getPostContent();
        const postComments = await postpageFn.getPostComments(0);

        // 2. 更新页面内容
        setPostContent(postContent);
        setComments(postComments);
        setIsLiked(postContent.userFootPrint.isLiked ? true : false);
    });

    // 监听键盘弹起事件
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
    Taro.onKeyboardHeightChange((res) => {
        setKeyboardHeight(res.height)
    });

    // 开关 more 选项
    function handleMoreClick() {
        setMoreIsOpened(!moreIsOpened)
    };

    // 切换评论排序方式
    async function switchCommentOrder(currentCommentView: number) {
        setCurrentCommentView(currentCommentView);
        const postComments = await postpageFn.getPostComments(currentCommentView);
        setComments(postComments);
    };

    // A. 点赞帖子
    function likePost() {
        // 1. 客户端先反馈
        const updatedLikeNum = postContent.post.likeNum + (isLiked ? -1 : 1);
        setPostContent({
            ...postContent,
            post: {
                ...postContent.post,
                likeNum: updatedLikeNum
            }
        });

        // 2. 更新本页点赞
        setIsLiked(!isLiked);

        // 3. 更新数据库
        postpageFn.likePost();
    };

    // B. 发送评论
    async function sendComment() {
        if (commentContent === '') {
            Taro.showToast({
                title: '评论不能为空',
                icon: 'error',
            });
            return;
        } else {
            await postpageFn.sendComment(commentContent);

            // 重新获取评论内容
            const postComments = await postpageFn.getPostComments(currentCommentView);
            setComments(postComments);

            // 清空评论框
            setCommentContent('');
        }
    };

    // C. 删除帖子
    async function deletePost() {
        const deletePostRes = await postpageFn.deletePost();

        console.log(deletePostRes);
    };

    // D. 点赞评论
    async function likeComment(comment_id: string) {
        // 1. 客户端先反馈
        const updatedComments = comments?.map((item) => {
            if (item._id === comment_id) {
                return {
                    ...item,
                    isLiked: !item.isLiked,
                    likeNum: item.likeNum + (!item.isLiked ? 1 : -1)
                };
            }
            return item;
        });

        setComments(updatedComments);

        await postpageFn.likeComment(comment_id);
    };

    // F. 返回上一页
    function navigateBack() {
        Taro.navigateBack();

        // 1. 更新上一页的点赞和评论数
        PubSub.publish('updatePostData', {
            post_id: post_id,
            likeNum: postContent.post.likeNum,
            commentNum: comments?.length,
        });
    };


    return (
        <View className='postpage-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className='postpage-header'>
                <View className='postpage-header-left'>
                    <View className='postpage-back' onClick={navigateBack}></View>
                    <View className='postpage-userInfo'>
                        <Image className='postpage-avatar avatarStyle' src={postContent.post.user.avatar}></Image>
                        <Text className='postpage-nickname'>{postContent.post.user.nick_name}</Text>
                        <View className='postpage-userLevel'>Lv.{postContent.post.user.user_level}</View>
                    </View>
                </View>
                <View className='postpage-options' onClick={() => setMoreIsOpened(!moreIsOpened)}></View>
            </View>
            <View className='postpage-mainSection'>

                <View className='postpage-mainSection-wrapper'>

                    <View className='postpage-content'>
                        <Text className='postpage-title' userSelect>{postContent.post.title}</Text>
                        <Text className='postpage-description' userSelect>{postContent.post.content}</Text>
                        {
                            postContent.post.pictures?.map((item, index) => {
                                return (
                                    <Image className='postpage-image' src={item} key={index} mode="widthFix"></Image>
                                )
                            })
                        }
                        <Text className='postpage-editTime'>发布于 {timeStrToDate(postContent.post.createdAt)}</Text>
                    </View>

                    <View className='postpage-comments'>
                        <View className='postpage-commentsTop'>
                            <Text className='postpage-commentsNum'>共计{comments.length}条评论</Text>
                            <View className='postpage-commentViewSwitcher'>
                                <View className={currentCommentView === 0 ? 'currentCommentView' : ''} onClick={() => switchCommentOrder(0)}>热门</View>
                                <View className={currentCommentView === 1 ? 'currentCommentView' : ''} onClick={() => switchCommentOrder(1)}>时间</View>
                            </View>
                        </View>
                        {
                            comments?.map((item) => {
                                return (
                                    <View className='postpage-comment' key={item._id}>
                                        <View className='postpage-likecomment' onClick={() => likeComment(item._id)}>
                                            <Image src={item.isLiked ? likeActivated : likeImg} className='postpage-likecomment-icon'></Image>
                                            <Text className='postpage-likecomment-num'>{item.likeNum}</Text>
                                        </View>
                                        <View className='postpage-commentUserInfo'>
                                            <Image className='avatarStyle' src={item.user.avatar}></Image>
                                            <Text>{item.user.nick_name}</Text>
                                            <View className='postpage-userLevel'>Lv.{item.user.user_level}</View>
                                            <View className='postpage-likeComment'></View>
                                        </View>
                                        <Text className='postpage-commentContent'>{item.content}</Text>
                                        <Text className='postpage-editTime'>{timeStrToDate(item.createdAt)}</Text>
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
                    value={commentContent}
                    adjustPosition={false}
                    onInput={e => { setCommentContent(e.detail.value) }}
                    onConfirm={sendComment}
                >
                </Input>
                {
                    keyboardHeight >= 30 ?
                        <View className='postpage-send'
                            onClick={sendComment}
                        >发送</View>
                        :
                        <View className='postpage-right'>
                            <View className='postpage-likePost' onClick={likePost}>
                                <Image src={isLiked ? likeActivated : likeImg}></Image>
                                {postContent.post.likeNum > 99 ? '99+' : postContent.post.likeNum}
                            </View>
                            <View className='postpage-sharePost'></View>
                        </View>
                }
            </View>
            {moreIsOpened &&
                <View className='postpage-more-backgroundMask' onClick={handleMoreClick}>
                    <View className='postpage-more' onClick={(event) => event.stopPropagation()}>
                        {user_id === postContent.post.user._id && <View className='postpage-item postpage-delete' onClick={deletePost}>
                            <Image src={deleteImg}></Image>
                            <Text>删除</Text>
                        </View>}
                    </View>
                </View>}
        </View>
    )
}