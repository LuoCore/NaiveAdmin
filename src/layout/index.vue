<template>
    <n-layout has-sider>
         <n-layout>
 <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
         <n-layout-footer>成府路</n-layout-footer>
         </n-layout>
       
        <n-layout>
            <n-layout-header>颐和园路</n-layout-header>
            <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
        </n-layout>
        
    </n-layout>
</template>
<!-- :native-scrollbar="false" -->
<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NLayoutFooter } from 'naive-ui';
import SiderMenu from '@/layout/menu/siderMenu.vue';
</script>

<style lang="scss" scoped>
.n-layout {
    height: 100%;

    .n-layout-header {
        background-color: blueviolet;
    }
    .n-layout-sider {
        background-color: rgb(27, 167, 223);
    }
    .n-layout-content {
        background-color: darkolivegreen;
    }
    .n-layout-footer {
        background-color: indigo;
    }
}
</style>