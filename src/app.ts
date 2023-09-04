import { PropsWithChildren, useEffect, useState } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useStore from './store/store'
import useUser from './store/userInfo'
import usePostData from './store/postData'
import useRequest from './store/request'

import './app.less'

function App({ children }: PropsWithChildren<any>) {
  // 数据 store ————————————————————————————————————————————————————————————
  const [statusBarHeight, setStatusBarHeight] = useStore((state) => [state.statusBarHeight, state.setStatusBarHeight])
  const [postData, setPostData] = usePostData((state) => [state, state.setPostData])
  const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

  const [userInfo, setUserInfo] = useUser((state) => [state, state.setUserInfo])

  useLaunch(async () => {
    // 获取全局 statusBarHeight        
    Taro.getSystemInfo({
      success: res => {
        if (res.statusBarHeight) {
          setStatusBarHeight(res.statusBarHeight - 10)
        }
      }
    })
    Taro.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#1e1e1e'
    })

    // 请求初始数据————————————————————————————————————————————————————————————

    // 验证登录状态    
    const token = Taro.getStorageSync('token');

    const loginValidateRes = await Taro.request({
      method: 'POST',
      url: requestUrl + '/v1/users/checkLoginStatus',
      data: {
        token: token,
        action: 'initialLoginValidation'
      }
    });

    // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
    if (loginValidateRes.statusCode.toString().startsWith('2')) {
      // 创建 userInfo 的浅拷贝，防止方法被覆写
      const userInfoArray = Object.keys(userInfo).filter(key => typeof userInfo[key] !== 'function' ) // 防止方法被覆写
      
      userInfoArray.forEach((key) => {
        setUserInfo({ [key]: Taro.getStorageSync(key) });
      });
    }

    // 获取所有Tags 
    // Taro.request({
    //   method: 'GET',
    //   url: requestUrl + '/posts/gettags',
    //   success(res) {
    //     setPostData({ tags: res.data.data.tags })
    //   }
    // })
  })

  // children 是将要会渲染的页面
  return children
}

export default App
