import { create } from "zustand";

type State = {
    statusBarHeight: number
}

type Action = {
    setStatusBarHeight: (statusBarHeight: State['statusBarHeight']) => void
}

const useStore = create<State & Action>()((set) => ({
    statusBarHeight: 0,
    setStatusBarHeight: (statusBarHeight) => set(() => ({ statusBarHeight: statusBarHeight }))
}))

export default useStore;