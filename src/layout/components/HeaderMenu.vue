<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>

<template>
  <el-radio-group v-model="appStore.collapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
</template>
