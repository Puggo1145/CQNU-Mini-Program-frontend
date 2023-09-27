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
    setClassTable: (classTable: LessonType[]) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useCLasstable = create<State & Action>((set) => ({
    classTable: [
        {
            lesson_id: 2213,
            name: '网页设计与制作',
            place: '图北楼-17309传媒机房',
            teacher: '方龙',
            start_time: 1,
            end_time: 2,
            day: 1,
            start_week: 5,
            end_week: 8,
            color: '#7405fa'
          },
          {
            lesson_id: 10088,
            name: '移动互联网应用开发实训',
            place: '汇贤楼（学院楼）-X 401（传媒）',
            teacher: '刘洋',
            start_time: 1,
            end_time: 2,
            day: 1,
            start_week: 9,
            end_week: 16,
            color: '#b2f3bf'
          },
          {
            lesson_id: 2098,
            name: '传播效果与测量',
            place: '弘德楼四栋-14304',
            teacher: '李勇',
            start_time: 5,
            end_time: 6,
            day: 1,
            start_week: 1,
            end_week: 16,
            color: '#f37c4f'
          },
          {
            lesson_id: 9480,
            name: '新媒体广告',
            place: '图北楼-17210传媒机房',
            teacher: '袁三省',
            start_time: 7,
            end_time: 8,
            day: 1,
            start_week: 1,
            end_week: 16,
            color: '#c98728'
          },
          {
            lesson_id: 10088,
            name: '用户体验分析与交互设计',
            place: '汇贤楼（学院楼）-X 401（传媒）',
            teacher: '刘洋',
            start_time: 1,
            end_time: 2,
            day: 2,
            start_week: 1,
            end_week: 16,
            color: '#3f149b'
          },
          {
            lesson_id: 10088,
            name: '移动互联网应用开发',
            place: '汇贤楼（学院楼）-X 401（传媒）',
            teacher: '刘洋',
            start_time: 3,
            end_time: 4,
            day: 2,
            start_week: 1,
            end_week: 8,
            color: '#5a342a'
          },
          {
            lesson_id: 9517,
            name: '形势与政策V',
            place: '砺志楼-T 2113',
            teacher: '张国建',
            start_time: 3,
            end_time: 4,
            day: 2,
            start_week: 13,
            end_week: 16,
            color: '#2cb5e8'
          },
          {
            lesson_id: 2116,
            name: '职业生涯规划与就业指导2',
            place: '弘德楼五栋-15204',
            teacher: '孙柳艳',
            start_time: 5,
            end_time: 6,
            day: 2,
            start_week: 2,
            end_week: 10,
            color: '#a8072d'
          },
          {
            lesson_id: 9574,
            name: '电子商务基础与应用',
            place: '汇贤楼（学院楼）-X 105(传媒)',
            teacher: '杨航',
            start_time: 1,
            end_time: 2,
            day: 3,
            start_week: 1,
            end_week: 16,
            color: '#60940d'
          },
          {
            lesson_id: 9578,
            name: '新媒体产品设计与项目管理',
            place: '汇贤楼（学院楼）-X 109(计信)',
            teacher: '王慧',
            start_time: 3,
            end_time: 4,
            day: 3,
            start_week: 1,
            end_week: 16,
            color: '#4a4952'
          },
          {
            lesson_id: 2213,
            name: '网页设计与制作',
            place: '图北楼-17309传媒机房',
            teacher: '方龙',
            start_time: 5,
            end_time: 6,
            day: 3,
            start_week: 5,
            end_week: 16,
            color: '#219a4f'
          },
          {
            lesson_id: 2102,
            name: '管理学基础',
            place: '弘德楼四栋-14401',
            teacher: '杨帆',
            start_time: 7,
            end_time: 8,
            day: 3,
            start_week: 1,
            end_week: 16,
            color: '#083f0c'
          },
          {
            lesson_id: 2031,
            name: '数字媒体产业研究',
            place: '弘德楼二栋-12103',
            teacher: '杨晓茹',
            start_time: 1,
            end_time: 2,
            day: 4,
            start_week: 1,
            end_week: 16,
            color: '#13b988'
          },
          {
            lesson_id: 10088,
            name: '移动互联网应用开发实训',
            place: '汇贤楼（学院楼）-X 401（传媒）',
            teacher: '刘洋',
            start_time: 3,
            end_time: 4,
            day: 4,
            start_week: 9,
            end_week: 16,
            color: '#8fe8de'
          },
          {
            lesson_id: 2067,
            name: '公共关系学',
            place: '弘德楼三栋-13204',
            teacher: '思扬',
            start_time: 1,
            end_time: 2,
            day: 5,
            start_week: 1,
            end_week: 16,
            color: '#23cac1'
          },
          {
            lesson_id: 2120,
            name: '媒介伦理与法规',
            place: '弘德楼五栋-15303',
            teacher: '胡瑾',
            start_time: 3,
            end_time: 4,
            day: 5,
            start_week: 1,
            end_week: 16,
            color: '#61674d'
          },
          {
            lesson_id: 10088,
            name: '移动互联网应用开发',
            place: '汇贤楼（学院楼）-X 401（传媒）',
            teacher: '刘洋',
            start_time: 5,
            end_time: 6,
            day: 5,
            start_week: 1,
            end_week: 8,
            color: '#d6c232'
          }
    ],
    startDate: '2023-9-4', // 开学时间

    setClassTable: (classTable) => set((state) => ({ ...state, classTable }))
}))

export default useCLasstable;
