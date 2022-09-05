import { defineStore } from "pinia";
export const useDonutStore = defineStore("DonutStore", {
  state: () => ({
    taste: "choco",
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
