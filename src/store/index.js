import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    provinces: [],
    merchants: [],
    categories: [],
    priceRange: [],
    category_pick: "ทั้งหมด",
  },
  mutations: {},
  actions: {},
  modules: {},
});
