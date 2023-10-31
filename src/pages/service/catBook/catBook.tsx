import { View, Text, Image } from '@tarojs/components';
import { useState } from 'react';

import Header from '@/common/Header/Header';

import './catBook.less';

import defaultAvatar from '../../../static/mine/defaultAvatar.png';

interface catsType {
    img: string,
    name: string,
    sex?: string,
    breed?: string, // 品种
    position?: string, // 位置
}

interface contributorType {
    _id: string,
    avatar: string,
    nick_name: string,
}

export default function catBook() {

    const [cats, setCats] = useState<catsType[]>([

    ]);

    const [contributors, setContributors] = useState<contributorType[]>([
        { _id: "xxx", avatar: defaultAvatar, nick_name: '小明' },
        { _id: "xx2", avatar: defaultAvatar, nick_name: '小红' },
    ]);

    const [trendingCats, setTrendingCats] = useState<catsType[]>([
        {img: "", name: "屁屁"},
        {img: "", name: "年糕"},
        {img: "", name: "小袜子"},
        {img: "", name: "轴对称"},
    ]);

    return (
        <View className='catBook-wrapper'>
            <Header title="猫猫图鉴" />
            <View className='catBook-preface'>
                <View className='catBook-contribution'>
                    <Text className='catBook-contribution-title'>图鉴贡献者</Text>
                    <View className='catBook-contributors'>
                        {
                            contributors.map((item) => {
                                return (
                                    <View className='catBook-contributor' key={item._id}>
                                        <Image src={item.avatar} className='catBook-contributor-avatar' mode="aspectFill" />
                                        <Text className='catBook-contributor-name'>{item.nick_name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View className='catBook-content'>
                <View className='catBook-trendingCats catBook-module'>
                    <Text className='catBook-trendingCats-title catBook-module-title'>今日猫猫</Text>
                    <View className='catBook-trendingCats-container'>
                        {
                            trendingCats.map((item) => {
                                return (
                                    <View className='catBook-trendingCats-item'>
                                        <Image src={item.img} mode='aspectFill'/>
                                        <Text>{item.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
                <View className='catBook-wiki '></View>
            </View>
        </View>
    )
}
