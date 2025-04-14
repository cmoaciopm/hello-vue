<script setup>
import { ref, useTemplateRef, onMounted } from 'vue';
import ChildComponentForTemplateRefs from './ChildComponentForTemplateRefs.vue';

const input = useTemplateRef('my-input')
const list = ref(['Red', 'Yellow', 'Blue'])
const itemRefs = useTemplateRef('items')
const childRef = useTemplateRef('child')

onMounted(() => {
    input.value.focus()

    for (let i = 0; i < itemRefs.value.length; i++) {
        console.log(`Item ${i} is ${itemRefs.value[i]}, content is ${itemRefs.value[i].textContent}`)
    }

    console.log(`Values from child component: a=${childRef.value['a']}, b=${childRef.value['b']}`)
})
</script>

<template>
    <input ref="my-input"/>

    <ul>
        <li v-for="item in list" ref="items">
            {{ item }}
        </li>
    </ul>

    <ChildComponentForTemplateRefs ref="child"/>
</template>