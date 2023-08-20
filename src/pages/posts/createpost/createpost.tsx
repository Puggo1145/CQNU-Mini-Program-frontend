import { useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'

import useUser from '@/store/userInfo'
import useStore from '@/store/store'
import useRequest from '@/store/request'


import './createpost.css'

export default function createpost() {

  const statusBarHeight = useStore((state) => state.statusBarHeight)
  const [requestUrl, setRequestUrl] = useRequest((state) => [state.requestUrl, state.setRequestUrl])

  const user_id = useUser((state) => state.user_id)


  const [tags, setTags] = useState<string[]>([
    '校园日常',
    '新生',
    '求助',
    '交友',
    '考研',
    '实习兼职',
  ])


  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  
  // 处理话题选择逻辑
  function handleTagSelect(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag])
    } else {
      Taro.showToast({
        title: '最多选择两项',
        icon: 'none'
      })
    }
  }

  // 处理图片上传
  function handleUploadClick() {
    Taro.chooseImage({
      count: 9 - selectedImages.length, // 最多可以选择9张图片
      success: function (res) {
        const tempFilePaths = res.tempFilePaths
        setSelectedImages([...selectedImages, ...tempFilePaths])
      }
    })
  }

  // 处理图片删除
  function handleDeleteClick(index: number) {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  }

  // 发布帖子
  function handleSubmit() {    
    if (titleRef.current && contentRef.current) {

      if (titleRef.current.value.length < 1 || contentRef.current.value.length < 15) {
        titleRef.current.placeholder = '请填写标题'
        contentRef.current.placeholder = '请填写正文，不少于15个字'

        Taro.showToast({
          title: '检查标题或正文',
          icon: 'error'
        })
        return
      } else if (selectedTags.length < 1) {
        Taro.showToast({
          title: '请选择话题',
          icon: 'error'
        })

        return
      }

      const title = titleRef.current.value
      const content = contentRef.current.value
      const tags = selectedTags
      const images = selectedImages

      Taro.request({
        url: requestUrl + '/posts/createpost',
        method: 'POST',
        data: {
              user_id: user_id,
              title: title,
              content: content,
              post_tag: "热门"
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res);
          if (res.data.code === '200') {            
            Taro.showToast({
              title: '发布成功',
              icon: 'success'
            })
            // 1.5秒后返回
            setTimeout(() => {
              Taro.navigateBack()
            }, 1500)
          } else {
            Taro.showToast({
              title: '发布失败',
              icon: 'none'
            })
          }
        }
      })
    }
  }
  

  return (
    <View className='createpost-wrapper' style={{paddingTop: statusBarHeight + 'px'}}>
      <View className='createpost-header'>
        <View className='createpost-header-back' onClick={() => {
          Taro.navigateBack()
        }}></View>
        <Text className='createpost-header-title'>发布</Text>
      </View>
      <form className='createpost-form'>
        <Input ref={titleRef} className='createpost-title' type="text" name='title' placeholder='填写标题会更受欢迎哦！' />
        <textarea ref={contentRef} className='createpost-content' name="content" placeholder='添加正文，不少于15个字'></textarea>
        <View className='createpost-uploadPic-area'>
          {
            selectedImages.map((image, index) => (
              <View key={index} className='createpost-selectedImage-wrapper'>
                < img className='createpost-selectedImage' src={image} alt={`Selected-${index}`} />
                <View className='createpost-delete-btn' onClick={() => handleDeleteClick(index)}>&times;</View>
              </View>
            ))
          }
          {selectedImages.length < 9 && <View className='createpost-uploadPic-btn' onClick={handleUploadClick}></View>}
        </View>
        <View className='createpost-postTags'>
          <Text>选择话题*（最多选择两项）</Text>
          <Text>话题决定了你发布的内容是否会你所期望的同学看到</Text>
          <View className='createpost-tags'>
            {
              tags.map((item, index) => {
                return (
                  <View
                    className='createpost-tag'
                    key={index}
                    onClick={() => handleTagSelect(item)}
                    style={{
                      backgroundColor: selectedTags.includes(item) ? '#4E6AFF' : '#efefef',
                      color: selectedTags.includes(item) ? '#fff' : '#8b8b8b'
                    }}
                  >
                    {item}
                  </View>
                )
              })
            }
          </View>
        </View>
        <Button className='createpost-submit' formType='submit' onClick={handleSubmit}>发布</Button>
      </form>
    </View>
  )
}