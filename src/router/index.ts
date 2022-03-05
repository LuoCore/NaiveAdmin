import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layouts/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        component:Layout,
        // redirect:'/dashboard',
        // children:[
        //     {
        //         path:'/dashboard',
        //         component:()=>import('@/layout/dashboard/index.vue'),
        //         name:'dashboard',
        //         meta:{
        //             title:'首页',
        //             icon:'#HomeOutline'
        //         }
        //     }
        // ]
    }
]
//创建
export  default  createRouter({
    history:createWebHistory(),
    routes
})
