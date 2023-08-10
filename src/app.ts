import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    Taro.getSystemInfo({
      success: res => {
        console.log(res.statusBarHeight);
      }
    })
  })


  // children 是将要会渲染的页面
  return children
}

export default App
