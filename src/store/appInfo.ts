// 存储微信小程序 app_id 和阿里云 accessKey_id
import { create } from "zustand";

type State = {
    app_id: string,
    accessKey_id: string,
    resourceEnv: string,
    serviceName: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "wxb6daf8568298c129", // 小程序 app_id
    accessKey_id: "LTAI5tCV9bSX9UBTMSx57UCi", // 阿里云 accessKey_id
    resourceEnv: 'main-backend-5gp83zhr300567ba',
    serviceName: 'cqnumini-backend',
}))

export default useAppInfo;