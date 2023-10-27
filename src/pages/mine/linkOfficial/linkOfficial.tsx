import { useState, useRef } from "react"
import { View, Text, Input, Image, Button } from "@tarojs/components"
import { useLoad } from "@tarojs/taro"
import Taro, { getCurrentInstance } from "@tarojs/taro"

import { makeRequest } from "@/common/utilities/requester"

import Header from "@/common/Header/Header"

import useUser from "@/store/userInfo"
import useRequest from "@/store/request"

import "./linkOfficial.css"

export default function linkOfficial() {

  // 请求行为：获取课表、查询成绩
  const student_id = useUser(state => state.student_id);
  const setUserInfo = useUser(state => state.setUserInfo);

  const authUrl = useRequest(state => state.authUrl);

  const [cookie, setCookie] = useState<string>('');
  const [dataObj, setDataObj] = useState<object>({});
  const [authCodeImg, setAuthCodeImg] = useState<string>('');

  const [errMsg, setErrMsg] = useState<string>('');

  const passwordRef = useRef<HTMLInputElement>(null);
  const authCodeRef = useRef<HTMLInputElement>(null);

  useLoad(async () => {
    handleRefreshAuthCode();
  });

  // 请求 authCode、会话 cookies、dataObj
  const handleRefreshAuthCode = async () => {
    try {
      Taro.showLoading({
        title: '正在加载数据',
      });
      const authInfo = await makeRequest({
        method: 'GET',
        url: authUrl,
        path: '/',
        requestService: "lkofficial",
        timeout: 5000, // 5 秒超时
      });

      Taro.hideLoading();

      if (authInfo.statusCode === 200) {
        setCookie(authInfo.data.data.cookie);
        setDataObj(authInfo.data.data.dataObj);
        setAuthCodeImg("data:image/jpeg;base64," + authInfo.data.data.authCodeImg);
      } else {
        Taro.showToast({
          title: '网络错误',
          icon: 'error',
          duration: 2000
        });
      }
    } catch (err) {
      Taro.hideLoading();
      Taro.showToast({
        title: '网络错误',
        icon: 'error',
        duration: 2000
      });
    }
  };

  const handleSubmit = async () => {
    try {
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

      Taro.showLoading({
        title: '连接中，请稍后',
      })
      const res = await makeRequest({
        method: 'POST',
        url: authUrl,
        path: '/',
        requestService: 'lkofficial',
        data: {
          username,
          password,
          cookie,
          dataObj,
          authCode,
        },
        timeout: 5000, // 5 秒超时
      });
      Taro.hideLoading();

      if (res.statusCode === 200) {
        // 将密码和教务系统cookie存储进本次小程序使用期间的 store 内
        setUserInfo({ officialPwd: password, headerCookie: res.data.data });
        
        Taro.showToast({
          title: '连接成功',
          icon: 'success',
          duration: 1000
        });

        setTimeout(() => {
          Taro.navigateBack();
        }, 1000);

        // 绑定失败, 验证码或密码错误，重新获取验证码
      } else {
        setErrMsg(res.data.message);

        handleRefreshAuthCode();
      }
    } catch (err) {
      Taro.showToast({
        title: '网络错误',
        icon: 'error',
        duration: 2000
      });
    }
  };

  return (
    <View className="linkOfficial-wrapper">
      <Header title={"连接校园门户"}></Header>
      <View className="linkOfficial-content">
        <Text className="linkOfficial-description">为保护用户隐私，小程序不会主动存储您的密码，密码仅在本次小程序使用期间有效</Text>
        <Text className="linkOfficial-description">受网络情况与访问量的影响，连接时间可能较长</Text>
        <View className="linkOfficial-inputs">
          <View className="linkOfficial-inputs-item">
            <Text>学号（暂时无法修改）</Text>
            <View className="linkOfficial-input" style={{ fontWeight: 'bold', color: '#ccc' }}>{student_id}</View>
          </View>
          <View className="linkOfficial-inputs-item">
            <Text>密码</Text>
            <Input ref={passwordRef} className="linkOfficial-input" placeholder="官网校园门户密码"></Input>
          </View>
          <View className="linkOfficial-inputs-item">
            <Text>验证码(点击图片刷新)</Text>
            <View className="linkOfficial-auths">
              <Input ref={authCodeRef} className="linkOfficial-input" placeholder={authCodeImg ? "请输入验证码" : "请等待验证码抓取..."}></Input>
              <Image src={authCodeImg} className="linkOfficial-authCode" onClick={handleRefreshAuthCode}></Image>
            </View>
          </View>
        </View>
        <Text className="linkOfficial-errMsg">{errMsg}</Text>
        <Button className="auth-submit" onClick={handleSubmit}>绑定</Button>
      </View>
    </View>
  )
}
