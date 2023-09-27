import { PropsWithChildren, useEffect } from 'react'
import Taro from '@tarojs/taro'
import PubSub from 'pubsub-js';

import useStore from './store/store'
import useUser from './store/userInfo'
import usePostData from './store/postData'
import useRequest from './store/request'
import useMessage from './store/messages';

// Utilities
import LaunchInitiater from './common/launchUtilities/launchInitiater'
import { initContainer } from './common/utilities/requester';

// styles
import './app.less'
import useCLasstable from './store/classTable';
import { dataType } from './common/handlers/socketHandler';

function App({ children }: PropsWithChildren<any>) {
  // 数据 store ————————————————————————————————————————————————————————————
  const [statusBarHeight, setStatusBarHeight] = useStore((state) => [state.statusBarHeight, state.setStatusBarHeight])
  const [postData, setPostData] = usePostData((state) => [state, state.setPostData])
  const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])
  
  const [userInfo, setUserInfo] = useUser((state) => [state, state.setUserInfo])
  const [classTable, setClassTable] = useCLasstable((state) => [state, state.setClassTable])
  const [messages, setMessageNum] = useMessage((state) => [state, state.setMessageNum])
  
  // 请求初始数据 ————————————————————————————————————————————————————————————
  const initer = async () => {
    // 1. 实例化云环境
    await initContainer({
      resourceEnv: 'prod-9gbm3fviea24ffc8', // 云环境
      serviceName: 'cqnu-backend', // 云服务名
    });

    // 2. 获取全局 statusBarHeight        
    const systemInfoRes = await Taro.getSystemInfo();
    if (systemInfoRes.statusBarHeight) {
      setStatusBarHeight(systemInfoRes.statusBarHeight - 10)
    };

    // 3. launchInitiater: APP 数据初始化（Tags，登陆状态，OSS令牌，建立WebSocket，获取未读消息）
    let launchInitiater = new LaunchInitiater(requestUrl, userInfo, postData);
    
    // 1. 获取所有Tags
    launchInitiater.getAllTags(); 
    
    // 2. 验证登录状态    
    const isTokenValid = await launchInitiater.initialLoginValidation();
    if (isTokenValid) {
      launchInitiater.getOssParams(); // 3. 获取 OSS 的 parameters ？
      launchInitiater.webSocketInit(); // 4. 建立 socket 连接 ？

      const unreadMsgRes = await launchInitiater.getUnreadMessages(); // 5. 获取未读消息 ？
      setMessageNum( { ...unreadMsgRes } );
    };

    // 6. 从缓存查找课表
    const classTableRes = await Taro.getStorage({ key: 'classTable' });
    setClassTable(classTableRes.data);
    
    // 7. 新用户注册 或 登录，需要重新加载一次OSS令牌，请在登录或注册成功后，发布此消息！！！
    const getOssParamsToken = PubSub.subscribe('getOssParams', () => {
      launchInitiater = new LaunchInitiater(requestUrl, userInfo, postData); // 传新数据

      launchInitiater.getOssParams();
    });

    return () => {
      PubSub.unsubscribe(getOssParamsToken);
    };
  };
  // 数据初始化：App 进入、登录、注册时
  useEffect(() => {
    initer();
  }, [])


  // 消息推送同步 ————————————————————————————————————————————————————————————
  useEffect(() => {
    // 同步新消息
    const newMessageToken = PubSub.subscribe('newMessage', (msg: string, data: dataType) => {
      if (data.type === 'likes') {
        setMessageNum({ likes: messages.likes + 1 });
      } else if (data.type = 'reply') {
        setMessageNum({ reply: messages.reply + 1 });
      };

      setMessageNum({ all: messages.all + 1 });
    });

    return () => {
      PubSub.unsubscribe(newMessageToken);
    };
  }, [messages])

  
  // children 是将要会渲染的页面
  return children
}

export default App