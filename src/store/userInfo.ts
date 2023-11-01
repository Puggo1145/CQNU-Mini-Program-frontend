import { create } from "zustand";
import Taro from "@tarojs/taro";
import defaultAvatar from '@/static/mine/defaultAvatar.png'

export type UserInfoType = {
    isLogin: boolean,
    id: string,
    openid: string,
    role: 'user' | 'admin' | 'manager-cat',
    student_id: string,
    nick_name: string,
    avatar: string,
    user_level: number,
    user_exp: number,
    identity: string
    faculty: string,
    major: string,
    grade: string,

    officialPwd: string,
    headerCookie: any,

    toLoginPage: () => void

    setUserInfo: (userInfo: Partial<UserInfoType>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useUser = create<UserInfoType>((set) => ({
    isLogin: false,
    id: '',
    openid: '',
    role: 'user',
    student_id: '',
    nick_name: '',
    avatar: '' || defaultAvatar,
    user_level: 0,
    user_exp: 0,
    faculty: '',
    identity: '',
    major: '',
    grade: '',

    // 校园门户
    officialPwd: '',
    headerCookie: null, // 登入教务系统的请求头cookie

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