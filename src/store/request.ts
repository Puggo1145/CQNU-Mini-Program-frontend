import { create } from "zustand";

type State = {
    requestUrl: string,
    PostImgsToOssUrl: string,
    avatarToOssUrl: string,
    authUrl: string, // 校园门户认证服务
}

type Action = {
    setRequestUrl: (requestUrl: Partial<State>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useRequest = create<State & Action>((set) => ({
    requestUrl: '',
    PostImgsToOssUrl: '',
    avatarToOssUrl: '',
    authUrl: '',

    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setRequestUrl: (url) => set((state) => ({ ...state, ...url }))
}))

export default useRequest;
