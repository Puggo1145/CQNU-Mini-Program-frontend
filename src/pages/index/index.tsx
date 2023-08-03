import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import Header from './Header/Header'
import Content from './Content/Content'

import './index.css'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index-wrapper'>
      <Header />
      <Content />
    </View>
  )
}
