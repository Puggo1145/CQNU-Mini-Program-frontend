import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useUser from '../../store/userInfo';
import useRequest from '@/store/request';
import useAppInfo from '@/store/appInfo'; // 取 accessKeyId

import compressImage from '@/common/launchUtilities/compressImage';
import { makeRequest } from '@/common/utilities/requester';

import './mine.css'

import chatImg from '../../static/mine/chat.png'
import profileImg from '../../static/mine/profile.png'
import logoutImg from '../../static/mine/logout.png'
import loginImg from '../../static/mine/login.png'
import usePostData from '@/store/postData';

export default function Mine() {

  const [userInfo, setUserInfo] = useUser((state) => [state, state.setUserInfo]);
  const [requestUrl, avatarToOssUrl] = useRequest((state) => [state.requestUrl, state.avatarToOssUrl]);
  const accessKeyId = useAppInfo((state) => state.accessKey_id);
  const [postData, setPostData] = usePostData((state) => [state, state.setPostData]);

  useLoad(async () => {
    if (!userInfo.isLogin) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })

      return;
    }

    // 获取用户社区信息
    const token = Taro.getStorageSync('token');

    const res = await makeRequest({
      method: 'GET',
      url: requestUrl,
      path: '/api/v1/users/communityInfo',
      requestService: 'backend',
      header: {
        Authorization: token
      },
    });

    if (res.statusCode === 200) {
      console.log(res.data);

      setPostData({
        myPosts: res.data.data.posts,
        likesNum: res.data.data.likes,
      });
    } else {
      Taro.showToast({
        title: '信息获取失败',
        icon: 'error',
        duration: 2000
      });
    }
  });

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
        const compressedImgPath = await compressImage(selectedImagePath)  // 压缩图片

        Taro.showLoading({
          title: '上传中',
          mask: true
        });
        // 2. 上传图片到阿里 OSS
        const key = `avatar-${userInfo.id}-${Date.now()}.jpg`; // 上传头像的文件名
        const policy = Taro.getStorageSync('policy'); // OSS policy
        const ossAccessKeyId = accessKeyId; // 阿里云 RAM 用户 accessKeyId
        const signature = Taro.getStorageSync('signature'); // OSS 签名

        const uploadRes = await Taro.uploadFile({
          url: avatarToOssUrl,
          filePath: compressedImgPath,
          name: 'file', // 这里必须填 file
          formData: {
            key: key,
            policy,
            OSSAccessKeyId: ossAccessKeyId,
            signature,
          },
        });

        console.log(uploadRes);


        // 上传成功，将图片URL存入数据库
        if (uploadRes.statusCode === 204) {
          const avatarUrl = `${avatarToOssUrl}/${key}`;
          const updateAvatarRes = await makeRequest({
            method: 'PATCH',
            url: requestUrl,
            path: '/api/v1/users/updateAvatar',
            requestService: 'backend',
            header: {
              Authorization: Taro.getStorageSync('token')
            },
            data: {
              avatar: avatarUrl
            },
          });

          if (updateAvatarRes.statusCode === 200) {
            Taro.setStorageSync('avatar', avatarUrl); // 持久化 avatar
            setUserInfo({ avatar: avatarUrl }) // 同步到 userInfo

            Taro.showToast({
              title: '已提交审核',
              icon: 'success',
              duration: 2000
            });
          };

        } else {
          Taro.showToast({
            title: '上传失败',
            icon: 'error',
            duration: 2000
          });
        };
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
      avatar: 'none',
      user_level: 1,
      user_exp: 0,
      identity: '',
      faculty: '',
      major: '',
      grade: '',
    });
    setPostData({
      myPosts: 0,
      likesNum: 0,
    });
    Taro.removeStorageSync('token');
  };

  // 跳转功能页
  const handleLinkToFns = (fnName: string) => {
      Taro.navigateTo({
        url: `/pages/mine/${fnName}/${fnName}`
      })
  }

  const gradeToChinese = () => {
    const setter = {
      1: '一',
      2: '二',
      3: '三',
      4: '四',
    };

    const currentYear = new Date().getFullYear();
    const grade = Number(userInfo.grade)

    if (currentYear - grade > 4 && currentYear - grade < 1000) {
      return '已毕业';
    } else if (currentYear - grade <= 4 && userInfo.identity === '本科生') {
      return `大${setter[currentYear - grade + 1]}` 
    } else if (currentYear - grade <= 3 && userInfo.identity === '研究生') {
      return `研${setter[currentYear - grade + 1]}` 
    } else {
      return '年级'
    };
  };

  return (
    <View className='mine-wrapper'>
      <View className='mine-content'>
        <View className='mine-userInfo'>
          <View className='mine-basicInfo'>
            <Image src={userInfo.avatar} className='mine-avatar' onClick={() => userInfo.isLogin ? handleAvatarChange() : null}></Image>
            <Text className='mine-nickname'>{userInfo.isLogin ? userInfo.nick_name : '请登录'}</Text>
            <Text className='mine-schoolID'>{userInfo.student_id}</Text>
            <View className='mine-moreInfo'>
              <View className='mine-moreInfo-item'>{userInfo.user_level === 0 ? '等级' : `Lv.${userInfo.user_level}`}</View>
              <View className='mine-moreInfo-item'>{gradeToChinese()}</View>
              <View className='mine-moreInfo-item'>{userInfo.faculty ? userInfo.faculty : '学院'}</View>
            </View>
          </View>
          <View className='mine-postInfo'>
            <View className='mine-postInfo-item' onClick={() => userInfo.isLogin ? Taro.navigateTo({ url: '/pages/mine/myPosts/myposts' }) : null}>
              <Text className='mine-postInfo-item-num'>{postData.myPosts}</Text>
              <Text className='mine-postInfo-item-text'>发帖</Text>
            </View>
            <View className='mine-postInfo-item'>
              <Text className='mine-postInfo-item-num'>{postData.likesNum}</Text>
              <Text className='mine-postInfo-item-text'>收到的赞</Text>
            </View>
            <View className='mine-postInfo-item'>
              <Text className='mine-postInfo-item-num'>敬请期待</Text>
              <Text className='mine-postInfo-item-text'>最近浏览</Text>
            </View>
          </View>
        </View>
        {userInfo.isLogin ?
          <View className='mine-functions'>
            <View className='mine-function mine-linkOfficial' onClick={() => handleLinkToFns('linkOfficial')}>
              <Image src={profileImg}></Image>
              连接校园门户
            </View>
            <View className='mine-function mine-contactUs' onClick={() => handleLinkToFns('contactUs')}>
              <Image src={chatImg}></Image>
              联系我们
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
      <View className='mine-topBackground'></View>
    </View>
  )
}
