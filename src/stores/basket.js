import { defineStore } from "pinia";
export const useBasketStore = defineStore("BasketStore", {
  state: () => ({
    basket: [],
  }),
  actions: {
    addProduct(obj) {
      const id = obj.id;
      const found = this.basket.find((element) => element.id === id);
      if (found === undefined) {
        this.basket.push(obj);
      } else {
        const index = this.basket.findIndex((element) => element.id === id);
        this.basket[index].quantity =
          this.basket[index].quantity + obj.quantity;
      }
    },
  },
  getters: {
    getDonutsQuantity(state) {
      return state.basket.map(el => el.quantity).reduce((a,b) => a+b,0)
    }
  },

});
