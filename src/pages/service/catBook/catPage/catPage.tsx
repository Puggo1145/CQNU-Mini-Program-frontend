import { View, Image, Text, Button } from "@tarojs/components"
import { useEffect, useState } from "react"
import Taro from "@tarojs/taro"
import { makeRequest } from "@/common/utilities/requester"
import { uploadImageToOss } from "@/common/utilities/uploadImageToOss"

import Header from "@/common/Header/Header"

import useRequest from "@/store/request"
import useAppInfo from "@/store/appInfo"
import useUser from "@/store/userInfo"

import CatType from "../types"

import './catPage.css'

import maleImg from '@/static/catBook/Male.png';
import femaleImg from '@/static/catBook/Female.png'

export default function catPage() {

  const [requestUrl, catImgToOssUrl] = useRequest((state) => [state.requestUrl, state.catImgToOssUrl]);
  const accessKey_id = useAppInfo((state) => state.accessKey_id);
  const role = useUser((state) => state.role);

  const [catInfo, setCatInfo] = useState<CatType>();

  useEffect(() => {
    Taro.showShareMenu({
      withShareTicket: true,
    });

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

  const addImg = async (cat_id: string) => {
    const selectedImage = await Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    });


    Taro.showLoading({
      title: "上传中",
    });
    const imgRes = await uploadImageToOss(accessKey_id, `${cat_id}-${Date.now()}`, catImgToOssUrl, selectedImage.tempFilePaths);

    const res = await makeRequest({
      method: 'PATCH',
      url: requestUrl,
      path: `/api/v1/cats/${cat_id}/img`,
      requestService: 'backend',
      header: {
        authorization: Taro.getStorageSync('token')
      },
      data: {
        img: catImgToOssUrl + imgRes.filenames[0]
      }
    })

    if (res.statusCode === 200) {
      Taro.showToast({
        title: "上传成功"
      });
      init();
    }
  };

  const previewImg = (url: string) => {
    Taro.previewImage({
      current: url,
      urls: [url]
    });
  };

  return (
    <View className="catPage">
      <Header title={Taro.getCurrentInstance().router?.params.name!} />
      <View className="catPage-content">
        <View className="catPage-fns">
          <Button className="catPage-share catPage-fn" openType="share" plain></Button>
          {['manager-cat', 'admin'].includes(role) && <Button className="catPage-edit catPage-fn" plain></Button>}
        </View>
        <View className="catPage-pics" >
          {
            <View className="catPage-pics-item">
              <Image
                src={catInfo?.pics[0]!}
                mode="aspectFill"
                className="catPage-pics-item-img"
              />
            </View>
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
            <View className="catPage-addPic" onClick={() => addImg(catInfo?._id!)}>+</View>
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
                    onClick={() => previewImg(item)}
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
