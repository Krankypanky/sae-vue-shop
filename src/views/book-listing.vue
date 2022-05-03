<template>
  <main class="mt-16">
    <div id="BookListingPage" class="max-w-3xl m-auto">
      <h1 class="mt-8 mb-4 text-xl">Our Books</h1>
      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="book in books"
          :key="book.id"
          class="flex flex-col w-full p-4 mb-2 overflow-hidden rounded shadow-lg"
        >
          <h2 class="mb-2 font-semibold truncate">{{ book.title }}</h2>
          <div class="relative flex flex-row justify-between">
            <div>
              <img
                :src="book.thumbnailUrl"
                :alt="book.title"
                class="block h-20 rounded-sm"
              />
            </div>
            <div>
              <p class="text-sm">
                <span class="font-bold">Price:</span>
                {{ formatPrice(book.price) }}
              </p>
              <p class="mb-12 text-sm">
                <span class="font-bold">Date:</span>
                {{ formatDate(book.publishedDate) }}
              </p>
              <button
                @click="addBookToCart(book)"
                class="absolute px-4 py-1 mt-1 font-bold text-white bg-green-500 rounded hover:red-700 right-1 bottom-1"
              >
                Add
              </button>
            </div>
          </div>
          <p class="text-sm">
            <span class="font-bold"
              >{{ book.authors?.length > 1 ? "Authors" : "Author" }}:</span
            >
            {{ book?.authors?.join(", ") }}
          </p>
        </li>
      </ul>
      <!-- <ErrorRenderer :errors="errors" /> -->
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";

export default {
  // componenten die registriert werden müssen
  components: {},
  // state
  data: () => {
    return {
      // generic
      loading: false,
      errors: [],

      // specific
      books: [],
      cart: [],
    };
  },

  // lifecycles
  beforeMount: function () {
    axios
      .get("http://localhost:3000/books")
      .then((resp) => {
        this.books = resp.data;
      })
      .catch((e) => console.error(e))
      .finally(() => console.info("api call finished"));
  },

  // methoden
  methods: {
    addBookToCart: function (book) {
      const cart = [...this.cart];

      cart.push(book);

      this.cart = cart;
    },
    formatPrice: function (currentPrice) {
      const formatter = new Intl.NumberFormat("de-AT", {
        currency: "EUR",
        style: "currency",
      });
      return formatter.format(currentPrice);
    },
    formatDate: function (publishedDate) {
      return publishedDate
        ? format(new Date(publishedDate.$date), "yyyy")
        : null;
    },
  },
};
</script>
