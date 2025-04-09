<script setup>
import { ref, reactive, computed } from 'vue';

// Basic example
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})


// Demonstrate wrong usage of computed property
var currentDate = new Date()
const nonreactiveDate = {
    time: currentDate
}
const neverUpdatedComputedProperty = computed(() => nonreactiveDate.time.toLocaleTimeString())
const reactiveDate = reactive({
    time: currentDate
})
const computedProperty = computed(() => reactiveDate.time.toLocaleTimeString())

function refreshDate() {
    currentDate = new Date()
    nonreactiveDate.time = currentDate
    reactiveDate.time = currentDate
}

// Writable computed property
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})

function changeName() {
    fullName.value = "Michael Jackson"
}
</script>

<template>
    <p>Has published books: <span>{{ publishedBooksMessage }}</span> </p>
    <br>

    <p>Wrong usage of computed property</p>
    <label>{{ neverUpdatedComputedProperty }}</label>
    <p>Correct usage of computed property</p>
    <label>{{ computedProperty }}</label>
    <button @click="refreshDate" style="margin-left: 10px">Refresh date</button>

    <p>{{ fullName }} <button @click="changeName">Change the name</button></p>
</template>