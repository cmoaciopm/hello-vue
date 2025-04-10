<script setup>
const props = defineProps({
    index: Number,
    item: Object
})
</script>

<template>
    <p>Item {{ index }}: {{ item.message }}</p>
    <li v-for="child in item.children">{{ child }}</li>
</template>