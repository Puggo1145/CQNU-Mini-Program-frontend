// 课表数据
import { create } from "zustand";

export interface LessonType {
    lesson_id: number
    name: string, // 课程名称
    place: string, // 上课地点
    teacher: string, // 教师
    start_time: number, // 在第几节课开始
    end_time: number, // 在第几节课结束
    day: number, // 星期几
    include_week: number[],
    // start_week: number, // 从第几周开始
    // end_week: number, // 到第几周结束
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

// {
//     lesson_id: 1,
//     name: "Vue前端框架", // 课程名称
//     place: "12301", // 上课地点
//     teacher: "汪平", // 教师
//     start_time: 7, // 在第几节课开始
//     end_time: 8, // 在第几节课结束
//     day: 1, // 星期几
//     include_week: [1, 3, 5, 7, 8],
//     color: "#ffa500", // 课程颜色
// },{
//     lesson_id: 2,
//     name: "软件工程", // 课程名称
//     place: "15301", // 上课地点
//     teacher: "孙晓玲", // 教师
//     start_time: 1, // 在第几节课开始
//     end_time: 2, // 在第几节课结束
//     day: 4, // 星期几
//     include_week: [1, 3, 5, 7, 9, 15],
//     color: "#c31c27", // 课程颜色
// },{
//     lesson_id: 3,
//     name: "安卓开发", // 课程名称
//     place: "T2208", // 上课地点
//     teacher: "曾智", // 教师
//     start_time: 3, // 在第几节课开始
//     end_time: 4, // 在第几节课结束
//     day: 3, // 星期几
//     include_week: [1, 3, 5, 7, 8],
//     color: "#000000", // 课程颜色
// },{
//     lesson_id: 4,
//     name: "编译原理", // 课程名称
//     place: "15201", // 上课地点
//     teacher: "訾玲玲", // 教师
//     start_time: 5, // 在第几节课开始
//     end_time: 6, // 在第几节课结束
//     day: 1, // 星期几
//     include_week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     color: "#a2b231", // 课程颜色
// }
