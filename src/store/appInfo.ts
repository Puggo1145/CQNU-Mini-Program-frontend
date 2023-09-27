import { create } from "zustand";

type State = {
    app_id: string,
    accessKey_id: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "wxb6daf8568298c129", // 小程序 app_id
    accessKey_id: "LTAI5tCV9bSX9UBTMSx57UCi" // 阿里云 accessKey_id
}))

export default useAppInfo;