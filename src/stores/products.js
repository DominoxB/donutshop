import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    donuts: [
      {
        id: "1",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-polewa-czekoladowa-55-g-5927s4.jpg",
        taste: "CZEKOLADOWY",
        price: "5.00",
        diet: "bc, v",
        describe:
          "Czekoladowe ciasto zatopione w polewie z gorzkiej czekolady i posypane orzechami laskowymi. Donut wegański, bez dodatku cukru."
      },
      {
        id: "2",
        image:
          "https://stokson.com.pl/images/products-single//catalog/product/161/1-coconut_5e39672c41cf14_75027580.jpg.jpg",
        taste: "KOKOSOWY",
        price: "6.00",
        diet: "bg, bc, bl, v",
        describe: "",
      },
      {
        id: "3",
        image:
          "https://www.carrefour.pl/images/product/org/donut-truskawkowy-58-g-ihh6ra.jpg",
        taste: "TRUSKAWKOWY",
        price: "4.50",
        diet: "bc, bg, v",
      },
      {
        id: "4",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-biala-wanilia-58-g-i9p6ke.jpg",
        taste: "WANILIOWY",
        price: "3.50",
        diet: "bc, v",
      },
      {
        id: "5",
        image:
          "https://stokson.com.pl/images/products-single//catalog/product/80/1-caramel_5e3965cf31ecf0_63914213.jpg.jpg",
        taste: "KARMELOWY",
        price: "5.00",
        diet: "bg, bc, v",
      },
      {
        id: "6",
        image:
          "https://minskmazowiecki.topaz24.pl/userdata/public/gfx/323209.png",
        taste: "Z CUKREM",
        price: "2.50",
        diet: "bg, v",
      },
      {
        id: "7",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-nadzieniem-o-smaku-lesnych-owocow-76-g-qlj7b8.jpg",
        taste: "Z KONFITURĄ",
        price: "6.50",
        diet: "bg, bc, v",
      },
      {
        id: "8",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-nadzieniem-jablkowo-cynamonowym-61-g-v31l0q.jpg",
        taste: "Z SZARLOTKĄ",
        price: "6.50",
        diet: "bg, bc, v",
      },
    ]
  }),
  actions: {
    },
  },
);
