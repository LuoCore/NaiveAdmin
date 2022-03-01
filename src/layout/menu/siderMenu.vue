<template>
<div>
        style="bottom: 64px">
<n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        content-style="padding: 24px;"
        show-trigger="bar"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            key-field="whateverKey"
            label-field="whateverLabel"
            children-field="whateverChildren"
        />
    </n-layout-sider>
</div> 
    
</template>
<script setup lang="ts">
import { h, ref, Component } from 'vue';
import { NIcon,NLayout, NLayoutSider, NMenu } from 'naive-ui';
import type { MenuOption } from 'naive-ui'
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
}  from '@vicons/ionicons5'
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const collapsed = ref(false);
const menuOptions: MenuOption[] = [
   
    {
        whateverLabel: '寻羊冒险记',
        whateverKey: 'a-wild-sheep-chase',
        icon: renderIcon(BookIcon)
    },
     {
        whateverLabel: '1973年的弹珠玩具',
        whateverKey: 'pinball-1973',
        icon: renderIcon(BookIcon),
        whateverChildren: [
            {
                whateverLabel: '鼠',
                whateverKey: 'rat'
            }
        ]
    },
    {
        whateverLabel: '舞，舞，舞',
        whateverKey: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        whateverChildren: [
            {
                type: 'group',
                whateverLabel: '人物',
                whateverKey: 'people',
                whateverChildren: [
                    {
                        whateverLabel: '叙事者',
                        whateverKey: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        whateverLabel: '羊男',
                        whateverKey: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                whateverLabel: '饮品',
                whateverKey: 'beverage',
                icon: renderIcon(WineIcon),
                whateverChildren: [
                    {
                        whateverLabel: '威士忌',
                        whateverKey: 'whisky'
                    }
                ]
            },
            {
                whateverLabel: '食物',
                whateverKey: 'food',
                whateverChildren: [
                    {
                        whateverLabel: '三明治',
                        whateverKey: 'sandwich'
                    }
                ]
            },
            {
                whateverLabel: '过去增多，未来减少',
                whateverKey: 'the-past-increases-the-future-recedes'
            }
        ]
    }
]
</script>

<style lang="scss" scoped>

.n-layout-sider {
    background-color: rgb(199, 151, 118);
}
</style>