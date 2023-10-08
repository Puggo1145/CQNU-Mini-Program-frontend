import { useState, useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/runtime";
import { useLoad } from "@tarojs/taro";
import Taro from "@tarojs/taro";

import Header from "@/common/Header/Header";

// utils
import { makeRequest } from "@/common/utilities/requester";
import timeStrToDate from "@/common/utilities/timeStampToDate";

// store
import useRequest from "@/store/request";

import './MessageDetails.less';

interface MessagesType {
  _id: string
  type: 'PostLike' | 'CommentLike' | 'PostComment' | 'OfficialMessage'
  content: {
    _id: string
    user: string
    content: string
    createdAt: string

    post?: string // PostComment 的 post_id
    comment_id?: {
      post: string // CommentLike 的 post_id
    }
    post_id?: string // PostLike 的 post_id
  }
  read: boolean
  from_user_id: {
    _id: string
    nick_name: string
    avatar: string
  }
  target_user_id: string
}

export default function MessageDetails() {

  const requestUrl = useRequest(state => state.requestUrl);

  const targetPage = getCurrentInstance().router!.params.targetPage as string;
  const setter = {
    'likes': { title: '收到的赞', contentRef: 'PostLike,CommentLike' },
    'reply': { title: '评论回复', contentRef: 'PostComment' },
    'officialMessages': { title: '官方消息', contentRef: 'OfficialMessage' }
  };

  const [data, setData] = useState<MessagesType[]>([]);

  useLoad(async () => {
    // 1. 获取历史消息，将未读消息标记为已读
    const messagesRes = await makeRequest({
      method: 'PATCH',
      url: requestUrl,
      path: `/api/v1/messages/${setter[targetPage]['contentRef']}`,
      requestService: 'backend',
      header: {
        'authorization': `${Taro.getStorageSync('token')}`
      },
    });

    if (messagesRes.statusCode === 200) {
      setData(messagesRes.data.data.messages);
    };
  });

  const handleMsgClick = (post_id: string) => {
    Taro.navigateTo({
      url: '/pages/posts/postpage/postpage?' + `post_id=${post_id}`
    });
  };

  return (
    <>
      <Header title={setter[targetPage]['title']} />
      <View className="messageDetail-content">
        {
          data.length > 0 ? 
          data.reverse()
          .map(item => {
            return (
              <View 
                key={item._id} 
                className="messageDetail-content-item" 
                onClick={() => handleMsgClick(
                  item.type === 'CommentLike' ? 
                  item.content.comment_id!.post : 
                  item.type === 'PostLike' ? 
                  item.content.post_id! :  item.content.post!
                )}
              >
                <View className="messageDetail-content-item-left">
                  <Image className="messageDetail-content-item-user-avatar" src={item.from_user_id.avatar} mode="widthFix" />
                </View>
                <View className="messageDetail-content-item-right">
                  <Text className="messageDetail-content-item-user-name">
                    <Text>{item.from_user_id.nick_name}</Text>
                    <Text>{item.type === 'PostComment' ? '回复了我' : '赞了我' }</Text>
                  </Text>
                  <Text className="messageDetail-content-item-content">{item.type === 'PostComment' && item.content.content}</Text>
                  <Text className="messageDetail-content-item-createdAt time">{timeStrToDate(item.content.createdAt)}</Text>
                </View>
              </View>
            )
          }) : 
          <View className="messageDetail-noContent">
            <View className="messageDetail-noContent-icon"></View>
            <Text>暂无消息</Text>
          </View>
        }
      </View>
    </>
  )
};
