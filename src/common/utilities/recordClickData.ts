import { makeRequest } from "./requester";
import Taro from "@tarojs/taro";

export const recordClickData = async (data: {page: string, url: string}) => {
    await makeRequest({
        method: 'POST',
        url: data.url,
        path: '/api/v1/dataAnalysis',
        requestService: 'backend',
        header: {
            'Authorization': Taro.getStorageSync('token') 
        },
        data: {
            page: data.page
        }
    });
};