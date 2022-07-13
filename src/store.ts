import { Storage } from "@capacitor/storage";
import create from "zustand";
import {persist} from "zustand/middleware";

type Store = {
  signedUp: boolean,
  setSignedUp: () => void,
}

export const useStore = create(persist<Store>((set) => ({
  signedUp: false,
  setSignedUp: () => set(() => ({signedUp: true}))
}), {
  name:'zustand-persist-capacitor',
  getStorage: () => ({
    getItem: (key) => Storage.get({ key }).then(({ value }) => value),
    setItem: (key, value) => Storage.set({ key, value }),
    removeItem: (key) => Storage.remove({ key }),
  })
}))
