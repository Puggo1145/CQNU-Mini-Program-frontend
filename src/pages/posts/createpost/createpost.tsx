import { useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'
import PubSub from 'pubsub-js';

// stores
import useStore from '@/store/store'
import useRequest from '@/store/request'
import useAppInfo from '@/store/appInfo';
import useUser from '@/store/userInfo';

// utilities
import { uploadImageToOss } from '@/common/utilities/uploadImageToOss';
import { makeRequest } from '@/common/utilities/requester';

import './createpost.css'


export default function createpost() {

  const statusBarHeight = useStore((state) => state.statusBarHeight);
  const [requestUrl, ossUrl] = useRequest((state) => [state.requestUrl, state.OSSUrl]);
  const userId = useUser((state) => state.id);
  const ossAccessKeyId = useAppInfo((state) => state.accessKey_id);

  const [tags, setTags] = useState<string[]>([
    "校园日常", "新生", "求助", "交友", "考研", "实习兼职"
  ]);

  const [selectedTag, setSelectedTag] = useState<string>();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // 处理话题选择逻辑
  function handleTagSelect(tag: string) {
    setSelectedTag(tag)
    // if (selectedTags.includes(tag)) {
    //   setSelectedTags(selectedTags.filter(t => t !== tag))
    // } else if (selectedTags.length < 2) {
    //   setSelectedTags([...selectedTags, tag])
    // } else {
    //   Taro.showToast({
    //     title: '最多选择两项',
    //     icon: 'none'
    //   })
    // }
  }

  // 处理图片选择，将图片存入 selectedImages
  async function handleImageSelect() {
    const res = await Taro.chooseImage({
      count: 9 - selectedImages.length, // 最多可以选择9张图片
      sourceType: ['album', 'camera'],
      sizeType: ['compressed'],
    });

    if (res.tempFilePaths.length === 0) return;

    setSelectedImages([...selectedImages, ...res.tempFilePaths]);
  };

  // 处理图片删除
  function handleDeleteClick(index: number) {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  }

  // 发布帖子
  async function handleSubmit() {
    try {
      if (titleRef.current && contentRef.current) {

        if (titleRef.current.value.length > 25) {
          Taro.showToast({
            title: '标题超出长度',
            icon: 'error'
          })
          return
        } else if (contentRef.current.value.length > 1000) {
          Taro.showToast({
            title: '内容超出长度',
            icon: 'error'
          })
          return
        } else if (titleRef.current.value.length < 1 || contentRef.current.value.length < 1) {
          Taro.showToast({
            title: titleRef.current.value.length < 1 ? '请填写标题' : '请填写内容',
            icon: 'error'
          })
          return
        } else if (selectedTag === '' || selectedTag === undefined) {
          Taro.showToast({
            title: '请选择话题',
            icon: 'error'
          })
          return
        }

        // 待上传的数据
        const title = titleRef.current.value
        const content = contentRef.current.value
        const tag = selectedTag

        // 处理图片上传 ///////////////////////////////
        const imagePaths: string[] = selectedImages;

        // 1. 上传图片到阿里 OSS
        const uploadOssRes = await uploadImageToOss(ossAccessKeyId, userId, ossUrl, imagePaths); // uploadRes from oss

        // 2. 检查上传结果，图片上传失败抛出错误，终止上传
        uploadOssRes.ossRes.forEach((res, index) => {
          if (res.statusCode !== 204) {

            Taro.showToast({
              title: `上传失败: ${index + 1}`,
              icon: 'error'
            });

            throw new Error("image upload failed");
          };
        });

        // 3. 获取图片链接
        const uploadedImagePaths = uploadOssRes.filenames.map(filename => {
          return `${ossUrl}/${filename}`
        });

        console.log(uploadedImagePaths);

        Taro.showLoading({
          title: '发布中',
          mask: true
        });
        const res = await makeRequest({
          method: 'POST',
          url: requestUrl,
          path: '/api/v1/posts/',
          data: {
            title: title,
            content: content,
            pictures: uploadedImagePaths,
            tag: tag,
          },
          header: {
            authorization: Taro.getStorageSync('token')
          },
        });

        if (res.statusCode === 201) {
          Taro.showToast({
            title: '发布成功',
            icon: 'success'
          });
          // 1.5秒后返回，刷新首页
          setTimeout(() => {
            Taro.navigateBack();
            PubSub.publish('refreshPage');
          }, 1500);

        } else {

          Taro.showToast({
            title: '发布失败',
            icon: 'none'
          });
        };
      };

    } catch (err) {
      return err
    }
  };

  return (
    <View className='createpost-wrapper' style={{ paddingTop: statusBarHeight + 'px' }}>
      <View className='createpost-header'>
        <View className='createpost-header-back' onClick={() => { Taro.navigateBack() }}></View>
        <Text className='createpost-header-title'>发布</Text>
      </View>
      <form className='createpost-form'>
        <Input ref={titleRef} className='createpost-title' type="text" name='title' placeholder='填写标题会更受欢迎哦！（小于25字）' />
        <textarea ref={contentRef} className='createpost-content' name="content" placeholder='添加正文（小于1000字）' maxLength={1000}></textarea>
        <View className='createpost-uploadPic-area'>
          {
            selectedImages.map((image, index) => (
              <View key={index} className='createpost-selectedImage-wrapper'>
                < img className='createpost-selectedImage' src={image} alt={`Selected-${index}`} />
                <View className='createpost-delete-btn' onClick={() => handleDeleteClick(index)}>&times;</View>
              </View>
            ))
          }
          {selectedImages.length < 9 && <View className='createpost-uploadPic-btn' onClick={handleImageSelect}></View>}
        </View>
        <View className='createpost-postTags'>
          <Text>选择话题*</Text>
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
                      backgroundColor: selectedTag === item ? '#4E6AFF' : '#efefef',
                      color: selectedTag === item ? '#fff' : '#8b8b8b'
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