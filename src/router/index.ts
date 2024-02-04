import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import Layout from "@/layout/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Top",
      redirect: "/sample",
      component: Layout,
      children: [
        {
          path: "/sample",
          name: "sample",
          component: () => import("@/views/SampleView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/Login.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  if (!userStore.isLogin && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
