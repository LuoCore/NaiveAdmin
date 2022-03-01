<template>
    <n-layout has-sider>
        <sider-menu></sider-menu>
        <n-layout position="absolute" :native-scrollbar="false">
            <n-layout-header style="height: 64px;" bordered>颐和园路</n-layout-header>
            <n-layout-content>平山道</n-layout-content>
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">城府路</n-layout-footer>
    </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NLayoutFooter } from 'naive-ui';
import SiderMenu from '@/layout/menu/siderMenu.vue';
</script>

<style lang="scss" scoped>
.n-layout {
    height: 100%;
    
    .n-layout-header{
        background-color: blueviolet;
    }
    .n-layout-content{
        background-color: darkolivegreen;
    }
    .n-layout-footer{
        background-color: indigo;
    }
}
</style>