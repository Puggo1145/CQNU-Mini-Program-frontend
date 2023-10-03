import Taro from '@tarojs/taro';

let resourceEnv = ''; // 云环境 id 
let serviceName = ''; // 云服务名
let container; // 云环境实例变量


interface containerType {
    resourceEnv: string;
    serviceName: string;
}

interface paramsType {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    path: string;
    header?: object;
    data?: object;
    timeout?: number;
}

// 初始化云环境
export const initContainer= async (containerParam: containerType) => {
    resourceEnv = containerParam.resourceEnv;
    serviceName = containerParam.serviceName; 
    
    // 初始化云环境
    container = new Taro.cloud.Cloud({
        resourceEnv: resourceEnv,
    });
    await container.init();
};

// 发起请求
export const makeRequest = async (param: paramsType) => {
    if ( !container ) return;
    
    // 开发环境，Taro.request
    if ( process.env.NODE_ENV === 'development' ) {
        const res = Taro.request({
            method: param.method as any,
            url: param.url + param.path,
            header: param.header,
            data: param.data,
            timeout: param.timeout || 10000
        })

        return res;

    // 生产环境，云环境
    } else {
        const res = await container.callContainer({
            method: param.method as any,
            path: param.path,
            header: {
                'X-WX-SERVICE': serviceName,
                ...param.header
            },
            data: param.data
        })

        return res;
    }
};