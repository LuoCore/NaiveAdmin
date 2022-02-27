<template>
    <n-layout has-sider>
        <n-layout-sider
            :collapsed-width="64"
            :width="240"
            show-trigger="bar"
            content-style="padding: 24px;"
             style="bottom: 64px"
            bordered
        >
            <n-h2>海淀桥</n-h2>
        </n-layout-sider>
        <n-layout position="absolute" :native-scrollbar="false">
            <n-layout-header style="height: 64px;" bordered>颐和园路</n-layout-header>
            <n-layout-content>平山道</n-layout-content>
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">城府路</n-layout-footer>
    </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NLayoutFooter } from 'naive-ui'

</script>

<style lang="scss" scoped>
.n-layout {
    height: 100%;
    .n-layout-sider{
        background-color: chocolate;
    }
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