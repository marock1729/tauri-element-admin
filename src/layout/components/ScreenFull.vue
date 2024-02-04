<script setup lang="ts">
import { ref } from "vue";
import { FullScreen, Crop } from "@element-plus/icons-vue";
import { appWindow } from "@tauri-apps/api/window";

const isFullScreen = ref<boolean>(false);
const handleScreenfullButtonClick = async () => {
  appWindow.setFullscreen(!isFullScreen.value);
  isFullScreen.value = !isFullScreen.value;
};
</script>
<template>
  <div class="screenfull">
    <el-icon size="22" class="screenfull-icon" @click="handleScreenfullButtonClick">
      <Crop v-if="isFullScreen" />
      <FullScreen v-else />
    </el-icon>
  </div>
</template>
<style>
.screenfull {
  color: black;
  cursor: pointer;
}

.screenfull-icon {
  vertical-align: middle;
}
</style>
