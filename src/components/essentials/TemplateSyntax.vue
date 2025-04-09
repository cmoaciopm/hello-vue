<script setup>
import { ref } from 'vue'

const msg = ref('Hello template!')
const rawHtml = ref('<span style="color:red">This should be red.</span>')
const isButtonDisabled = ref(false)
const isButtonDisabled2 = ref(true)
const isButtonDisabled3 = ref('')
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper',
    style: 'background-color: green'
}

const currentDate = new Date()
const currentDateStr = currentDate.toLocaleDateString()

function formatDate(date) {
    return date.toLocaleString()
}

function toTitleDate(date) {
    return 'Current time'
}

const attributeName = ref('href')
const attributeValue = "https://www.google.com"

// Value null can be used to explicitly remove the binding
const attributeName2 = null
const attributeValue2 = "https://www.google.com"
</script>

<template>
    <span>Message: {{ msg }}</span>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <button :disabled="isButtonDisabled">Button</button>
    <button :disabled="isButtonDisabled2">Button2</button>
    <button :disabled="isButtonDisabled3">Button3</button>
    <div v-bind="objectOfAttrs">Object of attributes</div>

    <time :title="toTitleDate(date)" :datetime="currentDateStr">Current time: {{ formatDate(currentDate) }}</time>
    <br>
    <a :[attributeName]="attributeValue" :[attributeName2]="attributeValue2">Link with dynamic argument</a>
</template>

<style scoped>
.wrapper {
    color: red
}
</style>