import { View, Text } from "@tarojs/components"
import Taro from "@tarojs/taro"
import useStore from "@/store/store"

import './search.css'

export default function search() {

    const statusBarHeight = useStore((state) => state.statusBarHeight)

    return (
        <View className='search-wrapper' style={{paddingTop: statusBarHeight + 'px'}}>
            <View className="search-header">
                <View className="search-header-back" onClick={() => {
                    Taro.navigateBack()
                }}></View>
                <Text>搜索</Text>
            </View>
            <input className="search-searchBar" placeholder="即时滚动搜索热词"></input>
        </View>
    )
}
