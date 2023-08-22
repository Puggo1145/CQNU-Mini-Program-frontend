import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import useStore from '@/store/store'

import './study.css'

import bookCover from '../../static/reading/cover.png'

export default function Study() {

  const statusBarHeight = useStore(state => state.statusBarHeight)

  return (
    <View className='study-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
      <View className='study-header'>专业名称</View>
      <View className='study-content'>
        <View className='study-timetable'>
          <View className='study-timetable-top'>
            <Text>我的课程</Text>
            <View className='study-timetable-toTable' onClick={() => Taro.navigateTo({url: '/pages/classtable/classtable'})}>查看课表></View>
          </View>
          <View className='study-timetable-items'>
            <View className='study-timetable-current'>
              <View className='study-timetable-left'>
                <Text>距离下一节课还有4分钟</Text>
                <Text className='study-timetable-name'>产品运营</Text>
                <Text>教室：</Text>
              </View>
              <View className='study-timetable-line'></View>
              <View className='study-timetable-right'>
                <Text>10:30</Text>
              </View>
            </View>
            <View className='study-timetable-following'>
              <View className='study-timetable-following-wrapper'>
                <View className='study-timetable-item'>
                  <Text>网页设计与制作</Text>
                  <Text>14:30</Text>
                </View>
                <View className='study-timetable-item'>
                  <Text>管理学基础</Text>
                  <Text>16:30</Text>
                </View>
                <View className='study-timetable-item'>
                  <Text>数字产业</Text>
                  <Text>19:30</Text>
                </View>
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
