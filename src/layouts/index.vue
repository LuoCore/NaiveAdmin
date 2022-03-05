<template>
    <n-layout has-sider>
       <SiderMenu></SiderMenu>
        <n-layout >
            <n-layout-header position="absolute">颐和园路</n-layout-header>
            <n-layout-content content-style="margin: 24px; 0px" :native-scrollbar="false">
             height: 100%;
            </n-layout-content>
            <n-layout-footer position="absolute">成府路</n-layout-footer>
        </n-layout>
    </n-layout>
</template>
<!-- :native-scrollbar="false" -->
<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NLayoutFooter } from 'naive-ui';
import SiderMenu from '@/layouts/menu/siderMenu.vue';
</script>

<style lang="scss" scoped>
.n-layout {
  height: 100%;
    .n-layout-header {
        background: rgba(75, 34, 224, 0.2);
    }
    .n-layout-footer {
        background: rgba(238, 101, 169, 0.2);
    }

    .n-layout-sider {
        background: rgba(189, 59, 59, 0.3);
    }

    .n-layout-content {
        background: rgba(168, 218, 224, 0.4);
    }
}
</style>