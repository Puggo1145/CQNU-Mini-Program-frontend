import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import './study.css'

export default function Study() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='study'>
      <Text>Hello world!</Text>
    </View>
  )
}
