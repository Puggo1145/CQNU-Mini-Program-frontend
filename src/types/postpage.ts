// 带 ？ 表示进入帖子后才会返回的详细数据
// pictures: 为必返回的字段，加 ? 是因为其可能为空

export interface PostType {
    _id: string
    title: string
    content: string
    pictures: string[]
    tag: string
    user: {
        _id: string
        avatar: string
        nick_name: string
        user_exp?: number
        user_level?: number
    }
    likes_num: number
    comments_num: number
    createdAt: string
}

export interface commentType {
    comment_id: string
    user: {
        _id: string
        nick_name: string
        user_level: number
        avatar: string
    }
    comment_content: string
    comment_likes: number
    createdAt: string
    isLiked: boolean
}