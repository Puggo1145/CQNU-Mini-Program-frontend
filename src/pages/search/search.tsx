import { useState, useEffect, useRef } from "react"
import { View, Text, Input } from "@tarojs/components"
import Taro from "@tarojs/taro"
import useStore from "@/store/store"

import './search.css'

export default function search() {

    const statusBarHeight = useStore((state) => state.statusBarHeight)

    const [searchHistory, setSearchHistory] = useState<string[]>([])
    const [hotSearch, setHotSearch] = useState<string[]>([
        '重磅！重师本升专！',
        '你的20岁',
        '你说得对',
        '百京爷就是爷',
    ])

    const searchRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

    // 从缓存读取历史记录
    useEffect(() => {
        let history = Taro.getStorageSync('searchHistory')
        if (history) {
            setSearchHistory(history)
        }
    }, [])
    
    // 处理回车搜索提交 + 加入历史记录
    function handleSearch(event) {
        console.log(event.detail.value)
        // 加入历史记录
        let newHistory = [...searchHistory]
        newHistory.unshift(event.detail.value)
        setSearchHistory(newHistory)
        Taro.setStorageSync('searchHistory', newHistory)
    }

    // 点击历史或热词直接搜索
    function pushSearchItem(item: string) {
        searchRef.current.value = item
        handleSearch({detail: {value: item}})
    }

    // 清空历史记录
    function clearHistory() {
        setSearchHistory([])
        Taro.setStorageSync('searchHistory', searchHistory)
    }

    return (
        <View className='search-wrapper' style={{paddingTop: statusBarHeight + 'px'}}>
            <View className="search-header">
                <View className="search-header-back" onClick={() => {
                    Taro.navigateBack()
                }}></View>
                <Text>搜索</Text>
            </View>
            <Input ref={searchRef} className="search-searchBar" placeholder="搜索热词" onConfirm={handleSearch}></Input>
            <View className="search-history">
                <View className="search-history-top">
                    <Text>历史记录</Text>
                    <View className="search-history-delete" onClick={clearHistory}></View>
                </View>
                <View className="search-history-list">
                    {
                        searchHistory.map((item, index) => {
                            return (
                                <View className="search-history-item" key={index} onClick={() => pushSearchItem(item)}>{item}</View>
                            )
                        })
                    }
                </View>
            </View>
            <View className="hotSearch">
                <Text>热门搜索</Text>
                <View className="hotSearch-list">
                    {
                        hotSearch.map((item, index) => {
                            return (
                                <View className="hotSearch-item" key={index} onClick={() => pushSearchItem(item)}>{item}</View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}
