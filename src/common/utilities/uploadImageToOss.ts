import Taro from '@tarojs/taro'

import compressImage from '../launchUtilities/compressImage';

export const uploadImageToOss = async (accessKeyId: string, id: string, ossUrl: string, imagePaths: string[]) => {
    // 获取 OSS 通行证, OSS 通行证在 APP 加载时 / 用户登录注册成功后便已请求
    const policy = Taro.getStorageSync('policy'); // OSS policy
    const signature = Taro.getStorageSync('signature'); // OSS 签名
    const ossAccessKeyId = accessKeyId; // 阿里云 RAM 用户 accessKeyId
    let filenames: string[] = []; // 所有上传文件的文件名


    // 1. 创建多个 promise 上传任务
    const uploadTask = imagePaths.map(async (imagePath, index) => {
        const key = `${id}-${index}.jpg`; // 上传的文件名
        filenames.push(key);

        const imagePromise = Taro.uploadFile({
            url: ossUrl,
            filePath: await compressImage(imagePath), // 压缩图片
            name: 'file',
            formData: {
                key: key,
                policy: policy,
                OSSAccessKeyId: ossAccessKeyId,
                signature: signature,
            },
        });

        return imagePromise;
    });

    // 2. 等待所有上传任务完成
    const uploadossRes = await Promise.all(uploadTask);
    
    uploadossRes.forEach((res, index) => {
        if (res.statusCode !== 204) {

          Taro.showToast({
            title: `上传失败: ${index + 1}`,
            icon: 'error'
          });

          throw new Error("image upload failed");
        };
      });

    return {
        ossRes: uploadossRes,
        filenames: filenames,
    };
};