import { create } from "zustand";
import Taro from "@tarojs/taro";

type UserInfoType = {
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

    setUserInfo: (userInfo: Partial<UserInfoType>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useUser = create<UserInfoType>((set) => ({
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
    
    // 定义setUserInfo操作，将用户信息合并到当前状态
    setUserInfo: (userInfo) => {
        // 数据发生改变时，自动更新登录状态，如果 openid 存在，则将登录状态设置为 true
        userInfo.openid !== '' ? set((state) => ({ ...state, isLogin: true })) : set((state) => ({ ...state, isLogin: false }))

        set((state) => ({ ...state, ...userInfo }))
    }
}))


export default useUser;
export type { UserInfoType };