<script lang="ts" setup>
import HumburgerMenu from "./HumburgerMenu.vue";
import UserAvatar from "./UserAvatar.vue";
import ScreenFull from "./ScreenFull.vue";
</script>

<template>
  <div class="navi-bar">
    <div class="left-items">
      <humburger-menu />
    </div>
    <div class="right-items">
      <screen-full class="right-item" />
      <user-avatar class="right-item" />
    </div>
  </div>
</template>
<style scoped>
.navi-bar {
  padding: 0 4px 0 20px;
}

.left-items {
  display: flex;
  line-height: 46px;
  float: left;
}

.right-items {
  display: flex;
  line-height: 46px;
  float: right;
}

.right-item {
  margin-right: 6px;
}
</style>
