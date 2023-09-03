import { create } from "zustand";
import Taro from "@tarojs/taro";

type State = {
    isLogin: boolean,
    id: string,
    openid: string,
    student_id: string,
    nick_name: string,
    avatar: string,
    user_level: number,
    user_exp: number,
    faculty: string,
    major: string,
    grade: string,
    toLoginPage: () => void
}

type Action = {
    setUserInfo: (userInfo: Partial<State>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useUser = create<State & Action>((set) => ({
    isLogin: false,
    id: '',
    openid: '',
    student_id: '',
    nick_name: '',
    avatar: '',
    user_level: 1,
    user_exp: 0,
    faculty: '',
    major: '',
    grade: '',

    toLoginPage: () => {
        Taro.navigateTo({
            url: '/pages/login/login'
        })
    },
    
    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo }))
}))

export default useUser;