import { PropsWithChildren, useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import useStore from './store/store'

import './app.less'

function App({ children }: PropsWithChildren<any>) {

  const [statusBarHeight, setStatusBarHeight] = useStore((state) => [state.statusBarHeight, state.setStatusBarHeight])

  useLaunch(() => {
    Taro.getSystemInfo({
      success: res => {
        // 获取全局 statusBarHeight        
        if (res.statusBarHeight) {
          setStatusBarHeight(res.statusBarHeight - 8)
        }
      }
    })
  })

  // children 是将要会渲染的页面
  return children
}

export default App
