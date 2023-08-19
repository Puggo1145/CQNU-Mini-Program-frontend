import { create } from "zustand";

type State = {
    tags: string[],
}

type Action = {
    setPostData: (userInfo: Partial<State>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const usePostData = create<State & Action>((set) => ({
    tags: [],
    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setPostData: (postData) => set((state) => ({ ...state, ...postData }))
}))

export default usePostData;
