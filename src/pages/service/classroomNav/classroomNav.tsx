import { useState } from "react"
import { View,Text } from "@tarojs/components"
import Taro from "@tarojs/taro"

import Header from "@/common/Header/Header"

import './classroom.css'

interface locationType {
    mark: string
    name: string
    address: string
    latitude: number
    longitude: number
}

export default function classroomNav() {

    const [classroom, setClassroom] = useState<locationType[]>([
        {mark: '11-15', name: '弘德楼', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.614076, longitude: 106.305222},
        {mark: 'T', name: '特教楼（励志楼）', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.611142, longitude: 106.299911},
        {mark: '16', name: '田家炳书院', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.611627, longitude: 106.304851},
        {mark: '17', name: '图北楼', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.613414, longitude: 106.30152},
        {mark: '19', name: '知行楼', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.611058, longitude: 106.30233},
        {mark: '', name: '致用楼', address: '重庆市沙坪坝区虎溪镇大学城中路37号', latitude: 29.61083, longitude: 106.300463},
    ])


    function navigate(navInfo: locationType) {
        Taro.openLocation({
            latitude: navInfo.latitude,
            longitude: navInfo.longitude,
            name: navInfo.name,
            address: navInfo.address,
            scale: 15
        });
    }

    return (
        <View className="classroomNav-wrapper">
            <Header title={"教室导航"} />
            <View className="classroomNav-content">
                {
                    classroom.map((item, index) => {
                        return (
                            <View className="classroom-item" key={item.mark} onClick={() => navigate(item)}>
                                <Text className='classroom-item-name'>{item.name}</Text>
                                <Text className='classroom-item-mark'>教室号：{item.mark}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}
