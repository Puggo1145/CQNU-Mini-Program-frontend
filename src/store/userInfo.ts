import { create } from "zustand";
import Taro from "@tarojs/taro";

type State = {
    isLogin: boolean,
    user_id: string,
    phone_number: string,
    nick_name: string,
    avatar_url: string,
    user_level: number,
    user_exp: number,
    student_id: string,
    college: string,
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
    user_id: '56172i3h',
    phone_number: '19981201145',
    nick_name: 'Puggo',
    avatar_url: '',
    user_level: 6,
    user_exp: 1000,
    student_id: '2021050919079',
    college: '新闻与传媒学院',
    major: '网络与新媒体',
    grade: '大三',

    toLoginPage: () => {
        Taro.navigateTo({
            url: '/pages/login/login'
        })
    },
    
    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo }))
}))

export default useUser;