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
    path: "/person",
    component: () => import("../views/Person/Index.vue"),
    children: [
      {
        path: "create",
        name: "create-person",
        meta: {
          layout: "app"
        },
        component: () => import("../views/Person/AddPerson.vue")
      },
      {
        path: ":id",
        name: "view-person",
        meta: {
          layout: "app"
        },
        component: () => import("../views/Person/ViewPerson.vue")
      },
      {
        path: ":id/edit",
        name: "edit-person",
        meta: {
          layout: "app"
        },
        component: () => import("../views/Person/EditPerson.vue")
      }
    ]
  },
  {
    path: "/list",
    component: () => import("../views/List/Index.vue"),
    children: [
      {
        path: "create",
        name: "create-list",
        meta: {
          layout: "app"
        },
        component: () => import("../views/List/AddList.vue")
      },
      {
        path: ":id",
        name: "view-list",
        meta: {
          layout: "app"
        },
        component: () => import("../views/List/ViewList.vue")
      },
      {
        path: ":id/edit",
        name: "edit-list",
        meta: {
          layout: "app"
        },
        component: () => import("../views/List/EditList.vue")
      }
    ]
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
