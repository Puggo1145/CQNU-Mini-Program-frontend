import { View, ScrollView, Image } from "@tarojs/components"
import { useEffect, useState } from "react"
import Taro from "@tarojs/taro"
import { makeRequest } from "@/common/utilities/requester"

import Header from "@/common/Header/Header"

import useRequest from "@/store/request"

import CatType from "../types"

import './catPage.css'

export default function catPage() {

  const requestUrl = useRequest((state) => state.requestUrl);
  const [catInfo, setCatInfo] = useState<CatType>();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await makeRequest({
      method: 'GET',
      url: requestUrl,
      path: '/api/v1/cats/' + Taro.getCurrentInstance().router?.params.id,
      requestService: 'backend',
      header: {
        'Authorization': Taro.getStorageSync('token')
      }
    });

    if (res.statusCode === 200) {
      setCatInfo(res.data.cat);
    }
  };

  return (
    <View className="catPage">
      <Header title={Taro.getCurrentInstance().router?.params.name!} />
      <View className="catPage-content">
        <ScrollView
          scrollX
          scrollWithAnimation
          className="catPage-pics"
        >
          {
            catInfo?.pics.map((item, index) => {
              return (
                <View
                  className="catPage-pics-item"
                  key={index}
                >
                  <Image
                    src={item}
                    mode="aspectFill"
                    className="catPage-pics-item-img"
                  />
                </View>
              )
            })
          }
          <View className="catPage-pics-addCat">+</View>
        </ScrollView>
        <View className="catPage-info">

        </View>
      </View>
    </View>
  )
}
