import { PropsWithChildren, useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import PubSub from 'pubsub-js';

import useStore from './store/store'
import useUser from './store/userInfo'
import usePostData from './store/postData'
import useRequest from './store/request'

// launch Utilities
import LaunchInitiater from './common/launchUtilities/launchInitiater'

// styles
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
    const systemInfoRes = await Taro.getSystemInfo();
    if (systemInfoRes.statusBarHeight) {
      setStatusBarHeight(systemInfoRes.statusBarHeight - 10)
    };
  })

  // 数据初始化：App 进入、登录、注册时
  useEffect(() => {
    // launchInitiater
    let launchInitiater = new LaunchInitiater(requestUrl, userInfo, postData);
    // 第一次进入 APP ，全部加载一次
    // 验证登录状态    
    launchInitiater.initialLoginValidation();
    // 获取 OSS 的 parameters
    launchInitiater.getOssParams();
    // 获取所有Tags
    launchInitiater.getAllTags();

    // 新用户注册 或 登录，需要重新加载一次，请在登录或注册成功后，发布此消息！！！
    const getOssParamsToken = PubSub.subscribe('getOssParams', () => {
      launchInitiater = new LaunchInitiater(requestUrl, userInfo, postData); // 传新数据
      
      launchInitiater.getOssParams();
    });

    return () => {
      PubSub.unsubscribe(getOssParamsToken);
    }
  }, [])

  // children 是将要会渲染的页面
  return children
}

export default App