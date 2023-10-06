import { useEffect, useState } from "react"
import Taro from "@tarojs/taro"
import { Link } from "react-router-dom"
import { View } from "@tarojs/components"

import useUser from "@/store/userInfo"
import useMessage from "@/store/messages"

interface headerItemsType {
  name: string
  isCurrent: boolean,
  id: string
}

export default function header() {

  const [isLogin, toLoginPage] = useUser((state) => [state.isLogin, state.toLoginPage]);

  const [headerItems, setHeaderItems] = useState<headerItemsType[]>([
    { name: '话题', isCurrent: true, id: 'index' },
    { name: '热榜', isCurrent: false, id: 'hot' },
    { name: '消息', isCurrent: false, id: 'message' },
  ]);

  const messages = useMessage(state => state);

  function handleHeaderItemClick(id: string): void {

    if (!isLogin && id === 'message') {
      toLoginPage()

      return
    };

    const newHeaderItems = headerItems.map((item) => {
      return {
        ...item,
        isCurrent: item.id === id
      }
    });
    setHeaderItems(newHeaderItems);
  };

  return (
    <View className='index-header'>
      <View className="index-header-items">
        {
          headerItems.map((item) => {
            if (item.id === 'message' && !isLogin) {
              return (
                <View className={`index-header-item ${item.isCurrent && 'index-header-isCurrent'}`} key={item.id} onClick={() => handleHeaderItemClick(item.id)}>
                  {item.name}
                </View>
              )
            } else {
              return (
                <>
                  <Link to={`pages/index/${item.id}`} className={`index-header-item ${item.isCurrent && 'index-header-isCurrent'}`} key={item.id} onClick={() => handleHeaderItemClick(item.id)}>
                    {item.id === 'message' && messages.all !== 0 && <View className="index-header-allMessageNum">{messages.all}</View>}
                    {item.name}
                  </Link>
                </>
              )
            }
          })
        }
      </View>
      <View className="index-header-search" onClick={() => {
        Taro.navigateTo({
          url: '/pages/search/search'
        })
      }}
      ></View>
    </View>
  )
}
