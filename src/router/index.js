import { createRouter, createWebHistory } from "vue-router";
import BookListing from "../views/book-listing.vue";
import Error404 from "../views/error-404.vue";
import RegisterPage from "../views/register-page.vue";

const routes = [
  {
    path: "/",
    component: BookListing,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/:catchAll(.*)",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
