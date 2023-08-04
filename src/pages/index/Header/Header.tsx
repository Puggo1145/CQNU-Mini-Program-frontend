import { useState } from "react"
import { Link } from "react-router-dom"
import { View } from "@tarojs/components"

interface headerItemsType {
  name: string
  isCurrent: boolean,
  id: string
}

export default function header() {

  const [headerItems, setHeaderItems] = useState<headerItemsType[]>([
    {name: '话题', isCurrent: true, id: 'index'},
    {name: '热榜', isCurrent: false, id: 'hot'},
    {name: '消息', isCurrent: false, id: 'message'},
  ])

  function handleHeaderItemClick(id: string):void {
    const newHeaderItems = headerItems.map((item) => {
      return {
        ...item,
        isCurrent: item.id === id
      }
    })
    setHeaderItems(newHeaderItems)
  }
  
  return (
    <View className='index-header'>
      <View className="index-header-items">
        {
          headerItems.map((item) => {
            return (
              <Link to={`pages/index/${item.id}`} className={`index-header-item ${item.isCurrent && 'index-header-isCurrent'}`} key={item.id} onClick={() => handleHeaderItemClick(item.id)}>{item.name}</Link>
            )
          })
        }
      </View>
    </View>
  )
}
