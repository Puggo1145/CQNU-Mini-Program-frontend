import { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { useLoad, getCurrentInstance } from '@tarojs/taro';
import { View, Text, Image, ScrollView, Textarea } from '@tarojs/components';
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
import defaultAvatar from '@/static/mine/defaultAvatar.png'
import likeImg from '../../../static/post/post-like-icon.png';
import likeActivated from '../../../static/post/post-like-activated-icon.png';
import deleteImg from '../../../static/post/delete.png';
import contentReviwing from "../../../static/common/contentReviewing.png";
import contentUnpass from "../../../static/common/ContentUnpass.png";

export default function postpage() {

    // 数据store ————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)

    const post_id = getCurrentInstance().router?.params.post_id; // 目标 post_id
    const user_id = useUser((state) => state.id) // 本机用户 id

    const [request_url] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

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
                avatar: '' || defaultAvatar,
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

    const [comments, setComments] = useState<commentType[]>([]); // 帖子评论
    const [commentContent, setCommentContent] = useState(''); // 评论内容
    const [commentNum, setCommentNum] = useState<number>(0); // 评论数

    const [page, setPage] = useState<number>(1); // 上拉加载
    const [loadLock, setLoadLock] = useState<boolean>(false); // 上拉加载锁

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

    const initialRender = useRef(true); // 首次渲染，禁止部分 useEffect 的初次执行

    // 页面功能 ————————————————————————————————————————————————————————————————————————————————————
    // 实例化 postpageFn    
    const postpageFn = new PostpageFn(request_url, post_id as string);

    // 页面内容初始化
    useLoad(async () => {
        Taro.showShareMenu({
            withShareTicket: true,
        });

        // 1. 获取帖子所有内容
        const postContent = await postpageFn.getPostContent();
        const postCommentsRes = await postpageFn.getPostComments(0, 1); // 第一次请求默认参数 - sort: 0, page: 1

        // 2. 更新页面内容
        setPostContent(postContent);
        setComments(postCommentsRes.data.comments);
        setCommentNum(postCommentsRes.length);
        setIsLiked(postContent.userFootPrint.isLiked ? true : false);
        setPage(Number(postCommentsRes.page) + 1);
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
    };
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            refreshComments();
        }
    }, [currentCommentView]);

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
            const res = await postpageFn.sendComment(commentContent, postContent.post.user._id);



            if (res) {
                refreshComments(); // 重新获取评论内容
                setCommentContent(''); // 清空评论框
            }
        }
    };

    // C. 删除帖子
    async function deletePost() {
        await postpageFn.deletePost();
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
        const pages = Taro.getCurrentPages();

        // 从分享链接进入帖子页面后，小程序栈只会存在一个页面，无法直接navigateBack，则返回首页
        if (pages.length === 1) {
            Taro.switchTab({
                url: '/pages/index/index'
            });
            return;
        };

        Taro.navigateBack();

        // 1. 更新上一页的点赞和评论数
        PubSub.publish('updatePostData', {
            post_id: post_id,
            likeNum: postContent.post.likeNum,
            commentNum: comments?.length,
        });
    };

    // E. 上拉加载
    async function updateComments() {
        if (loadLock) return;

        // 1. 上锁，防止在请求完成前重复请求
        setLoadLock(true);

        // 2. 重新获取评论内容
        const postComments = await postpageFn.getPostComments(currentCommentView, page);
        const newComments = comments?.concat(postComments.data.comments);
        setComments(newComments);
        setPage(Number(postComments.page) + 1);

    }
    // 3. 检查数据是否被请求完毕，否则解锁
    useEffect(() => {
        setLoadLock(comments.length === commentNum); // 当评论数等于评论总数时，上锁
    }, [comments]);

    // F. 刷新评论
    async function refreshComments() {
        const postCommentsRes = await postpageFn.getPostComments(currentCommentView, 1); // 刷新评论
        setComments(postCommentsRes.data.comments);
        setCommentNum(postCommentsRes.length);
        setPage(Number(postCommentsRes.page) + 1);
    };


    return (
        <View className='postpage-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className='postpage-header'>
                <View className='postpage-header-left'>
                    <View className='postpage-back' onClick={navigateBack}></View>
                    <View className='postpage-userInfo'>
                        <Image className='postpage-avatar avatarStyle' src={postContent.post.user.avatar || defaultAvatar}></Image>
                        <Text className='postpage-nickname'>{postContent.post.user.nick_name}</Text>
                        <View className='postpage-userLevel'>Lv.{postContent.post.user.user_level}</View>
                    </View>
                </View>
                <View className='postpage-options' onClick={() => setMoreIsOpened(!moreIsOpened)}></View>
            </View>

            <View className='postpage-mainSection'>

                <ScrollView
                    className='postpage-mainSection-wrapper'
                    scrollY={true}
                    enablePassive="true"
                    lowerThreshold={50}
                    onScrollToLower={updateComments}
                >

                    <View className='postpage-content'>
                        <Text className='postpage-title' userSelect>{postContent.post.title}</Text>
                        <Text className='postpage-description' userSelect>{postContent.post.content}</Text>
                        {
                            postContent.post.pictures?.map((picture, index) => {
                                let picturePath;
                                if (picture === 'reviewing') picturePath = contentReviwing;
                                else if (picture === 'block') picturePath = contentUnpass;
                                else picturePath = picture;

                                return (
                                    <Image className='postpage-image' src={picturePath} key={index} mode="widthFix"></Image>
                                )
                            })
                        }
                        <Text className='postpage-editTime'>发布于 {timeStrToDate(postContent.post.createdAt)}</Text>
                    </View>

                    <View className='postpage-comments'>
                        <View className='postpage-commentsTop'>
                            <Text className='postpage-commentsNum'>共计{commentNum}条评论</Text>
                            <View className='postpage-commentViewSwitcher'>
                                <View className={currentCommentView === 0 ? 'currentCommentView' : ''} onClick={() => switchCommentOrder(0)}>热门</View>
                                <View className={currentCommentView === 1 ? 'currentCommentView' : ''} onClick={() => switchCommentOrder(1)}>时间</View>
                            </View>
                        </View>
                        {
                            comments.map((item, index) => {
                                return (
                                    <View className='postpage-comment' key={index}>
                                        <View className='postpage-likecomment' onClick={() => likeComment(item._id)}>
                                            <Image src={item.isLiked ? likeActivated : likeImg} className='postpage-likecomment-icon'></Image>
                                            <Text className='postpage-likecomment-num'>{item.likeNum}</Text>
                                        </View>
                                        <View className='postpage-commentUserInfo'>
                                            <Image className='avatarStyle' src={item.user.avatar || defaultAvatar}></Image>
                                            <Text>{item.user.nick_name}</Text>
                                            {/* <View className='postpage-userLevel'>Lv.{item.user.user_level}</View> */}
                                            <View className='postpage-likeComment'></View>
                                        </View>
                                        <Text className='postpage-commentContent'>{item.content}</Text>
                                        <Text className='postpage-editTime'>{timeStrToDate(item.createdAt)}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

            </View>

            <View className='postpage-commentBar'
                style={{
                    bottom: keyboardHeight === 0 ? '30px' : keyboardHeight + 'px',
                    height: keyboardHeight === 0 ? '60px' : '90px'
                }}
            >
                <Textarea
                    className='postpage-commentInput'
                    placeholder='发一条友善的评论'
                    value={commentContent}
                    adjustPosition={false}
                    onInput={e => { setCommentContent(e.detail.value) }}
                    onConfirm={sendComment}
                    style={{ height: keyboardHeight === 0 ? '32px' : '64px' }}
                >
                </Textarea>
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