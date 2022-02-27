import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        component:Layout
    }
]
//创建
export  default  createRouter({
    history:createWebHistory(),
    routes
})
