<script setup lang="ts">
import SideMenu from "./components/SideMenu.vue";
import HeaderMenu from "./components/HeaderMenu.vue";

</script>
<template>
    <div class="top-layout">
        <el-container>
            <el-aside><side-menu /></el-aside>
            <el-container>
                <el-header>
                    <header-menu />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<style scoped>
.top-layout {
    width: 100%;
    height: 100%;
}

.el-aside {
    width: unset !important;
}

.el-container {
    width: 100%;
    height: 100%;
}
</style>