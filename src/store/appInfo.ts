import { create } from "zustand";

type State = {
    app_id: string,
    app_secret: string,
    accessKey_id: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "wxb6daf8568298c129", // 小程序 app_id
    app_secret: "17d8ebe6df34d443d493349c994cfa8a", // 小程序 app_secret
    accessKey_id: "LTAI5tCV9bSX9UBTMSx57UCi" // 阿里云 accessKey_id
}))

export default useAppInfo;