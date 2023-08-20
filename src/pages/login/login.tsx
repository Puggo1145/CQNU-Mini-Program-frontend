import { View, Text, Image, Button } from "@tarojs/components"
import Taro from "@tarojs/taro"

import useStore from "@/store/store"

import './login.css'

import loginImg from '../../static/login/discover.png'

export default function login() {

    const statusBarHeight = useStore((state) => state.statusBarHeight)

    return (
        <View className="login-wrapper" style={{paddingTop: statusBarHeight + 'px'}}>
            <View className="login-header">
                <View className="login-header-back" onClick={() => {Taro.navigateBack()}}></View>
                <Text>登录</Text>
            </View>
            <View className="login-content">
                <Image src={loginImg} mode="widthFix"></Image>
                <Text>系统将在第一次登录时自动为您注册账号</Text>
                <Button>登录</Button>
            </View>
        </View>
    )
}
