import { create } from "zustand";

type State = {
    app_id: string,
    app_secret: string,
}


const useAppInfo = create<State>()(() => ({
    app_id: "wx5e10bbd063310491",
    app_secret: "3854517d5394f6a25bff84f1fd1e6c72",
}))

export default useAppInfo;