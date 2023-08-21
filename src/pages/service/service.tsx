import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'


import useStore from '@/store/store'

import './service.css'

import classRoomNavImg from '../../static/service/classroomNav.png'
import mtAppointmentImg from '../../static/service/appointment.png'
import chooseClassImg from '../../static/service/chooseClass.png'
import getWaterImg from '../../static/service/getWater.png'
import paymentImg from '../../static/service/payment.png'
import runErrandsImg from '../../static/service/runErrands.png'

export default function Service() {

  const statusBarHeight = useStore((state) => state.statusBarHeight)

  function toServicePage(path: string) {
    Taro.navigateTo({
      url: `/pages/service/${path}/${path}`
    })
  }

  return (
    <View className='service-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
      <View className='service-header'>服务中心</View>
      <View className='service-content'>
        <View className='service-content-section'>
          <Text>学业服务</Text>
          <View className='service-items'>
            <View className='service-classroomNav service-item' onClick={() => toServicePage('classroomNav')}>
              <Image src={classRoomNavImg}></Image>
              教室导航
            </View>
            <View className='service-mtAppointment service-item'>
              <Image src={mtAppointmentImg}></Image>
              梦厅预约
            </View>
            <View className='service-choooseClass service-item'>
              <Image src={chooseClassImg}></Image>
              快捷选课
            </View>
          </View>
        </View>
        <View className='service-content-section'>
          <Text>生活服务</Text>
          <View className='service-items'>
            <View className='service-getWater service-item'>
              <Image src={getWaterImg}></Image>
              送水服务
            </View>
            <View className='service-payment service-item'>
              <Image src={paymentImg}></Image>
              生活缴费
            </View>
            <View className='service-runErrands service-item'>
              <Image src={runErrandsImg}></Image>
              跑腿代取
            </View>
          </View>
        </View>
        {/* <View className='service-content-section'>
          <Text>入驻服务</Text>
        </View> */}
      </View>
    </View>
  )
}
