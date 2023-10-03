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
    requestUrl: 'http://127.0.0.1:3000', // local: http://127.0.0.1:3000/api, server: https://cqnu-backend-69914-4-1320770356.sh.run.tcloudbase.com/api
    PostImgsToOssUrl: 'https://cqnumini-posts-img.oss-cn-shanghai.aliyuncs.com',
    avatarToOssUrl: 'https://cqnumini-user-avatar.oss-cn-shanghai.aliyuncs.com',
    authUrl: 'http://127.0.0.1:8000',

    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setRequestUrl: (url) => set((state) => ({ ...state, ...url }))
}))

export default useRequest;
