<script setup lang="ts">
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";

const user = useUser();
const router = useRouter();

const handleLogoutButtonClick = async () => {
  user.logout();
  router.push({ name: "Login" });
};
</script>
<template>
  <ElButton @click="handleLogoutButtonClick">ログアウト</ElButton>
</template>
