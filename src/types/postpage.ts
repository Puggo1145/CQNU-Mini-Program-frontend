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
    views: number
    likeNum: number
    commentNum: number
    comments?: commentType[]
    createdAt: string
    repliedAt?: string
    isTopped?: boolean
}

export interface commentType {
    _id: string
    user: {
        _id: string
        nick_name: string
        user_exp: number
        user_level: number
        avatar: string
    }
    content: string
    likeNum: number
    isLiked: boolean
    createdAt: string
}