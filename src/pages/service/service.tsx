import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import './service.css'

export default function Service() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='service'>
      <Text>Hello world!</Text>
    </View>
  )
}
