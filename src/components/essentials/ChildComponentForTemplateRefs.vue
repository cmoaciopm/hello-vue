<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
    a, b
})
</script>

<template>
    <p>
        <label>A is {{ a }}</label>
    </p>
    <p>
        <label>B is {{ b }}</label>
    </p>
    
</template>