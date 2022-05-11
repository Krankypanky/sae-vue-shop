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
    setErrors: (state, errors) => {
      state.errors = errors;
    },
    addBookToCart: BookService.addBookToCart,
    removeBookFromCart: BookService.removeBookFromCart,
  },
  actions: {
    setErrors({ commit }, errors) {
      commit("setErrors", errors);
    },
    addBookToCart({ commit }, book) {
      console.log("addBookToCart triggered");
      commit("addBookToCart", book);
    },
    removeBookFromCart({ commit }, book) {
      commit("removeBookFromCart", book);
    },
  },
});
