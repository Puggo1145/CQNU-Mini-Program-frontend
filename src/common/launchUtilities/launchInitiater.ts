import Taro from "@tarojs/taro";

class LaunchInitiater {
    requestUrl: string;
    userInfo: any;
    postData: any;

    constructor(requestUrl: string, userInfo: any, postData: any) {
        this.requestUrl = requestUrl;
        this.userInfo = userInfo;
        this.postData = postData;
    }

    // static properties
    token = Taro.getStorageSync('token');

    async initialLoginValidation() {

        const loginValidateRes = await Taro.request({
            method: 'POST',
            url: this.requestUrl + '/v1/users/checkLoginStatus',
            header: {
                Authorization: this.token,
            },
            data: {
                action: 'initialLoginValidation'
            }
        });

        console.log(loginValidateRes);


        // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
        if (loginValidateRes.statusCode.toString().startsWith('2')) {
            // 创建 userInfo 的浅拷贝，防止方法被覆写
            const userInfoArray = Object.keys(this.userInfo).filter(key => typeof this.userInfo[key] !== 'function') // 防止方法被覆写

            userInfoArray.forEach((key) => {
                this.userInfo.setUserInfo({ [key]: Taro.getStorageSync(key) });
            });
        }
    };

    async getOssParams() {
        // 获取 OSS 的 parameters
        const ossParamsRes = await Taro.request({
            method: 'GET',
            url: `${this.requestUrl}/v1/users/getOssParams`,
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

    async getAllTags() {
        try {
            const tags = await Taro.request({
                method: 'GET',
                url: this.requestUrl + '/v1/posts/tags',
                timeout: 5000
            });

            const tagsArray = tags.data.data.tags.map(item => item.name);

            // 将所有的tags存入 store
            this.postData.setPostData({ tags: tagsArray })
        } catch (err) {
            Taro.showToast({
                title: '数据加载失败',
                icon: 'error'
            });
        };
    };
};

export default LaunchInitiater;