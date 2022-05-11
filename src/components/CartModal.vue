<template>
  <div>
    <button
      class="relative px-4 py-1 mx-4 font-bold text-white bg-green-500 rounded hover:red-700"
      @click="openCart"
    >
      Warenkorb
      <span
        class="absolute px-1 text-xs bg-blue-400 border-black rounded-full -right-2 -top-2"
        >{{ cart?.length }}</span
      >
    </button>
    <div
      class="fixed inset-0 z-10 overflow-y-auto display-none"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="cartOpen"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-sm shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <button
            class="absolute top-0 p-2 text-black right-2"
            @click="closeCart"
          >
            x
          </button>

          <div class="px-4 pt-5 pb-4 text-black bg-white sm:p-6 sm:pb-4">
            <h3>Cart</h3>
            <hr />
            <p v-if="!cart?.length" class="mt-2">
              There are currently no items in your cart.
            </p>
            <ul class="h-64 overflow-auto">
              <li
                v-for="(book, index) in cart"
                :key="index + book.isbn"
                class="flex items-center justify-between my-3"
              >
                <p class="">
                  <span class="truncate">{{ book.title }}</span>
                  - <strong>{{ book.price }}€</strong>
                </p>

                <button
                  class="p-1 font-bold text-white bg-red-500 rounded hover:red-700"
                  @click="removeBookFromCart(index, book)"
                >
                  x
                </button>
              </li>
            </ul>
            <hr />
            <span>
              <strong>Totaler Preis: {{ formatPrice(total) }} €</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "@/helpers";
import { mapState } from "vuex";

export default {
  data: () => ({
    cartOpen: false,
  }),
  methods: {
    openCart: function () {
      this.cartOpen = true;
    },
    closeCart: function () {
      this.cartOpen = false;
    },
    formatPrice,
    removeBookFromCart: function (index, book) {
      // 1. dispatch ruft action auf
      // 2. action löst die mutation aus
      // 3. mutation verändert Datensatz im store
      // 4. rerender mit neuem State von allen Komponenten die den Store auslesen
      this.$store.dispatch("removeBookFromCart", index);

      // const book = this.cart[index];

      this.$toast.open({
        message: `Das Buch ${book.title} wurde aus der Warenkorb entfernt`,
        type: "info",
      });
    },
  },
  computed: {
    total() {
      let currentPrice = 0;
      this.cart.forEach((cartItem) => {
        currentPrice += cartItem.price;
      });
      return currentPrice.toFixed(2);
    },
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
};
</script>
