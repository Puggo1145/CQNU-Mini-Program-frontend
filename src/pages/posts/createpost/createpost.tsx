import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './createpost.css'

export default function createpost() {
  return (
    <View className='createpost-wrapper'>
      <View className='createpost-header'>
        <View className='createpost-header-back' onClick={() => {
          Taro.navigateBack()
        }}></View>
        <Text className='createpost-header-title'>发布</Text>
      </View>
    </View>
  )
}