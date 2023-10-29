import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react';

import { recordClickData } from '@/common/utilities/recordClickData';

import useStore from '@/store/store'
import useRequest from '@/store/request';
import useUser from '@/store/userInfo';

import './service.css'

import classRoomNavImg from '../../static/service/classroomNav.png'
import mtAppointmentImg from '../../static/service/appointment.png'
import examScoresImg from '../../static/service/examScores.png'
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
  requireLogin?: boolean
}

export default function Service() {

  const [studyServices] = useState<serviceType[]>([
    { name: '教室导航', icon: classRoomNavImg, page: 'classroomNav', type: 'toPage', color: '#9356f7' },
    { name: '梦厅预约', icon: mtAppointmentImg, page: 'none', type: 'toPage', color: '#9e9e9e', requireLogin: true },
    { name: '成绩查询', icon: examScoresImg, page: 'examScores', type: 'toPage', color: '#43CCF8', requireLogin: true },
  ]);

  const [lifeServices] = useState<serviceType[]>([
    { name: '送水服务', icon: getWaterImg, page: 'wx600e85d92f102852', type: 'toMiniProgram', color: '#4e6aff' },
    { name: '生活缴费', icon: paymentImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
    { name: '跑腿代取', icon: runErrandsImg, page: 'none', type: 'toPage', color: '#9e9e9e' },
  ]);

  const statusBarHeight = useStore((state) => state.statusBarHeight);
  const requestUrl = useRequest(state => state.requestUrl);
  const officialPwd = useUser(state => state.officialPwd);
  const isLogin = useUser(state => state.isLogin);

  const toServicePage = async (target: { type: string, page: string, name: string, requireLogin: boolean }) => {
    if (target.page === 'none') {
      return Taro.showToast({
        title: '暂未上线，敬请期待',
        icon: 'none'
      })
    }

    // 记录点击数据
    await recordClickData({ url: requestUrl, page: target.name });

    if (target.type === 'toPage') {
      // 1. 检查是否已登录到校园门户
      if (!isLogin) {
        Taro.navigateTo({url: `/pages/login/login`});
      } else if (target.requireLogin && !officialPwd) {
        Taro.navigateTo({ url: `/pages/mine/linkOfficial/linkOfficial?action=` });
      };


      Taro.navigateTo({
        url: `/pages/service/${target.page}/${target.page}`
      });

      
    } else {
      Taro.navigateToMiniProgram({
        appId: target.page,
        path: '',
      });
    }
  }

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
                  <View className='service-item' key={index} onClick={() => toServicePage({ type: item.type, page: item.page, name: item.name, requireLogin: item.requireLogin || false })} style={{ backgroundColor: item.color }}>
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
                  <View className='service-item' key={index} onClick={() => toServicePage({ type: item.type, page: item.page, name: item.name, requireLogin: item.requireLogin || false })} style={{ backgroundColor: item.color }}>
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
