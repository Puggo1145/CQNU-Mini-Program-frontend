import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useUser from '../../store/userInfo';
import useRequest from '@/store/request';

import './mine.css'

import chatImg from '../../static/mine/chat.png'
import profileImg from '../../static/mine/profile.png'
import logoutImg from '../../static/mine/logout.png'
import loginImg from '../../static/mine/login.png'

export default function Mine() {

  const [userInfo, setUserInfo] = useUser((state) => [state, state.setUserInfo]);
  const requestUrl = useRequest((state) => state.requestUrl);

  useLoad(() => {
    if (!userInfo.isLogin) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })
    }
  })

  const postInfo = {
    postNum: 0,
    collectedNum: 0,
    recentView: 0
  }

  // 修改头像
  const handleAvatarChange = async () => {
    try {

      // 选择图片
      const res = await Taro.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['compressed'],
      });

      if (res.tempFilePaths && res.tempFilePaths[0]) {
        const selectedImagePath = res.tempFilePaths[0]; // 图片路径
        const token = Taro.getStorageSync('token'); // JWT token

        // 上传图片
        const uploadRes = await Taro.uploadFile({
          url: `${requestUrl}/v1/users/updateAvatar`,
          filePath: selectedImagePath,
          name: 'avatar',
          header: {
            Authorization: token
          }
        });

        console.log(uploadRes);
        
      };

    } catch (err) {
      console.log(err);
    }
  };

  // 登出
  const handleLogOut = () => {
    console.log(userInfo);
            
    setUserInfo({
      id: '',
      openid: '',
      student_id: '',
      nick_name: '',
      avatar: '',
      user_level: 1,
      user_exp: 0,
      faculty: '',
      major: '',
      grade: '',
    });
    Taro.removeStorageSync('token');
  };      

    return (
      <View className='mine-wrapper'>
        <View className='mine-topBackground'></View>
        <View className='mine-content'>
          <View className='mine-userInfo'>
            <View className='mine-basicInfo'>
              <Image src='#' className='mine-avatar' onClick={handleAvatarChange}></Image>
              <Text className='mine-nickname'>{userInfo.isLogin ? userInfo.nick_name : '请登录'}</Text>
              <Text className='mine-schoolID'>{userInfo.student_id}</Text>
              <View className='mine-moreInfo'>
                <View className='mine-moreInfo-item'>Lv.{userInfo.user_level}</View>
                <View className='mine-moreInfo-item'>{userInfo.grade}</View>
                <View className='mine-moreInfo-item'>{userInfo.faculty}</View>
              </View>
            </View>
            <View className='mine-postInfo'>
              <View className='mine-postInfo-item'>
                <Text className='mine-postInfo-item-num'>{postInfo.postNum}</Text>
                <Text className='mine-postInfo-item-text'>发帖</Text>
              </View>
              <View className='mine-postInfo-item'>
                <Text className='mine-postInfo-item-num'>{postInfo.collectedNum}</Text>
                <Text className='mine-postInfo-item-text'>收藏</Text>
              </View>
              <View className='mine-postInfo-item'>
                <Text className='mine-postInfo-item-num'>{postInfo.recentView}</Text>
                <Text className='mine-postInfo-item-text'>最近浏览</Text>
              </View>
            </View>
          </View>
          {userInfo.isLogin ?
            <View className='mine-functions'>
              <View className='mine-function mine-contactUs'>
                <Image src={chatImg}></Image>
                联系我们
              </View>
              <View className='mine-function mine-validation'>
                <Image src={profileImg}></Image>
                身份认证
              </View>
              <View className='mine-function mine-logout' onClick={handleLogOut}>
                <Image src={logoutImg}></Image>
                退出登录
              </View>
            </View> :
            <View className='mine-functions'>
              <View className='mine-function mine-login' onClick={userInfo.toLoginPage}>
                <Image src={loginImg}></Image>
                登录
              </View>
            </View>}
        </View>
      </View>
    )
  }
