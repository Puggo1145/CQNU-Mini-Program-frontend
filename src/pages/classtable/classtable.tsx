import { View, Text } from "@tarojs/components"
import { useState, useEffect } from "react"

import Header from "@/common/Header/Header"

import useCLasstable from "@/store/classTable"

import './classtable.css'

export default function classtable() {

  const startDate = useCLasstable((state) => state.startDate) // 开学日期

  const [currentWeek, setCurrentWeek] = useState<number>(1) // 当前周数
  const [maxWeek, setMaxWeek] = useState<number>(20) // 最大周数
  const [weekList, setWeekList] = useState<string[]>(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])

  const [currentDay, setCurrentDay] = useState<number>(1) // 当前星期几

  const lessons = useCLasstable(state => state.classTable); // 课程表

  // 计算当前周数
  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    setCurrentDay(day);

    // 计算当前周数
    const week = Math.ceil((date.getTime() - new Date(startDate.split('-').join('/')).getTime()) / (1000 * 60 * 60 * 24 * 7))
    setCurrentWeek(week)

    console.log(week);
    console.log(new Date(startDate.split('-').join('/')).getTime());
    
  }, []);

  // 切换周数
  function handleWeekSwitch(action: number) {
    if (currentWeek === 1 && action === 0) {
      setCurrentWeek(maxWeek)

      return
    } else if (currentWeek === maxWeek && action === 1) {
      setCurrentWeek(1)

      return
    }

    action === 0 ? setCurrentWeek(currentWeek - 1) : setCurrentWeek(currentWeek + 1)
  }

  return (
    <View className="classtable-wrapper">
      <Header title={'我的课表'} />
      <View className="classtable-content">
        <View className="classtable-top">
          <View className="classtable-topLeft">{currentWeek > 0 ? `第${currentWeek}周` : '未开学'}</View>
          <View className="classtable-topRight">
            {
              weekList.map((item, index) => {
                return (
                  <View className={index + 1 === currentDay ? "classtable-topRight-item currentDay" : "classtable-topRight-item"} key={index}>{item}</View>
                )
              })
            }
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
              lessons
                .filter(item => currentWeek <= item.end_week)  // 首先过滤掉结束日期在当前周之前的课程
                .sort((a, b) => {
                  // 如果两个课程的开始时间相同
                  if (a.start_time === b.start_time) {
                    // 优先显示本周的课程
                    if (a.start_week <= currentWeek && b.start_week > currentWeek) {
                      return 1;
                    }
                    if (b.start_week <= currentWeek && a.start_week > currentWeek) {
                      return -1;
                    }
                  }
                  return 0;  // 不更改顺序
                })
                .map((item, index) => (
                  <View
                    key={item.lesson_id + index}
                    className={item.start_week <= currentWeek ? "classtable-lessons-item" : "classtable-lessons-item notThisWeek"}
                    style={{
                      backgroundColor: item.color,
                      gridColumnStart: item.day,
                      gridColumnEnd: item.day + 1,
                      gridRowStart: item.start_time,
                      gridRowEnd: item.end_time + 1
                    }}>
                    {item.start_week > currentWeek && <Text className="classtable-lessons-item-notThisWeek">非本周</Text>}
                    <Text className="classtable-lessons-item-name">{item.name}</Text>
                    <Text className="classtable-lessons-item-place">{item.place.split('-')[1]}</Text>
                  </View>
                ))
            }
          </View>

        </View>
      </View>
      <View className="classtable-switchWeek">
        <View className="classtable-switchWeek-item" onClick={() => handleWeekSwitch(0)}></View>
        <View className="classtable-switchWeek-item" onClick={() => handleWeekSwitch(1)}></View>
      </View>
    </View>
  )
}
