import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    donuts: [
      {
        id: "0",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-polewa-czekoladowa-55-g-5927s4.jpg",
        taste: "CZEKOLADOWY",
        price: "5.00",
        glutenFree: false,
        sugarFree: true,
        vegan: true,
        lactoseFree: false,
        describe:
          "Czekoladowe ciasto zatopione w polewie z gorzkiej czekolady i posypane orzechami laskowymi. Donut wegański, bez dodatku cukru."
      },
      {
        id: "1",
        image:
          "https://stokson.com.pl/images/products-single//catalog/product/161/1-coconut_5e39672c41cf14_75027580.jpg.jpg",
        taste: "KOKOSOWY",
        price: "6.00",
        glutenFree: true,
        sugarFree: true,
        lactoseFree: true,
        vegan: true,
        describe: "Donut z nadzieniem kokosowym, oblany mleczną czekoladą i posypany wiórkami kokosowymi. Odpowiedni dla wegan oraz osób na diecie bezglutenowej, bezcukrowej i bez laktozy.",
      },
      {
        id: "2",
        image:
          "https://www.carrefour.pl/images/product/org/donut-truskawkowy-58-g-ihh6ra.jpg",
        taste: "TRUSKAWKOWY",
        price: "4.50",
        glutenFree: true,
        sugarFree: true,
        lactoseFree: false,
        vegan: true,
        describe: "Donut w polewie truskawkowej, nadziewany truskawkową konfiturą home made. Posypany wiórkami z białej czekolady. Odpowiedni dla wegan, diety bez cukru i bez glutenu."
      },
      {
        id: "3",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-biala-wanilia-58-g-i9p6ke.jpg",
        taste: "WANILIOWY",
        price: "3.50",
        glutenFree: false,
        sugarFree: true,
        lactoseFree: false,
        vegan: true,
        describe: "Donut o smaku waniliowym z waniliowym lukrem i posypką z czekoladowych wiórek. Odpowiedni dla wegan oraz osób na diecie bezcukrowej."
      },
      {
        id: "4",
        image:
          "https://stokson.com.pl/images/products-single//catalog/product/80/1-caramel_5e3965cf31ecf0_63914213.jpg.jpg",
        taste: "KARMELOWY",
        price: "5.00",
        glutenFree: true,
        sugarFree: true,
        lactoseFree: false,
        vegan: true,
        describe: "Donut oblany mleczna czekoladą i karmelem z nadzieniem o smaku słonego karmelu. Wegański, nie zawiera cukru i glutenu."
      },
      {
        id: "5",
        image:
          "https://minskmazowiecki.topaz24.pl/userdata/public/gfx/323209.png",
        taste: "Z CUKREM",
        price: "2.50",
        glutenFree: true,
        sugarFree: false,
        lactoseFree: false,
        vegan: true,
        describe: "Puszysty donut bezglutenowy posypany cukrem pudrem. Bezglutenowy i wegański."
      },
      {
        id: "6",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-nadzieniem-o-smaku-lesnych-owocow-76-g-qlj7b8.jpg",
        taste: "Z KONFITURĄ",
        price: "6.50",
        glutenFree: true,
        sugarFree: true,
        lactoseFree: false,
        vegan: true,
        describe: "Donut w polewie z kremowego lukru posypany liofilizowana maliną, nadziewany domową konfiturą malinową. Wegański, bez glutenu i cukru."
      },
      {
        id: "7",
        image:
          "https://www.carrefour.pl/images/product/org/donut-z-nadzieniem-jablkowo-cynamonowym-61-g-v31l0q.jpg",
        taste: "Z SZARLOTKĄ",
        price: "6.50",
        glutenFree: true,
        sugarFree: true,
        lactoseFree: false,
        vegan: true,
        describe: "Donut z nadzieniem o smaku szarlotki - jabłka prażone z cynamonem, z posypką z cynamonowego ksylitolu."
      },
    ]
  }),
  actions: {
    getId(id) {
      return this.donuts[id]
    }
    },
  },
);


