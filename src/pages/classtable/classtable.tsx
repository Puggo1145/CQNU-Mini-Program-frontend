import { View, Text, Button } from "@tarojs/components"
import { useState, useEffect } from "react"
import Taro from "@tarojs/taro"
import { makeRequest } from "@/common/utilities/requester"

import Header from "@/common/Header/Header"

import useCLasstable from "@/store/classTable"
import useUser from "@/store/userInfo"
import useRequest from "@/store/request"

import { newDateForIOS } from "@/common/utilities/newDateForIOS"

import './classtable.css'

export default function classtable() {

  const headerCookie = useUser(state => state.headerCookie); // 链接校园门户后获得的教务系统 cookie
  const authUrl = useRequest(state => state.authUrl);
  const setClassTable = useCLasstable(state => state.setClassTable);
  const startDate = useCLasstable((state) => state.startDate); // 开学日期

  const [maxWeek] = useState<number>(20) // 最大周数
  const [weekList] = useState<string[]>(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])

  const [currentDay, setCurrentDay] = useState<number>(1) // 当前星期几 useState钩子函数 并定义了一个名为 currentDay 的状态及其对应的更新函数 setCurrentDay 在调用 useState 时 我们传入了一个初始值 1 表示当前星期一
  const [currentWeek, setCurrentWeek] = useState<number>(1) // 当前周数

  const lessons = useCLasstable(state => state.classTable); // 课程表

  // 计算当前周数
  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    setCurrentDay(day);

    // 计算当前周数
    const week = Math.ceil((date.getTime() - newDateForIOS(startDate).getTime()) / (1000 * 60 * 60 * 24 * 7))
    setCurrentWeek(week)
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
  };

  // 请求课表
  async function getTimeTable() {
    if (!headerCookie) return Taro.navigateTo({url: '/pages/mine/linkOfficial/linkOfficial?action=getTimeTable'});

    Taro.showLoading({
      title: '正在同步',
    });

    const res = await makeRequest({
      method: 'POST',
      url: `${authUrl}`,
      path: '/withCookie',
      requestService: "lkofficial",
      data: {
        action: 'getTimeTable',
        headerCookie,
      },
      timeout: 10000
    });

    if (res.statusCode === 200) {
      setClassTable(res.data.data);
      Taro.setStorageSync('classTable', res.data.data);
      
      Taro.showToast({
        title: '同步成功',
        icon: 'success',
        duration: 1000
      });
    } else {
      Taro.showToast({
        title: '同步失败，请重试',
        icon: 'none',
        duration: 2000
      });
    }
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
                .filter(item => item.include_week.includes(currentWeek))
                .map((item, index) => (
                  <View
                    key={item.lesson_id + index}
                    className={item.include_week[0] <= currentWeek ? "classtable-lessons-item" : "classtable-lessons-item notThisWeek"}
                    style={{
                      backgroundColor: item.color,
                      gridColumnStart: item.day,
                      gridColumnEnd: item.day + 1,
                      gridRowStart: item.start_time,
                      gridRowEnd: item.end_time + 1,
                    }}>
                    {item.include_week[0] > currentWeek && <Text className="classtable-lessons-item-notThisWeek">非本周</Text>}
                    <Text className="classtable-lessons-item-name">{item.name}</Text>
                    <Text className="classtable-lessons-item-place">{item.place.split('-')[1]}</Text>
                  </View>
                ))
            }
          </View>

        </View>
      </View>
      <View className="classtable-switchWeek">
        {lessons.length !== 0 && <View className="classTable-update" onClick={getTimeTable}>更新课表</View>}
        <View className="classtable-switchWeek-item" onClick={() => handleWeekSwitch(0)}></View>
        <View className="classtable-switchWeek-item" onClick={() => handleWeekSwitch(1)}></View>
      </View>
      {
        lessons.length === 0 && 
        <View className="classtable-getTable">
          <View className="classtable-getTable-desc">没有同步课程？点击去同步！</View>
          <Button className="classtable-getTable-sync" onClick={getTimeTable}>一键同步</Button>
        </View>
      }
    </View>
  )
}
