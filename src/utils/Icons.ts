import { h,  Component } from 'vue';
import { NIcon, NTag } from 'naive-ui';
import * as ionicons5 from '@vicons/ionicons5'

export function renderIcon(icon: Component) {
    console.log(h(icon));
    return () => h(NIcon, null, { default: () => h(icon) })
}

export function renderIcon2(key: String) {
    console.log(h(key));
    return () => h(NIcon, null, { default: () => h(ionicons5[key as keyof typeof ionicons5]) })
}

