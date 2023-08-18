import { create } from "zustand";

type State = {
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
}

type Action = {
    setUserInfo: (userInfo: Partial<State>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useUser = create<State & Action>((set) => ({
    user_id: 'test_id',
    phone_number: '',
    nick_name: 'Puggo',
    avatar_url: '',
    user_level: 6,
    user_exp: 10,
    student_id: '2021050919079',
    college: '好好学院',
    major: '好好',
    grade: '大三',
    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo }))
}))

export default useUser;
