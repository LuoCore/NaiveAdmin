import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layouts/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        name:"home",
        component:Layout,
        redirect:"/dashboard",
        children:[
            {
                path:"/dashboard",
                component:()=>import('@/layouts/dashboard/index.vue'),
                name:"dashboard",
                meta:{
                    title:"首页",
                    icon:"HomeOutline"
                }
            }
        ]
    },
    {
        name:"system",
        path:"/system",
        component:Layout,
        meta:{
            title:"系统管理",
            icon:"HomeOutline",
            roles:["sys:manage"],
            parentId:0
        },
        children:[
            {
                path:"/user",
                component:()=>import('@/views/system/user/index.vue'),
                name:"用户信息",
                meta:{
                    title:"用户管理",
                    icon:"HomeOutline",
                    roles:["sys:user"]
                }
            }
        ]

    }
]
//创建
export  default  createRouter({
    history:createWebHistory(),
    routes
})
