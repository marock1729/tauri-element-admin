<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import { Expand, Fold } from "@element-plus/icons-vue";

const appStore = useAppStore();
</script>

<template>
  <div class="humburger">
    <el-icon :size="24" class="humburger-icon" @click="appStore.collapse = !appStore.collapse">
      <Expand v-if="appStore.collapse" />
      <Fold v-if="!appStore.collapse" />
    </el-icon>
  </div>
</template>
<style>
.humburger {
  color: black;
  cursor: pointer;
}

.humburger-icon {
  vertical-align: middle;
}
</style>
