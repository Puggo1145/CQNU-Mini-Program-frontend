import { create } from "zustand";

type State = {
    app_id: string,
    app_secret: string,
    accessKey_id: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "wx047f8dac6eb7516d",
    app_secret: "458b7e087f98d02c671db3a8d57ec5fb",
    accessKey_id: "LTAI5tCV9bSX9UBTMSx57UCi"
}))

export default useAppInfo;