import { createRouter, createWebHistory } from "vue-router";
import BookListing from "../views/book-listing.vue";

const routes = [
  {
    path: "/",
    component: BookListing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
