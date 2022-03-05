<template>
    <div class="logo">
        <n-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
        <span v-show="!props.collapsed" class="title">NaiveAdmin</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, vShow } from 'vue'
import { NImage } from 'naive-ui';
const props = defineProps({
    collapsed: Boolean
});
console.log("小和尚："+props.collapsed);
</script>

<style lang="scss" scoped>
.logo {
    background-color: chocolate;
    height: 50px;
    border: none;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    color: #fff;
    .n-image {
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
    span {
        font-weight: 600;
        line-height: 50px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        vertical-align: middle;
    }
}
</style>