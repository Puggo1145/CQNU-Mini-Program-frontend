import { useState, useEffect, useRef } from "react"
import { View, Text, Input } from "@tarojs/components"
import Taro from "@tarojs/taro"
import useStore from "@/store/store"

import './search.css'

export default function search() {
    // store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
    const statusBarHeight = useStore((state) => state.statusBarHeight)


    // 一些基本state——————————————————————————————————————————————————————————————————————————————————————
    // 搜索历史
    const [searchHistory, setSearchHistory] = useState<string[]>([])

    // 热词
    const [hotSearch, setHotSearch] = useState<string[]>([
        '重磅！重师本升专！',
        '你的20岁',
        '你说得对',
        '百京爷就是爷',
    ])

    // 搜索框的热词 
    const [currentHotSearch, setCurrentHotSearch] = useState<string>('')

    const searchRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>


    // 页面功能 ———————————————————————————————————————————————————————————————————————————————————————————————— 
    // 从缓存读取历史记录
    useEffect(() => {
        let history = Taro.getStorageSync('searchHistory')
        if (history) {
            setSearchHistory(history)
        }
    }, [])

    // 处理回车搜索提交 + 加入历史记录
    function handleSearch(event) {
        let keyWord = event.detail.value
    
        // 如果搜索框为空则搜索当前热词
        if (keyWord === '') {
            keyWord = currentHotSearch
        }
        
        // 加入历史记录 (如果已经存在则不加入)    
    
        if (!searchHistory.includes(keyWord)) {  // 只有在 keyWord 不在 newHistory 中时，才加入
            let newHistory = [...searchHistory]
            newHistory.unshift(keyWord)
            setSearchHistory(newHistory)
            Taro.setStorageSync('searchHistory', newHistory)
        }
        
        // 跳转搜索结果页
        Taro.navigateTo({
            url: '/pages/search/searchResult/searchResult?key_word=' + keyWord
        })
    }
    

    // 点击历史或热词直接搜索
    function pushSearchItem(item: string) {
        searchRef.current.value = item
        handleSearch({ detail: { value: item } })
    }

    // 清空历史记录
    function clearHistory() {
        setSearchHistory([])
        Taro.setStorageSync('searchHistory', searchHistory)
    }

    // 滚动热词
    useEffect(() => {
        // 热词滚动索引
        let index = 0

        setCurrentHotSearch(hotSearch[index % hotSearch.length])
        let timer = setInterval(() => {
            setCurrentHotSearch(hotSearch[index % hotSearch.length])
            index++
        }, 3000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <View className='search-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className="search-header">
                <View className="search-header-back" onClick={() => {
                    Taro.navigateBack()
                }}></View>
                <Text>搜索</Text>
            </View>
            <Input ref={searchRef} className="search-searchBar" placeholder={currentHotSearch} onConfirm={handleSearch}></Input>
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
