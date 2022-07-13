import create from "zustand";

type Store = {
  signedUp: boolean,
  setSignedUp: () => void,
}

export const useStore = create<Store>((set) => ({
  signedUp: false,
  setSignedUp: () => set(s => ({signedUp: true}))
}))
