<template>
  <loading-indicator></loading-indicator>
  <ErrorRenderer :errors="errors" />
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
  </div>
</template>

<script>
import { format } from "date-fns";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import ErrorRenderer from "@/components/ErrorRenderer.vue";
import { formatPrice } from "../helpers.js";
import BookService from "@/services/BookService.js";

export default {
  // componenten die registriert werden müssen
  components: { LoadingIndicator, ErrorRenderer },
  // state
  data: () => {
    return {
      // specific
      books: [],
    };
  },

  // lifecycles
  beforeMount: async function () {
    this.loading = true;
    this.errors = [];
    await this.getBooks();
  },

  // methoden
  methods: {
    getBooks: async function () {
      this.books = await BookService.getBooks();
    },
    formatPrice,
    formatDate: function (publishedDate) {
      return publishedDate
        ? format(new Date(publishedDate.$date), "MM.yyyy")
        : null;
    },
    addBookToCart: function (book) {
      this.$store.dispatch("addBookToCart", {
        id: 1,
        book,
      });
    },
  },
};
</script>
