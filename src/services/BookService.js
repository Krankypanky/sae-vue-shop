import axios from "axios";

export default class BookService {
  static async getBooks() {
    return axios
      .get("http://localhost:3000/books")
      .then((resp) => {
        return resp.data;
      })
      .catch((e) => {
        // formatErrors(e)
        console.error(e);
      })
      .finally(() => {
        console.info("api call finished");
      });
  }

  static addBookToCart(currentState, book) {
    console.log("add triggered", currentState, book);
    const cart = [...currentState.cart];
    cart.push(book);
    currentState.cart = cart;
  }

  static removeBookFromCart(currentState, index) {
    console.log("remove triggered");
    const cart = [...currentState.cart];
    cart.splice(index, 1);
    currentState.cart = cart;
  }
}
