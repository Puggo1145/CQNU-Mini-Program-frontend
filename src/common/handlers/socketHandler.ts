import PubSub from 'pubsub-js';

export interface dataType {
    _id: string
    type: string
    content_id: string
    target_user_id: string
}

const socketHandler = (socket) => {

    // 监听新消息
    socket.on('newMessage', (data: dataType) => {
        PubSub.publish('newMessage', data); // 在 app.ts 中订阅处理方法
    });
};

export default socketHandler;