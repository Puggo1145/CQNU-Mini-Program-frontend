import { View } from '@tarojs/components'
import { BrowserRouter } from 'react-router-dom'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useStore from '@/store/store'

import Header from './Header/Header'
import Content from './Content/Content'

import './index.css'

export default function Index() {

  const statusBarHeight = useStore((state) => state.statusBarHeight)

  useLoad(() => {
    Taro.showShareMenu({
      withShareTicket: true,
    });
  });

  return (
    <BrowserRouter>
      <View className='index-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
        <Header />
        <Content />
      </View>
    </BrowserRouter>
  )
}
