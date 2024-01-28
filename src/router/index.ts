import { createRouter, createWebHistory } from "vue-router";
import { useUser } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Top",
      //      component: () => import("@/views/SampleView.vue"),
      component: () => import("@/views/SampleView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      //      component: () => import("@/views/SampleView.vue"),
      component: () => import("@/views/Login/Login.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const user = useUser();
  if (!user.isLogin && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
