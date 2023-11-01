import { View, Text, Image, ITouchEvent } from '@tarojs/components';
import { useState, useEffect } from 'react';
import Taro, {useLoad} from '@tarojs/taro';
import { makeRequest } from '@/common/utilities/requester';
import PubSub from 'pubsub-js';

import Header from '@/common/Header/Header';

import useUser from '@/store/userInfo';
import useRequest from '@/store/request';

import CatType from './types';

import './catBook.less';

import productImg from '../../../static/catBook/product.png';
import createCatImg from '../../../static/catBook/create.png';
import feedCatImg from '../../../static/catBook/feed.png';
import maleImg from '../../../static/catBook/Male.png';
import femaleImg from '../../../static/catBook/Female.png';
import positionImg from '../../../static/catBook/position.png';
import defaultAvatar from '../../../static/mine/defaultAvatar.png';
import ppImg from '../../../static/catBook/pp.jpg';
import like from '@/static/common/like.png';
import like_activate from '@/static/common/like-activate.png';

interface contributorType {
    _id: string,
    avatar: string,
    nick_name: string,
}

export default function catBook() {

    const userInfo = useUser((state) => state);
    const requestUrl = useRequest((state) => state.requestUrl);

    const [cats, setCats] = useState<Partial<CatType & { isLiked: boolean }>[]>([
    ]);

    const [contributors, setContributors] = useState<contributorType[]>([

    ]);

    const [trendingCats, setTrendingCats] = useState<Partial<CatType>[]>([
    ]);

    useLoad(() => {
        Taro.showShareMenu({
            withShareTicket: true
        });
    });

    useEffect(() => {
        init();
        const token = PubSub.subscribe('refreshCatBook', () => init());

        return () => {
            PubSub.unsubscribe(token);
        };
    }, []);
    const init = async () => {
        const res = await makeRequest({
            method: 'GET',
            url: requestUrl,
            path: '/api/v1/cats?page=1',
            requestService: 'backend',
        });

        if (res.statusCode === 200) {
            setCats(res.data.cats);
            setTrendingCats(res.data.trendingCats);
            setContributors(res.data.contributors);
        };
    };

    const enterCreateCat = () => {
        if (!userInfo.isLogin) return Taro.navigateTo({ url: '/pages/login/login' });
        if (!['admin', 'manager-cat'].includes(userInfo.role)) return Taro.showToast({ title: '您不是图鉴管理员' });

        Taro.navigateTo({ url: '/pages/service/catBook/createCat/createCat' });
    };

    const enterCat = (catId: string, name: string) => {
        if (!userInfo.isLogin) return Taro.navigateTo({ url: '/pages/login/login' });

        Taro.navigateTo({ url: `/pages/service/catBook/catPage/catPage?id=${catId}&name=${name}` });
    };

    const likeCat = async (catId: string, index: number, event: ITouchEvent) => {
        event.stopPropagation();

        if (!userInfo.isLogin) return Taro.navigateTo({ url: '/pages/login/login' });

        const newCats = [...cats];
        let action: number; // 1 点赞 -1 取消点赞

        if (newCats[index].isLiked) {
            newCats[index].isLiked = false;
            newCats[index].like! -= 1;
            action = -1;
        } else {
            newCats[index].isLiked = true;
            newCats[index].like! += 1;
            action = 1;
        };

        setCats(newCats);

        await makeRequest({
            method: 'PATCH',
            url: requestUrl,
            path: `/api/v1/cats/${catId}/like`,
            requestService: 'backend',
            header: {
                authorization: Taro.getStorageSync('token')
            },
            data: {
                action: action,
            }
        });
    };

    return (
        <>
            <Header title="重师猫猫图鉴" />
            <View className='catBook-wrapper'>
                <View className='catBook-fns'>
                    <View className='catBook-feedCat catBook-fn' onClick={() => Taro.showToast({title: "即将上线", icon: 'none'})}>
                        <Image src={productImg} />
                        <Text>猫猫文创</Text>
                    </View>
                    <View className='catBook-createCat catBook-fn' onClick={enterCreateCat}>
                        <Image src={createCatImg} />
                    </View>
                    <View className='catBook-feedCat catBook-fn' onClick={() => Taro.showToast({title: "即将上线", icon: 'none'})}>
                        <Image src={feedCatImg} />
                        <Text>投喂罐头</Text>
                    </View>
                </View>
                <View className='catBook-preface'>
                    <View className='catBook-contribution'>
                        <Text className='catBook-contribution-title'>图鉴贡献者</Text>
                        <View className='catBook-contributors'>
                            {
                                contributors.map((item) => {
                                    return (
                                        <View className='catBook-contributor' key={item._id}>
                                            <Image src={item.avatar || defaultAvatar} className='catBook-contributor-avatar' mode="aspectFill" />
                                            {/* <Text className='catBook-contributor-name'>{item.nick_name}</Text> */}
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
                <View className='catBook-content'>
                    <View className='catBook-trendingCats catBook-module'>
                        <Text className='catBook-trendingCats-title catBook-module-title'>猫猫榜</Text>
                        <View className='catBook-trendingCats-container'>
                            {
                                trendingCats.length > 0 ?
                                trendingCats.map((item) => {
                                    return (
                                        <View className='catBook-trendingCats-item' key={item._id}>
                                            <Image src={item.pics![0]} mode='aspectFill' />
                                            <View className='catBook-trendingCats-item-info'>
                                                <Text className='catBook-trendingCats-name'>{item.name}</Text>
                                                <View className='catBook-trendingCats-item-like'>
                                                    <Image src={like_activate} />
                                                    <Text>{item.like}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                                :
                                <View className='catBook-noCats'>暂无猫猫</View>
                            }
                        </View>
                    </View>
                    <View className='catBook-wiki catBook-module'>
                        <Text className='catBook-wiki-title catBook-module-title'>猫猫百科</Text>
                        <View className='catBook-wiki-container'>
                            {
                                cats.length > 0 ?
                                cats.map((item, index) => {
                                    return (
                                        <View className='catBook-wiki-item' key={item._id} onClick={() => enterCat(item._id!, item.name!)}>
                                            <Image src={item.pics![0]} mode='aspectFill' />
                                            <View className='catBook-wiki-item-info'>
                                                <View className='catBook-wiki-item-left'>
                                                    <View className='catBook-wiki-item-name_sex'>
                                                        <Text>{item.name}</Text>
                                                        <Image src={item.sex === 'm' ? maleImg : femaleImg} />
                                                    </View>
                                                    <View className='catBook-wiki-item-position'>
                                                        <Image src={positionImg} />
                                                        <Text>{item.position}</Text>
                                                    </View>
                                                </View>
                                                <View className='catBook-wiki-item-like' onClick={(event) => likeCat(item._id!, index, event)}>
                                                    <Image src={item.isLiked ? like_activate : like} />
                                                    <Text>{item.like}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                                :
                                <View className='catBook-noCats'>暂无猫猫</View>
                            }
                        </View>
                    </View>
                </View>
            </View>
        </>

    )
}
