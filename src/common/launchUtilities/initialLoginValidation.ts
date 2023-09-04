import Taro from "@tarojs/taro";

const initialLoginValidation = async (requestUrl: string, userInfo) => {
    const token = Taro.getStorageSync('token');

    const loginValidateRes = await Taro.request({
      method: 'POST',
      url: requestUrl + '/v1/users/checkLoginStatus',
      header: {
        Authorization: token,
      },
      data: {
        action: 'initialLoginValidation'
      }
    });

    console.log(loginValidateRes);
    

    // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
    if (loginValidateRes.statusCode.toString().startsWith('2')) {
      // 创建 userInfo 的浅拷贝，防止方法被覆写
      const userInfoArray = Object.keys(userInfo).filter(key => typeof userInfo[key] !== 'function' ) // 防止方法被覆写
      
      userInfoArray.forEach((key) => {
        userInfo.setUserInfo({ [key]: Taro.getStorageSync(key) });
      });
    }
};

export default initialLoginValidation;