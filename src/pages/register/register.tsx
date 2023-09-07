import { View, Text, Input, Picker, Form, Button } from "@tarojs/components";
import { useState, useRef } from "react";
import Taro from "@tarojs/taro";
import PubSub from 'pubsub-js';

// stores
import useRequest from "@/store/request";
import useUser from "@/store/userInfo";

// components
import Header from "@/common/Header/Header";

import "./register.css";

export default function register() {

    // stores
    const requestUrl = useRequest(state => state.requestUrl);
    const { setUserInfo } = useUser();

    // openid
    const openid = Taro.getCurrentInstance().router?.params.openid;

    // refs
    const nickNameRef = useRef<HTMLInputElement>(null);
    const studentIdRef = useRef<HTMLInputElement>(null);

    const [identity, setIdentity] = useState('undergraduate'); // 默认为本科生

    // 学院与专业
    const [faculties, setFaculties] = useState([
        {
            name: "新闻与传媒学院",
            majors: ["新闻传播学类", "网络与新媒体", "广播电视编导"]
        },
        {
            name: "计算机信息与科学学院",
            majors: ["计算机科学与技术", "软件工程", "网络工程", "信息安全"]
        }
    ]);

    // 学院索引与专业索引
    const [facultyIndex, setFacultyIndex] = useState(0);
    const [majorIndex, setMajorIndex] = useState(0);
    const [gradeIndex, setGradeIndex] = useState(0);

    const [grades, setGrade] = useState(['大一', '大二', '大三', '大四', '研一', '研二', '研三']);

    const handleFacultyChange = e => {
        // 学院索引改变时，专业索引重置为 0
        setFacultyIndex(e.detail.value);
        setMajorIndex(0);
    };

    const handleSubmit = () => {
        // ts 收窄
        if (!nickNameRef.current || !studentIdRef.current) return;

        const nickName = nickNameRef.current.value;
        const studentId = studentIdRef.current.value;
        const faculty = faculties[facultyIndex].name;
        const major = faculties[facultyIndex].majors[majorIndex];
        const grade = grades[gradeIndex];

        // 检查字段完整性
        if (nickName === '' || studentId === '') {
            Taro.showToast({
                title: `请输入${nickName === '' ? '昵称' : '学号'}`,
                icon: 'error'
            })
            return
        } else if (studentId.length !== 13) {
            Taro.showToast({
                title: '请输入正确学号',
                icon: 'error'
            })
            return
        };

        // 发送注册请求
        Taro.showLoading({
            title: '注册中',
            mask: true
        });
        Taro.request({
            method: 'POST',
            url: `${requestUrl}/v1/users/register`,
            data: {
                openid: openid,
                nick_name: nickName,
                student_id: studentId,
                faculty: faculty,
                major: major,
                grade: grade
            }
        }).then(res => {
            // 处理注册 response            
            if (res.data.status === 'success') {
                Taro.showToast({
                    title: '注册成功',
                    icon: 'success'
                });
                console.log(res.data.data);
                
                // 存储 json web token
                Taro.setStorageSync('token', res.data.token);

                // 存储用户信息
                const newUserInfo = res.data.data;
                const userInfo = {
                    id: newUserInfo.id,
                    openid: newUserInfo.openid,
                    avatar: newUserInfo.avatar,
                    nick_name: newUserInfo.nick_name,
                    student_id: newUserInfo.student_id,
                    faculty: newUserInfo.faculty,
                    major: newUserInfo.major,
                    grade: newUserInfo.grade,
                    user_exp: newUserInfo.user_exp,
                    user_level: newUserInfo.user_level,
                };

                // 持久化 userInfo
                Object.keys(userInfo).forEach(key => {
                    Taro.setStorageSync(key, userInfo[key]);
                });
                // 更新 userInfo
                setUserInfo(userInfo);
                // 加载 OSS 通行证
                PubSub.publish('getOssParams');

                // 跳转首页
                setTimeout(() => {
                    Taro.switchTab({
                        url: '/pages/index/index'
                    })
                }, 2000);

            } else {
                Taro.showToast({
                    title: '注册失败',
                    icon: 'error'
                });
            }
        });
    };

    return (
        <View className="register-wrapper">
            <Header title="注册" />
            <View className="register-content">
                <Text className="register-content-title">绑定个人信息</Text>
                <Text>需要绑定校园信息后才能使用官方服务</Text>
                <View className="register-content-formata">
                    <Form>
                        <View className="register-content-formata-item">
                            <Text className="register-content-formata-item-text">昵称：</Text>
                            <Input className="register-content-formata-item-input" ref={nickNameRef} name="nick_name" placeholder="请输入昵称" />
                        </View>
                        <View className="register-content-formata-item">
                            <Text className="register-content-formata-item-text">学号：</Text>
                            <Input className="register-content-formata-item-input" ref={studentIdRef} name="student_id" placeholder="请输入学号" />
                        </View>
                        <View className="register-content-formata-item">
                            <Text className="register-content-formata-item-text">学院：</Text>
                            <Picker className="register-content-formata-item-picker" name="faculty" mode="selector" range={faculties.map(item => item.name)} onChange={handleFacultyChange} >
                                <Text>{faculties[facultyIndex].name}</Text>
                            </Picker>
                        </View>
                        <View className="register-content-formata-item">
                            <Text className="register-content-formata-item-text">专业：</Text>
                            <Picker className="register-content-formata-item-picker" name="major" mode="selector" range={faculties[facultyIndex].majors} onChange={e => setMajorIndex(Number(e.detail.value))} >
                                <Text>{faculties[facultyIndex].majors[majorIndex]}</Text>
                            </Picker>
                        </View>
                        <View className="register-content-formata-item">
                            <Text className="register-content-formata-item-text">年级：</Text>
                            <Picker className="register-content-formata-item-picker" name="major" mode="selector" range={grades} onChange={e => setGradeIndex(Number(e.detail.value))} >
                                <Text>{grades[gradeIndex]}</Text>
                            </Picker>
                        </View>
                        <Button className="register-submit" onClick={handleSubmit}>完成</Button>
                    </Form>
                </View>
            </View>
        </View>
    )
}
