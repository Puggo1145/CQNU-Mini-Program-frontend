import Taro from "@tarojs/taro";

const token = Taro.getStorageSync('token');

const getOssParams = async (requestUrl: string) => {
    // 获取 OSS 的 parameters
    const ossParamsRes = await Taro.request({
      method: 'GET',
      url: `${requestUrl}/v1/users/getOssParams`,
      header: {
        Authorization: token
      }
    });

    // 将 OSS params 存入缓存
    Object.keys(ossParamsRes.data.data.params).forEach(key => {
      Taro.setStorageSync(key, ossParamsRes.data.data.params[key]);
    });
};

export default getOssParams;