<script setup>
import { ref, reactive, computed } from 'vue'
import MyComponent3 from './MyComponent3.vue'

const parentMessage = ref('Parent')
const items = ref([
    { message: 'Foo', children: ['Child 1 of Foo', 'Child 2 of Foo']},
    { message: 'Bar', children: ['Child 1 of Bar', 'Child 2 of Bar', 'Child 3 of Bar']},
])

const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})

const array = [
    { message: 'Foo'},
    { message: 'Fool'},
    { message: 'Full'},
    { message: 'Fuel'},
    { message: 'Few'},
    { message: 'Kong Fu'},
    { message: "I'm not a Foo"}
]
const itemsForFilter = ref(array)

function filterFoo() {
    itemsForFilter.value = itemsForFilter.value.filter((item) => item.message.match(/Foo/))
}

function unsetFilter() {
    itemsForFilter.value = array
}

const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])
function even(numbers) {
    return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
    <li v-for="item in items">{{ item.message }}</li>

    <hr>
    <li v-for="item of items">{{ item.message }}</li>

    <hr>
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

    <hr>
    <li v-for="{ message } in items"> {{ message }}</li>

    <hr>
    <li v-for="({ message }, index) in items">
        {{ message }} {{ index }}
    </li>

    <hr>
    <li v-for="item in items">
        <span v-for="childItem in item.children">
            {{ item.message }} {{ childItem }}
        </span>
    </li>

    <hr>
    <li v-for="value in myObject">
        {{ value }}
    </li>

    <hr>
    <li v-for="(value, key) in myObject">
        {{ key }}: {{ value }}
    </li>

    <hr>
    <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
    </li>

    <hr>
    <span v-for="n in 10">{{ n }}</span>

    <hr>
    <ul>
        <template v-for="item in items">
            <li>{{ item.message }}</li>
            <li class="divider" role="presentation"></li>
        </template>
    </ul>

    <hr>
    <ul>
        <template v-for="item in items" :key="item.message">
            <li>{{ item.message }}</li>
        </template>
    </ul>

    <hr>
    <template v-for="item in items">
        <li v-if="item.children.length > 2">
            {{ item.message }}
        </li>
    </template>

    <hr>
    <MyComponent3
        v-for="(item, index) in items"
        :key="item.message"
        :index="index"
        :item="item"/>

    <hr>
    <button @click="filterFoo">Filter items which match "Foo"</button>
    <button @click="unsetFilter">Unset the filter</button>
    <li v-for="item in itemsForFilter">{{ item.message }}</li>

    <hr>
    <li v-for="n in evenNumbers">{{ n }}</li>

    <hr>
    <ul v-for="numbers in sets">
        <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>
</template>

<style scoped>
span {
    display: block;
}
</style>