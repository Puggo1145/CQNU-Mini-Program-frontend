import { create } from "zustand";

export type PostDataType = {
    tags: string[],
    myPosts: number,
    likesNum: number,

    setPostData: (userPostData: Partial<PostDataType>) => void 
}

// 创建zustand store
const usePostData = create<PostDataType>((set) => ({
    tags: [],
    myPosts: 0,
    likesNum: 0,

    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setPostData: (postData) => set((state) => ({ ...state, ...postData }))
}))

export default usePostData;
