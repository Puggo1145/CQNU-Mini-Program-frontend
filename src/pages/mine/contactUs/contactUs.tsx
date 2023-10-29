import { View, Text, Button, Textarea, Image } from "@tarojs/components"
import { useState, useRef } from "react";
import Taro from "@tarojs/taro"

import { makeRequest } from "@/common/utilities/requester";

import useRequest from "@/store/request";

import Header from "@/common/Header/Header"

import './contactUs.css'

import techsImg from '../../../static/mine/techs.png';

interface ContributorType {
    role: string
    name: string
}

export default function login() {

    const requestUrl = useRequest((state) => state.requestUrl);
    const token = Taro.getStorageSync('token');

    const [contributors] = useState<ContributorType[]>([
        { role: "开发/产品/UI", name: "赵一蔚" },
        { role: "开发", name: "高梓竣" },
        { role: "运营", name: "胡凯" },
        { role: "运营", name: "王学庆" },
        { role: "Logo设计", name: "李文婷" },
        { role: "赞助", name: "马承旭" }
    ]);

    const contentRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = async () => {
        const content = contentRef.current?.value;
        if (!content) {
            Taro.showToast({
                title: '请输入内容',
                icon: 'error'
            })
            return;
        } else if (content.length >= 600 || content.length <= 5) {
            Taro.showToast({
                title: content.length > 600 ? '内容过长' : '内容过短',
                icon: 'error'
            })
            return;
        };

        Taro.showLoading({
            title: '发送中',
            mask: true
        });
        const contactUsRes = await makeRequest({
            method: 'POST',
            url: requestUrl,
            path: '/api/v1/users/feedback',
            requestService: 'backend',
            header: {
                authorization: token
            },
            data: {
                content
            }
        });

        if (contactUsRes.statusCode === 200) {
            Taro.showToast({
                title: '发送成功',
                icon: 'success'
            })
            setTimeout(() => {
                Taro.navigateBack();
            }, 1500);
        } else {
            Taro.showToast({
                title: '发送失败',
                icon: 'none'
            })
        }
    };

    const setClipboardData = () => {
        Taro.setClipboardData({
            data: "https://github.com/Puggo1145/CQNU-Mini-Program-frontend/tree/main",
            success: () => {
                Taro.showToast({
                    title: '已复制到剪贴板',
                    icon: 'success'
                })
            }
        })
    };

    return (
        <View className="contactUs-wrapper">
            <Header title={"联系我们"} />
            <View className="contactUs-content">
                <View className="contactUs-textarea">
                    <Text className="contactUs-description">
                        有任何问题或建议，欢迎联系我们
                    </Text>
                    <Textarea
                        className="contactUs-textarea"
                        name="content"
                        ref={contentRef}
                        placeholder="请输入(5~600字)"
                    >
                    </Textarea>
                </View>
                <View className="contactUs-contributors">
                    <Text className="contactUs-contributors-title">小程序贡献者</Text>
                    <View className="contactUs-contributors-items">
                        {
                            contributors.map((contributor, index) => (
                                <View className="contactUs-contributors-item" key={index}>
                                    <Text className="contactUs-contributors-item-role">{contributor.role}</Text>
                                    <Text className="contactUs-contributors-item-name">{contributor.name}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View className="contactUs-github">
                    <Text>项目开源地址</Text>
                    <Text>项目前端已在 Github 开源，欢迎加入我们成为 contributor，参与小程序的维护与新功能开发。你的每一个创意都有可能成为现实</Text>
                    <Text>小程序开发不易，在 GitHub 点个星吧！</Text>
                    <Button className="contactUs-github-link" onClick={setClipboardData}>复制仓库链接</Button>
                </View>
                <View className="contactUs-tech">
                    <Image src={techsImg} mode="widthFix"/>
                </View>
            </View>
            <Button className="contactUs-submit" onClick={handleSubmit}>发送</Button>
        </View>
    )
}
