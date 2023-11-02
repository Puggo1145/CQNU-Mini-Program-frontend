import { View, Text } from "@tarojs/components"
import Taro from "@tarojs/taro"

import useStore from "@/store/store"

import './Header.css'

export default function Header({title}: {title: string}) {
    
    const statusBarHeight = useStore((state) => state.statusBarHeight)

    return (
        <View className="header" style={{paddingTop: statusBarHeight + 'px'}}>
            <View className='header-back' onClick={() => {
                const pages = Taro.getCurrentPages();
                
                if (pages.length === 1) {
                    Taro.switchTab({
                        url: '/pages/index/index'
                    });
                    return;
                };
        
                Taro.navigateBack();
            }}></View>
            <Text className='header-title'>{title}</Text>
        </View>
    )
}
