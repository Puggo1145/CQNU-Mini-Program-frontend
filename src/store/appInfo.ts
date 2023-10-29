// 存储微信小程序 app_id 和阿里云 accessKey_id
import { create } from "zustand";

type State = {
    app_id: string,
    accessKey_id: string,
    resourceEnv: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "", // 小程序 app_id
    accessKey_id: "", // 阿里云 accessKey_id
    resourceEnv: '',
}))

export default useAppInfo;