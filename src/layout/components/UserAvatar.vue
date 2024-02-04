<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const handleSignOutButtonClick = async () => {
  userStore.logout();
  router.push({ name: "Login" });
};
</script>

<template>
  <el-dropdown>
    <el-button class="avatar-button">
      <el-avatar>
        {{ userStore.firstName }}
      </el-avatar>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleSignOutButtonClick">
          サインアウト
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style scoped>
.avatar-button {
  color: black;
  border: none;
  outline: none;
  /* background: transparent; */
  margin-right: 6px;
  height: 46px;
  width: 46px;
}
</style>
