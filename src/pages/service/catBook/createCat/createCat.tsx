import { View, Button, Input, Image, Text, Picker, Form, FormProps, BaseEventOrig } from "@tarojs/components"
import { useState } from "react";
import Taro from "@tarojs/taro";
import PubSub from 'pubsub-js';

import { makeRequest } from "@/common/utilities/requester";
import { uploadImageToOss } from "@/common/utilities/uploadImageToOss";

import useAppInfo from "@/store/appInfo";
import useRequest from "@/store/request";
import useUser from "@/store/userInfo";

import Header from "@/common/Header/Header"

import CatType from "../types";

import "./createCat.less"

export default function createCat() {

    const accessKeyId = useAppInfo((state) => state.accessKey_id);
    const [requestUrl, catImgToOssUrl] = useRequest((state) => [state.requestUrl, state.catImgToOssUrl]);

    const [catSex] = useState(["男猫猫", "女猫猫"]);
    const [currentCatSex, setCurrentCatSex] = useState(0);

    const [catImg, setCatImg] = useState<string>("");

    const handelImgChoose = async () => {
        const res = await Taro.chooseImage({
            count: 1,
            sizeType: ["original", "compressed"],
            sourceType: ["album", "camera"],
        });

        if (res.tempFilePaths.length === 0) return;

        setCatImg(res.tempFilePaths[0]);
    }

    const handleSubmit = async (event: BaseEventOrig<FormProps.onSubmitEventDetail>) => {
        event.preventDefault();
        const catInfo = event.detail.value as CatType;
        const nullFieldsNum = Object.entries(catInfo!).filter(([key, value]) => value === "" && key !== 'nick_name').length;

        if (nullFieldsNum > 0) {
            return Taro.showToast({
                title: "请填写完整信息",
                icon: "error",
                duration: 2000,
            });
        } else if (catImg === "") {
            return Taro.showToast({
                title: "请上传图片",
                icon: "error",
                duration: 2000,
            });
        } else if (catInfo.position.length > 8) {
            return Taro.showToast({
                title: "常驻地点最多8个字",
                duration: 2000,
            });
        } else if (catInfo.health_condition.length > 8) {
            return Taro.showToast({
                title: "健康状况最多8个字",
                duration: 2000,
            });
        };

        Taro.showLoading({
            title: "创建中...",
            mask: true,
        });

        // 上传图片到oss
        const imgRes = await uploadImageToOss(accessKeyId, `${catInfo.name}-${Date.now()}`, catImgToOssUrl, [catImg]);
        Object.assign(catInfo, { pics: "https://cqnumini-cats-img.oss-cn-chengdu.aliyuncs.com/" + imgRes.filenames });
        Object.assign(catInfo, { sex: catSex[currentCatSex] === '男猫猫' ? 'm' : 'f' });

        // 创建猫猫
        const res = await makeRequest({
            method: "POST",
            url: requestUrl,
            path: "/api/v1/cats/",
            requestService: "backend",
            data: catInfo,
            header: {
                authorization: Taro.getStorageSync('token')
            },
            timeout: 5000,
        });

        if (res.statusCode === 201) {
            Taro.showToast({
                title: "创建成功",
                icon: "success",
                duration: 1500,
            });
            setTimeout(() => {
                PubSub.publish('refreshCatBook');
                Taro.navigateBack();
            }, 1500);
        } else {
            Taro.showToast({
                title: "创建失败，请重试",
                icon: "error",
                duration: 2000,
            });
        }
    };

    return (
        <View className="createCat">
            <Header title="新建档案" />
            <View className="createCat-content">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <View className="createCat-form" >
                        <View className="createCat-uploadPic" onClick={handelImgChoose}>
                            <Image src={catImg} className="createCat-uploadPic-img" mode="aspectFill" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>猫猫名字</Text>
                            <Input className="createCat-input" name="name" placeholder="必须有个名字" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>猫猫小名</Text>
                            <Input className="createCat-input" name="nick_name" placeholder="选填" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>猫猫性别</Text>
                            <Picker className="createCat-input" range={catSex} onChange={(event) => setCurrentCatSex(Number(event.detail.value))}>
                                {catSex[currentCatSex]}
                            </Picker>
                        </View>
                        <View className="createCat-form-item">
                            <Text>常驻地点</Text>
                            <Input className="createCat-input" name="position" placeholder="最长8个字" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>性格特征</Text>
                            <Input className="createCat-input" name="character" placeholder="用几个词描述一下" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>外貌特征</Text>
                            <Input className="createCat-input" name="appearance" placeholder="用几个词描述一下" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>健康状况</Text>
                            <Input className="createCat-input" name="health_condition" placeholder="最长8个字" />
                        </View>
                        <View className="createCat-form-item">
                            <Text>撸猫指南</Text>
                            <Input className="createCat-input" name="guideline" placeholder="防抓指南" />
                        </View>
                        <Button className="createCat-submit" formType="submit">创建</Button>
                    </View>
                </Form>
            </View>
        </View>
    )
}
