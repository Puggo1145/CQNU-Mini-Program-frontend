import { useState, useRef } from "react"
import { View, Text, Input, Image, Button } from "@tarojs/components"
import { useLoad } from "@tarojs/taro"
import Taro from "@tarojs/taro"

import { makeRequest } from "@/common/utilities/requester"

import Header from "@/common/Header/Header"

import useUser from "@/store/userInfo"
import useRequest from "@/store/request"

import "./linkOfficial.css"

export default function linkOfficial() {

  const student_id = useUser(state => state.student_id);
  const authUrl = useRequest(state => state.authUrl);

  const [cookie, setCookie]= useState<string>('');
  const [dataObj, setDataObj ]= useState<object>({});
  const [authCodeImg, setAuthCodeImg] = useState<string>('');

  const passwordRef = useRef<HTMLInputElement>(null);
  const authCodeRef = useRef<HTMLInputElement>(null);

  useLoad( async () => {
    // 1. 请求 authCode、会话 cookies、dataObj
    const authInfo = await makeRequest({
      method: 'GET',
      url: authUrl,
      path: '/',
      timeout: 10000, // 10 秒超时
    });

    if (authInfo.statusCode === 200) {
      console.log(authInfo.data);
      setCookie(authInfo.data.data.cookie);
      setDataObj(authInfo.data.data.dataObj);
      setAuthCodeImg("data:image/jpeg;base64," + authInfo.data.data.authCodeImg);
    }

  });

  const handleSubmit = async () => {
    if (!passwordRef.current?.value || !authCodeRef.current?.value) {
      Taro.showToast({
        title: '请填写完整信息',
        icon: 'error',
        duration: 2000
      });

      return;
    }

    const username = student_id;
    const password = passwordRef.current.value;
    const authCode = authCodeRef.current.value;

    const res = await makeRequest({
      method: 'POST',
      url: authUrl,
      path: '/',
      data: {
        username,
        password,
        cookie,
        dataObj,
        authCode
      },
    });

    if (res.statusCode === 200) {
      console.log(res.data);
      Taro.showToast({
        title: '绑定成功',
        icon: 'success',
        duration: 2000
      });
    } else {
      Taro.showToast({
        title: res.data.message,
        icon: 'error',
        duration: 2000
      });
    }
  };

  return (
    <View className="linkOfficial-wrapper">
      <Header title={"绑定校园门户"}></Header>
      <View className="linkOfficial-content">
        <Text className="linkOfficial-description">学习与服务的部分功能需要绑定校园门户才能使用哦</Text>
        <View className="linkOfficial-inputs">
          <View className="linkOfficial-inputs-item">
            <Text>学号</Text>
            <View className="linkOfficial-input" style={{ fontWeight: 'bold', color: '#ccc' }}>{student_id}</View>
          </View>
          <View className="linkOfficial-inputs-item">
            <Text>密码</Text>
            <Input ref={passwordRef} className="linkOfficial-input" placeholder="官网校园门户密码"></Input>
          </View>
          <View className="linkOfficial-inputs-item">
            <Text>验证码</Text>
            <View className="linkOfficial-auths">
              <Input ref={authCodeRef} className="linkOfficial-input" placeholder="请等待验证码抓取..."></Input>
              <Image src={authCodeImg} className="linkOfficial-authCode"></Image>
            </View>
          </View>
        </View>
        <Button className="auth-submit" onClick={handleSubmit}>绑定</Button>
      </View>
    </View>
  )
}
