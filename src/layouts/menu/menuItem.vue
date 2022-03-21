<template>
    <menuLogo :collapsed="props.collapsed"></menuLogo>
    <n-menu
        :collapsed="props.collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="20"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
    />
</template>
<script setup lang="ts">
import {  h } from 'vue';
import { RouterLink } from 'vue-router'
import { NIcon, NMenu, useMessage } from 'naive-ui';
import type { MenuOption } from 'naive-ui'
import menuLogo from './menuLogo.vue';
import { renderIcon, renderIcon2 } from '@/utils/Icons'

// import {
//     BookOutline as BookIcon,
//     PersonOutline as PersonIcon,
//     WineOutline as WineIcon
// } from '@vicons/ionicons5'
// const message = useMessage();
// const handleUpdateValue = (key: string, item: MenuOption) => {
//     message.info('[onUpdate:value]: ' + JSON.stringify(key))
//     message.info('[onUpdate:value]: ' + JSON.stringify(item))
// };

const props = defineProps({ collapsed: { type: Boolean } })


const menuOptions: MenuOption[] = [
    {
        whateverLabel: '首页',
        whateverKey: 'a-wild-sheep-chase',
        icon: renderIcon2('Home'),

    },
    {
        whateverLabel: '1973年的弹珠玩具',
        whateverKey: 'pinball-1973',
        icon: renderIcon2('BookOutline'),
        whateverChildren: [
            {
                 whateverLabel: '输入',
                renderLabel: () => {
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/views/system/user/index.vue'
                            }
                        }
                    )
                },
                whateverKey: 'rat',
            }
        ]
    },
    {
        whateverLabel: '舞，舞，舞',
        whateverKey: 'dance-dance-dance',
        icon: renderIcon2('BookOutline'),
        whateverChildren: [
            {
                type: 'group',
                whateverLabel: '人物',
                whateverKey: 'people',
                whateverChildren: [
                    {
                        whateverLabel: '叙事者',
                        whateverKey: 'narrator',
                        icon: renderIcon2('BookOutline')
                    },
                    {
                        whateverLabel: '羊男',
                        whateverKey: 'sheep-man',
                        icon: renderIcon2('BookOutline')
                    }
                ]
            },
            {
                whateverLabel: '饮品',
                whateverKey: 'beverage',
                icon: renderIcon2('BookOutline'),
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