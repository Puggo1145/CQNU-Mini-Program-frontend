import { View, Image, Text } from "@tarojs/components"
import { useEffect, useState } from "react"
import Taro from "@tarojs/taro"
import { makeRequest } from "@/common/utilities/requester"

import Header from "@/common/Header/Header"

import useRequest from "@/store/request"

import CatType from "../types"

import './catPage.css'

import maleImg from '@/static/catBook/Male.png';
import femaleImg from '@/static/catBook/Female.png'
import like2 from '@/static/catBook/like2.png'

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

  const addImg = () => {
    Taro.showToast({
      title: "功能暂未上线",
      icon: 'error'
    })
  };

  return (
    <View className="catPage">
      <Header title={Taro.getCurrentInstance().router?.params.name!} />
      <View className="catPage-content">
        <View className="catPage-pics" >
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
        </View>
        <View className="catPage-info">
          <View className="catPage-info-row1">
            <View className="catPage-info-name">
              <Text>{catInfo?.name}</Text>
              <Image src={catInfo?.sex === 'm' ? maleImg : femaleImg} />
            </View>
            <View className="catPage-info-item">
              <Text>小名：</Text>
              <Text>{catInfo?.nick_name ? catInfo?.nick_name : "暂无"}</Text>
            </View>
          </View>

          <View className="catPage-info-row2">
            <View className="catPage-info-item">
              <Text>常驻地点</Text>
              <Text>{catInfo?.position}</Text>
            </View>
            <View className="catPage-info-item">
              <Text>健康状况</Text>
              <Text>{catInfo?.health_condition}</Text>
            </View>
          </View>
          <View className="catPage-info-row3">
            <View className="catPage-info-item">
              <Text>外貌</Text>
              <Text>{catInfo?.appearance}</Text>
            </View>
            <View className="catPage-info-item">
              <Text>性格</Text>
              <Text>{catInfo?.character}</Text>
            </View>
            <View className="catPage-info-item">
              <Text>撸猫指南</Text>
              <Text>{catInfo?.guideline}</Text>
            </View>
          </View>
        </View>
        <View className="catPage-catImgs">
          <View className="catPage-catImgs-header">
            <Text className="catPage-catImgs-title">猫猫相册</Text>
            <View className="catPage-addPic" onClick={addImg}>+</View>
          </View>
          <View className="catPage-catImgs-content">
            {
              catInfo?.pics.map((item, index) => {
                return (
                    <Image
                      src={item}
                      mode="aspectFill"
                      className="catPage-catImgs-item"
                      key={index}
                    />
                )
              })
            }
          </View>
        </View>
      </View>
    </View>
  )
}
