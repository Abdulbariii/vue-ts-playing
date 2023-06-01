import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactPage from "../views/ContactPage.vue";
import CounterPage from "../views/CounterPage.vue";
import JobsPage from "../views/JobsPage.vue";
import AboutViewVue from "../views/AboutView.vue";
import ProductInfo from "../components/ProductInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/counter",
    name: "counter",
    component: CounterPage,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsPage,
  },
  {
    path: "/counter/:id",
    name: "jobs",
    component: ProductInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
