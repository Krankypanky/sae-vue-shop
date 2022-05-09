import BookService from "@/services/BookService";
import { createStore } from "vuex";

const DEFAULT_STATE = {
  cart: [],

  loading: false,
  errors: [],
};

export default createStore({
  state: DEFAULT_STATE,
  mutations: {
    addBookToCart: BookService.addBookToCart,
    removeBookFromCart: BookService.removeBookFromCart,
  },
  actions: {
    addBookToCart({ commit }, book) {
      console.log("addBookToCart triggered");
      commit("addBookToCart", book);
    },
    removeBookFromCart({ commit }, book) {
      commit("removeBookFromCart", book);
    },
  },
});
