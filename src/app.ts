import { PropsWithChildren, useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useStore from './store/store'
import useUser from './store/userInfo'
import usePostData from './store/postData'
import useRequest from './store/request'

// launch Utilities
import getOssParams from './common/launchUtilities/getOssParams'
import initialLoginValidation from './common/launchUtilities/initialLoginValidation'
import getAllTags from './common/launchUtilities/getAllTags'

import './app.less'

function App({ children }: PropsWithChildren<any>) {
// 数据 store ————————————————————————————————————————————————————————————
  const [statusBarHeight, setStatusBarHeight] = useStore((state) => [state.statusBarHeight, state.setStatusBarHeight])
  const [postData, setPostData] = usePostData((state) => [state, state.setPostData])
  const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

  const [userInfo, setUserInfo] = useUser((state) => [state, state.setUserInfo])

// 请求初始数据————————————————————————————————————————————————————————————

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

    // 验证登录状态    
    initialLoginValidation(requestUrl, userInfo); // 验证登录状态，数据存入缓存

    // 获取 OSS 的 parameters
    getOssParams(requestUrl); // 获取 OSS Params，数据存入缓存


    // 获取所有Tags 
    getAllTags(requestUrl, setPostData); // 获取所有的Tags，数据存入 store
  })

  // children 是将要会渲染的页面
  return children
}

export default App