// 消息推送
import { create } from "zustand";

export type MessageType = {
    likes: number
    reply: number
    officialMessages: number
    all: number

    setMessageNum: (messageNum: Partial<MessageType> ) => void;
};

const useMessage = create<MessageType>((set) => ({
    likes: 0,
    reply: 0,
    officialMessages: 0,
    all: 0,

    setMessageNum: (messageNum) => set(state => ({ ...state, ...messageNum }))
}));

export default useMessage;