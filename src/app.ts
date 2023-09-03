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

  const userInfo = Taro.getStorageSync('userInfo');

  useLaunch(() => {
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
    // 用户是否登录 
    useEffect(() => {
      console.log("id changed");
      
      if (userInfo.id !== '') {
        console.log("id set");
        setUserInfo({isLogin: true})
      }
    }, [userInfo.id]);


    // 获取所有Tags 
    Taro.request({
        method: 'GET',
        url: requestUrl + '/posts/gettags',
        success(res) {
            setPostData({tags: res.data.data.tags})
        }
    })
  })

  // children 是将要会渲染的页面
  return children
}

export default App
