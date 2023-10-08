import Taro from "@tarojs/taro";
import io from 'socket.io-client';
import { makeRequest } from "../utilities/requester";

// handlers
import socketHandler from "../handlers/socketHandler";

import { UserInfoType } from "@/store/userInfo";
import { PostDataType } from "@/store/postData";


class LaunchInitiater {
    requestUrl: string;

    constructor(requestUrl: string) {
        this.requestUrl = requestUrl;
    }

    // static properties
    token = Taro.getStorageSync('token');

    async initialLoginValidation(userInfo: UserInfoType) {

        const loginValidateRes = await makeRequest({
            method: 'POST',
            url: this.requestUrl,
            path: '/api/v1/users/checkLoginStatus',
            requestService: 'backend',
            header: {
                Authorization: this.token,
            },
            data: {
                action: 'initialLoginValidation'
            }
        });

        // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
        if (loginValidateRes.statusCode.toString().startsWith('2')) {
            // 创建 userInfo 的浅拷贝，防止方法被覆写
            const userInfoArray = Object.keys(userInfo).filter(key => typeof userInfo[key] !== 'function') // 防止方法被覆写

            // 从缓存中读取用户信息
            userInfoArray.forEach((key) => {
                userInfo.setUserInfo({ [key]: Taro.getStorageSync(key) });
            });

            return true;
        } else {
            return false;
        }
    };

    async getOssParams() {
        // 获取 OSS 的 parameters
        const ossParamsRes = await makeRequest({
            method: 'GET',
            url: this.requestUrl,
            path: '/api/v1/users/getOssParams',
            requestService: 'backend',
            header: {
                Authorization: this.token
            }
        });

        // 将 OSS params 存入缓存 (OSSAccessKeyId, policy, signature)
        if (ossParamsRes.statusCode === 200) {
            Object.keys(ossParamsRes.data.data.params).forEach(key => {
                Taro.setStorageSync(key, ossParamsRes.data.data.params[key]);
            });
        }
    };

    async getAllTags(postData: PostDataType) {
        try {
            const tags = await makeRequest({
                method: 'GET',
                url: this.requestUrl,
                path: '/api/v1/posts/tags',
                requestService: 'backend',
                timeout: 5000
            });

            const tagsArray = tags.data.data.tags.map(item => item.name);

            // 将所有的tags存入 store
            postData.setPostData({ tags: tagsArray })
        } catch (err) {
            Taro.showToast({
                title: '数据加载失败',
                icon: 'error'
            });
        };
    };

    webSocketInit() {
        // const socketUrl = 'ws' + this.requestUrl.slice(4);
        
        // const socket = io(socketUrl);

        // // 建立 socket 私有连接
        // socket.emit('join', Taro.getStorageSync('id'));
        // // 处理 socket 事件
        // socketHandler(socket);
    };

    async getUnreadMessages() {
        const messagesRes = await makeRequest({
            method: 'GET',
            url: this.requestUrl,
            path: '/api/v1/messages/',
            requestService: 'backend',
            header: {
                Authorization: this.token
            }
        })

        if (messagesRes.statusCode === 200) return messagesRes.data.data;
    }
};

export default LaunchInitiater;