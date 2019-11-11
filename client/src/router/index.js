import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "app",
      requiresAuth: true
    },
    component: Home
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "guest"
    },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "guest"
    },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/list/create",
    name: "create-list",
    meta: {
      layout: "app"
    },
    component: () => import("../views/AddList.vue")
  },
  {
    path: "/person/create",
    name: "create-person",
    meta: {
      layout: "app"
    },
    component: () => import("../views/AddPerson.vue")
  },
  {
    path: "/404",
    component: () => import("../views/404.vue")
  },
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
