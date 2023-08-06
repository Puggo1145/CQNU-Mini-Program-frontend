import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import Content from './Content/Content'

import './index.css'

export default function Index() {

  useLoad(() => {
  })

  return (
    <BrowserRouter>
      <View className='index-wrapper'>
        <Header />
        <Content />
      </View>
    </BrowserRouter>
  )
}
