<script setup>
import { ref, reactive, computed } from 'vue'
import MyComponent from './MyComponent.vue'
import MyComponent2 from './MyComponent2.vue'

const isActive = ref(true)
const isInactive = ref(true)
const hasError = ref(false)
const error = ref(null)

const classObject = reactive({
    active: true,
    'text-danger': false
})

const computedClassObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type == 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)
const styleObject = reactive({
    color: 'red',
    fontSize: '30px'
})
const overridingStyleObject = reactive({
    color: 'green'
})
</script>

<template>
    <div :class="{ active: isActive, 'text-danger': hasError}">Active text</div>
    <div :class="classObject">Active text</div>
    <div :class="computedClassObject">Active text</div>
    <div :class="isActive ? activeClass : ''">Active text</div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError}">Static active text</div>

    <div :class="{ inactive: isInactive}">Inactive text</div>

    <div :class="[activeClass, errorClass]">Active error text</div>
    <div :class="[isActive ? activeClass : '', errorClass]">Active error text</div>
    <div :class="[{ [activeClass]: isActive}, errorClass]">Active error text</div>

    <MyComponent class="baz boo"/>
    <MyComponent :class="{ active: isActive }"/>
    <MyComponent2 class="baz"/>

    <div :style="{ color: activeColor, fontSize: fontSize + 'px'}">Inline style text</div>
    <div :style="{ 'font-size': fontSize + 'px'}">Inline style text</div>
    <div :style="styleObject">Inline style text</div>
    <h1 style="color: red" :style="'font-size: 1em'">hello</h1>
    <div :style="[styleObject, overridingStyleObject]">hello</div>

    <div :style="{ display: ['-webkit-box', 'flex', '-ms-flexbox']}"></div>
</template>

<style scoped>
.active {
    font-weight: bold;
    color: black;
}

.inactive {
    color: grey;
}

.text-danger {
    color: red;
}

.static {
    font-style: italic;
}
</style>