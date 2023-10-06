import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react';

import useStore from '@/store/store'

import './service.css'

import classRoomNavImg from '../../static/service/classroomNav.png'
import mtAppointmentImg from '../../static/service/appointment.png'
import chooseClassImg from '../../static/service/chooseClass.png'
import getWaterImg from '../../static/service/getWater.png'
import paymentImg from '../../static/service/payment.png'
import runErrandsImg from '../../static/service/runErrands.png'

interface serviceType {
  name: string
  icon: string
  page: string
  type: 'toPage' | 'toMiniProgram'
  color: string
}

export default function Service() {

  const [studyServices, setStudyServices] = useState<serviceType[]>([
    { name: '教室导航', icon: classRoomNavImg, page: 'classroomNav', type: 'toPage', color: '#9356f7' },
    { name: '梦厅预约', icon: mtAppointmentImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
    { name: '快捷选课', icon: chooseClassImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
  ]);

  const [lifeServices, setLifeServices] = useState<serviceType[]>([
    { name: '送水服务', icon: getWaterImg, page: 'wx600e85d92f102852', type: 'toMiniProgram', color: '#4e6aff' },
    { name: '生活缴费', icon: paymentImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
    { name: '跑腿代取', icon: runErrandsImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
  ]);

  const statusBarHeight = useStore((state) => state.statusBarHeight)

  function toServicePage(page: string) {
    if (page === 'none') {
      return Taro.showToast({
        title: '暂未上线，敬请期待',
        icon: 'none'
      })
    }
    Taro.navigateTo({
      url: `/pages/service/${page}/${page}`
    })
  }

  function toMiniProgram(page: string) {
    if (page === 'none') {
      return Taro.showToast({
        title: '暂未上线，敬请期待',
        icon: 'none'
      })
    }
    Taro.navigateToMiniProgram({
      appId: page,
      path: '',
    });
  };

  return (
    <View className='service-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
      <View className='service-header'>服务中心</View>
      <View className='service-content'>
        <View className='service-content-section'>
          <Text>学业服务</Text>
          <View className='service-items'>
            {
              studyServices.map((item, index) => {
                return (
                  <View className='service-item' key={index} onClick={() => item.type === 'toPage' ? toServicePage(item.page) : toMiniProgram(item.page)} style={{ backgroundColor: item.color }}>
                    <Image src={item.icon}></Image>
                    <Text>{item.name}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>

        <View className='service-content-section'>
          <Text>生活服务</Text>
          <View className='service-items'>
            {
              lifeServices.map((item, index) => {
                return (
                  <View className='service-item' key={index} onClick={() => item.type === 'toPage' ? toServicePage(item.page) : toMiniProgram(item.page)} style={{ backgroundColor: item.color }}>
                    <Image src={item.icon}></Image>
                    <Text>{item.name}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        {/* <View className='service-content-section'>
          <Text>入驻服务</Text>
        </View> */}
      </View>
    </View>
  )
}
