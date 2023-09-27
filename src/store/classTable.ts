import { create } from "zustand";

export interface LessonType {
    lesson_id: number
    name: string, // 课程名称
    place: string, // 上课地点
    teacher: string, // 教师
    start_time: number, // 在第几节课开始
    end_time: number, // 在第几节课结束
    day: number, // 星期几
    start_week: number, // 从第几周开始
    end_week: number, // 到第几周结束
    color: string, // 课程颜色
}

type State = {
    classTable: LessonType[],
    startDate: string, // 开学时间
}

type Action = {
    setClassTable: (classTable: LessonType[]) => void
}

// 创建zustand store
const useCLasstable = create<State & Action>((set) => ({
    classTable: [],
    startDate: '2023-9-4', // 开学时间

    setClassTable: (classTable) => set((state) => ({ ...state, classTable }))
}))

export default useCLasstable;
