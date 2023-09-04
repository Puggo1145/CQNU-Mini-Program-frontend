import { View, Text, Button, Textarea } from "@tarojs/components"
import { useRef } from "react";
import Taro from "@tarojs/taro"

import useRequest from "@/store/request";

import Header from "@/common/Header/Header"

import './contactUs.css'

export default function login() {

    const requestUrl = useRequest((state) => state.requestUrl);
    const token = Taro.getStorageSync('token');

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
        
        const contactUsRes = await Taro.request({
            method: 'POST',
            url: `${requestUrl}/v1/users/feedback`,
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

    return (
        <View className="contactUs-wrapper">
            <Header title={"联系我们"} />
            <View className="contactUs-content">
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
                <Button onClick={handleSubmit}>发送</Button>
            </View>
        </View>
    )
}
