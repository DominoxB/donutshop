import { defineStore } from "pinia";
export const useBasketStore = defineStore("BasketStore", {
  state: () => ({
    basket: [],
  }),
  actions: {
    addProduct(obj) {
      console.log(obj)
      this.basket.push(obj);
    },
  },
});
