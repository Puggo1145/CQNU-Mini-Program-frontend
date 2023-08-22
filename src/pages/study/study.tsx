import { View, Text, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import useStore from '@/store/store'
import useCLasstable from '@/store/classTable'

import './study.css'

import bookCover from '../../static/reading/cover.png'

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

export default function Study() {

  const statusBarHeight = useStore(state => state.statusBarHeight)
  const classTable = useCLasstable(state => state.classTable)
  const startDate = useCLasstable(state => state.startDate) // 开学日期

  const [currentWeek, setCurrentWeek] = useState<number>(1) // 当前周数

  // 课程时间对照表: [hour, minute]
  const [timeTable, setTimeTable] = useState([
    [8, 30], [9, 25], [10, 30], [11, 25], [14, 30], [15, 25], [16, 30], [17, 25], [19, 30], [20, 25] 
  ])

  const [followingLessons, setFollowingLessons] = useState<LessonType[]>([
    {lesson_id: 1001, name: '今日无课', place: '',  teacher: '', start_time: 1, end_time: 2, day: 0, start_week: 1, end_week: 16, color: '',},
    {lesson_id: 1002, name: '今日无课', place: '',  teacher: '', start_time: 3, end_time: 4, day: 0, start_week: 1, end_week: 16, color: '',},
  ])

  useEffect(() => {
    const date = new Date();
    // 计算当前周数
    const week = Math.ceil((date.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24 * 7))
    setCurrentWeek(week)

    const day = date.getDay(); // 星期几 
    const hours = date.getHours(); // 几点
    const minutes = date.getMinutes(); // 几分

    const classTableToday = classTable.filter(item => item.day === day && item.start_week <= currentWeek); // 今日课程  
    
    // 获取今日剩余课程
    if (hours * 60 + minutes < 20 * 60 + 25) {
      const nextStartTime = timeTable.find(item => item[0] * 60 + item[1] > hours * 60 + minutes) as number[];
      const nextStartTimeIndex = timeTable.indexOf(nextStartTime) + 1;
      const followingLessonsToday = classTableToday.filter(item => item.start_time >= nextStartTimeIndex);
  
      // 当只有一节课时
      if (followingLessonsToday.length === 1) {
        setFollowingLessons([
          followingLessonsToday[0],
          {lesson_id: 1002, name: '今日无课', place: '',  teacher: '', start_time: 3, end_time: 4, day: 0, start_week: 1, end_week: 16, color: '',},
        ]);
      } 
      // 当没有课时
      else if (followingLessonsToday.length === 0) {
        setFollowingLessons([
          {lesson_id: 1001, name: '今日无课', place: '',  teacher: '', start_time: 1, end_time: 2, day: 0, start_week: 1, end_week: 16, color: '',},
          {lesson_id: 1002, name: '今日无课', place: '',  teacher: '', start_time: 3, end_time: 4, day: 0, start_week: 1, end_week: 16, color: '',},
        ]);
      } else {
        setFollowingLessons(followingLessonsToday);
      }
    } else {
      setFollowingLessons([
        {lesson_id: 1001, name: '今日无课', place: '',  teacher: '', start_time: 1, end_time: 2, day: 0, start_week: 1, end_week: 16, color: '',},
        {lesson_id: 1002, name: '今日无课', place: '',  teacher: '', start_time: 3, end_time: 4, day: 0, start_week: 1, end_week: 16, color: '',},
      ]);
    }
  
  }, [classTable, timeTable, currentWeek]);


  return (
    <View className='study-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
      <View className='study-header'>专业名称</View>
      <View className='study-content'>
        <View className='study-timetable'>
          <View className='study-timetable-top'>
            <Text>我的课程</Text>
            <View className='study-timetable-toTable' onClick={() => Taro.navigateTo({ url: '/pages/classtable/classtable' })}>查看课表></View>
          </View>
          <View className='study-timetable-items'>
            <View className='study-timetable-current'>
              <View className='study-timetable-left'>
                <Text></Text>
                <Text className='study-timetable-name'>{followingLessons[0].name}</Text>
                <Text>{followingLessons[0].place}</Text>
              </View>
              <View className='study-timetable-line'></View>
              <View className='study-timetable-right'>
                <Text>{timeTable[followingLessons[0].start_time - 1][0] + ':' + timeTable[followingLessons[0].start_time - 1][1]}</Text>
              </View>
            </View>
            <View className='study-timetable-following'>
              <View className='study-timetable-following-wrapper'>
                {
                  followingLessons.map((item, index) => {
                    return (
                      index > 0 &&
                      <View className='study-timetable-item' key={index}>
                        <Text>{item.name}</Text>
                        <Text>{timeTable[item.start_time - 1][0] + ':' + timeTable[item.start_time - 1][1]}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </View>
        </View>
        <View className='study-reading'>
          <View className='study-reading-top'>
            <Text>我的阅读</Text>
            <View className='study-reading-toBook'>查看书架></View>
          </View>
          <View className='study-reading-bookShelf'>
            <View className='study-reading-books-xsbd'>
              <Text className='study-reading-books-title'>新生必读</Text>
              <View className='study-reading-books'>

                <View className='study-reading-book'>
                  <Image src={bookCover} className='study0-reading-book-cover' mode='widthFix'></Image>
                  <View className='study-reading-book-right'>
                    <Text className='study-reading-book-title'>学生手册</Text>
                    <Text className='study-reading-book-description'>学生手册是一种学生手册</Text>
                    <View className='study-reading-book-mark'>强烈推荐</View>
                  </View>
                </View>

              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
