import { PropsWithChildren, useEffect } from 'react'
import Taro from '@tarojs/taro'
import PubSub from 'pubsub-js';

import useStore from './store/store'
import useUser from './store/userInfo'
import usePostData from './store/postData'
import useRequest from './store/request'
import useMessage from './store/messages';
import useAppInfo from './store/appInfo';

// Utilities
import LaunchInitiater from './common/launchUtilities/launchInitiater'
import { initContainer } from './common/utilities/requester';

// styles
import './app.less'
import useCLasstable from './store/classTable';
import { dataType } from './common/handlers/socketHandler';

function App({ children }: PropsWithChildren<any>) {
  // 数据 store ————————————————————————————————————————————————————————————
  const setStatusBarHeight = useStore((state) => state.setStatusBarHeight)
  const [postData, setPostData] = usePostData((state) => [state, state.setPostData])
  const requestUrl = useRequest((state) => state.requestUrl)
  
  const userInfo = useUser((state) => state)
  const [classTable, setClassTable] = useCLasstable((state) => [state, state.setClassTable])
  const [messages, setMessageNum] = useMessage((state) => [state, state.setMessageNum])

  const resourceEnv = useAppInfo((state) => state.resourceEnv)
  
  // 请求初始数据 ————————————————————————————————————————————————————————————
  const initer = async () => {
    // 云函数实例化
    await initContainer({
      resourceEnv: resourceEnv,
    });
    
    // 由于不同设备顶部状态栏高度不同，需要在进入时读取以便使其他页面能够保持相同的顶部距离
    const systemInfoRes = await Taro.getSystemInfo();
    if (systemInfoRes.statusBarHeight) {
      setStatusBarHeight(systemInfoRes.statusBarHeight - 8)
    };

    // launchInitiater: APP 数据初始化（Tags，登陆状态，OSS令牌，建立WebSocket，获取未读消息）
    let launchInitiater = new LaunchInitiater(requestUrl);
    
    launchInitiater.getAllTags(postData); 
    
    const isTokenValid = await launchInitiater.initialLoginValidation(userInfo);
    if (isTokenValid) {
      launchInitiater.webSocketInit();
      launchInitiater.getOssParams();

      const unreadMsgRes = await launchInitiater.getUnreadMessages();
      setMessageNum( { ...unreadMsgRes } );
    };

    const classTableRes = await Taro.getStorage({ key: 'classTable' });
    setClassTable(classTableRes.data);
    
    

    return () => {
    };
  };
  useEffect(() => {
    initer();
  }, [])

  // 监听事件
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

    // 新用户注册 或 登录，需要重新加载一次OSS令牌，请在登录或注册成功后，发布此消息！！！
    const getOssParamsToken = PubSub.subscribe('getOssParams', () => {
      const launchInitiater = new LaunchInitiater(requestUrl); // 传新数据

      launchInitiater.getOssParams();
    });

    return () => {
      PubSub.unsubscribe(newMessageToken);
      PubSub.unsubscribe(getOssParamsToken);
    };
  }, [messages])

  
  return children
}

export default App