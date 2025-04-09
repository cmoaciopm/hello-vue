<script setup>
import { nextTick } from 'vue'
import { ref } from 'vue'
import { reactive } from 'vue'

const count = ref(0)

console.log(count)
console.log(typeof(count))
console.log(count.value)

count.value++
console.log(count.value)

function increment() {
    count.value++
}

async function increment_async() {
    console.log('Ready to update the count')
    count.value++
    await nextTick()
    console.log('Count update is done')
}

const state = reactive({ count: 0})

</script>

<template>
    <p>Synchronized updating the count</p>
    <button @click="count++">{{ count }}</button>
    <button @click="increment">{{ count }}</button>

    <p>Asynchronized updating the count</p>
    <button @click="increment_async">{{ count }}</button>

    <p>Button backed by reactive state</p>
    <button @click="state.count++">{{ state.count }}</button>
</template>