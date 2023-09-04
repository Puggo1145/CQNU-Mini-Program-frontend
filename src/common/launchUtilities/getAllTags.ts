import Taro from "@tarojs/taro";

const getAllTags = async (requestUrl: string, setPostData) => {
    const tags = await Taro.request({
        method: 'GET',
        url: requestUrl + '/v1/posts/tags',
      })
      const tagsArray = tags.data.data.tags.map( item => item.name ); 
      // 将所有的tags存入 store
      setPostData({ tags: tagsArray })
};

export default getAllTags;