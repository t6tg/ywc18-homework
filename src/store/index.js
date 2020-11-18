import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    provinces: [],
    merchants: [],
    categories: [],
    priceRange: [],
    category_pick: "ร้านอาหารและเครื่องดื่ม",
  },
  mutations: {},
  actions: {},
  modules: {},
});
