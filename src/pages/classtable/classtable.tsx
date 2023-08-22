import { View, Text } from "@tarojs/components"
import { useState, useEffect } from "react"

import Header from "@/common/Header/Header"

import './classtable.css'

interface LessonType {
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

export default function classtable() {

  const [week, setWeek] = useState<number>(1)

  const [currentDay, setCurrentDay] = useState<number>(1)
  
  const [lessons, setLessons] = useState<LessonType[]>([
    { lesson_id: 1001, name: '移动互联网开发实训', place: 'X 401 传媒', teacher: '刘洋', start_time: 1, end_time: 2, day: 1, start_week: 9, end_week: 16, color: '#FFC0CB' },
    { lesson_id: 1002, name: '传播效果与测量', place: '14304', teacher: '李勇', start_time: 5, end_time: 6, day: 1, start_week: 1, end_week: 16, color: '#fbc02d' },
    { lesson_id: 1003, name: '新媒体广告', place: '17210', teacher: '袁三省', start_time: 7, end_time: 8, day: 1, start_week: 1, end_week: 16, color: '#0dbb78' },
    { lesson_id: 1004, name: '用户体验分析与交互', place: 'X 401 传媒', teacher: '刘洋', start_time: 1, end_time: 2, day: 2, start_week: 1, end_week: 16, color: '#007acc' },
    { lesson_id: 1005, name: '移动互联网应用开发', place: 'X 401 传媒', teacher: '刘洋', start_time: 3, end_time: 4, day: 2, start_week: 1, end_week: 16, color: '#8bc34a' },
    { lesson_id: 1006, name: '职业生涯规划与就业指导', place: '15204', teacher: '孙柳艳', start_time: 5, end_time: 6, day: 2, start_week: 2, end_week: 10, color: '#007acc' },
    { lesson_id: 1007, name: '电子商务基础与应用', place: 'X 105 传媒', teacher: '杨航', start_time: 1, end_time: 2, day: 3, start_week: 1, end_week: 16, color: '#da44b4' },
    { lesson_id: 1008, name: '新媒体产品设计与项目管理', place: 'X 109 计信', teacher: '王慧', start_time: 3, end_time: 4, day: 3, start_week: 1, end_week: 16, color: '#e09f00' },
    { lesson_id: 1009, name: '网页设计与制作', place: '17309', teacher: '方龙', start_time: 5, end_time: 6, day: 3, start_week: 1, end_week: 16, color: '#3eceae' },
    { lesson_id: 1010, name: '管理学基础', place: '14401', teacher: '杨帆', start_time: 7, end_time: 8, day: 3, start_week: 1, end_week: 16, color: '#ffd974' },
    { lesson_id: 1011, name: '数字媒体产业研究', place: '12103', teacher: '杨晓茹', start_time: 1, end_time: 2, day: 4, start_week: 1, end_week: 16, color: '#ec6039' },
    { lesson_id: 1012, name: '移动互联网应用开发实训', place: 'X 401 传媒', teacher: '刘洋', start_time: 3, end_time: 4, day: 4, start_week: 9, end_week: 16, color: '#0a4e80' },
    { lesson_id: 1013, name: '公共关系学', place: '13204', teacher: '思扬', start_time: 1, end_time: 2, day: 5, start_week: 1, end_week: 16, color: '#057fd7' },
    { lesson_id: 1014, name: '媒介伦理与法规', place: '15303', teacher: '胡瑾', start_time: 3, end_time: 4, day: 5, start_week: 1, end_week: 16, color: '#0c81cf' },
    { lesson_id: 1015, name: '移动互联网应用开发', place: 'X 401 传媒', teacher: '刘洋', start_time: 5, end_time: 6, day: 5, start_week: 1, end_week: 8, color: '#53ea7c' },

  ])

  useEffect(() => {
    const date = new Date()
    const day = date.getDay()
    setCurrentDay(day)
    // const week = Math.ceil((date.getTime() - new Date('2021-02-22').getTime()) / (1000 * 60 * 60 * 24 * 7))
    // setWeek(week)
  }, [])

  return (
    <View className="classtable-wrapper">
      <Header title={'我的课表'} />
      <View className="classtable-content">
        <View className="classtable-top">
          <View className="classtable-topLeft">第{week}周</View>
          <View className="classtable-topRight">
            <View className="classtable-topRight-item">周一</View>
            <View className="classtable-topRight-item">周二</View>
            <View className="classtable-topRight-item">周三</View>
            <View className="classtable-topRight-item">周四</View>
            <View className="classtable-topRight-item">周五</View>
            <View className="classtable-topRight-item">周六</View>
            <View className="classtable-topRight-item">周日</View>
          </View>
        </View>
        <View className="classtable-bottom">
          <View className="classtable-left">
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">1</Text>
              <Text className="classtable-left-item-bottom">8:30 9:15</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">2</Text>
              <Text className="classtable-left-item-bottom">9:25 10:10</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">3</Text>
              <Text className="classtable-left-item-bottom">10:30 11:15</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">4</Text>
              <Text className="classtable-left-item-bottom">11:25 12:10</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">5</Text>
              <Text className="classtable-left-item-bottom">14:30 15:15</Text>
            </View>  
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">6</Text>
              <Text className="classtable-left-item-bottom">15:25 16:10</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">7</Text>
              <Text className="classtable-left-item-bottom">16:30 17:15</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">8</Text>
              <Text className="classtable-left-item-bottom">17:25 18:10</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">9</Text>
              <Text className="classtable-left-item-bottom">19:30 20:15</Text>
            </View>
            <View className="classtable-left-item">
              <Text className="classtable-left-item-top">10</Text>
              <Text className="classtable-left-item-bottom">20:25 21:10</Text>
            </View>
          </View>
          <View className="classtable-lessons">
            {
              lessons.map((item) => {
                return (
                  <View className={ item.start_week === week ? "classtable-lessons-item" : "classtable-lessons-item notThisWeek" } key={item.lesson_id} style={{ backgroundColor: item.color , gridColumnStart: item.day, gridColumnEnd: item.day + 1, gridRowStart: item.start_time, gridRowEnd: item.end_time + 1 }}>
                    <View className="classtable-lessons-item-name">{item.name}</View>
                    <View className="classtable-lessons-item-place">{item.place}</View>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    </View>
  )
}
