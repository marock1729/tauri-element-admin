import { defineStore } from "pinia";

interface AppInfo {
  collapse: boolean
}

export const useAppStore = defineStore({
  id: "app",
  state: (): AppInfo => ({
    collapse: false,
  }),
  actions: {
    async setCollapse(collapse: boolean) {
      this.collapse = collapse;
    },
  },
  persist: true,
});
