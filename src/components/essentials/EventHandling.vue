<script setup>
import { ref } from 'vue'

const count = ref(0)
const name = ref('Vue.js')

function greet(event) {
    alert(`Hello ${name.value}`)
    if(event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function warn(message, event) {
    if(event) {
        event.preventDefault()
    }
    alert(message)
}

const inputText = ref("")
function submit() {
    alert('submit the input')
    inputText.value = ""
}

function onArrowDown(event) {
    alert(event.key  + ' is pressed')
}

const textUsedForClear = ref("")
function clear() {
    textUsedForClear.value = ""
}

function onClick() {
    alert('Button is clicked')
}

function mouseMainClicked() {
    alert('Main button on mouse is pressed')
}

function mouseSecondaryClicked(event) {
    if(event) {
        event.preventDefault()
    }
    alert('Secondary button on mouse is pressed')
}

function mouseMiddleClicked() {
    alert('Middle button on mouse is pressed')
}

</script>

<template>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
    <button @click="greet">Greet</button>

    <hr>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>

    <hr>
    <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

    <hr>
    <a @click.stop="doThis">The link won't be responded</a>
    <a @click.stop.prevent="doThat">The link won't be responded</a>
    <a @click.once="greet">This link will be triggered at most once</a>
    <form @submit.prevent="onSubmit"></form>
    <form @submit.prevent></form>
    <div @click.self="doThat">...</div>
    <div @click.capture="doThis">...</div>
    <div @scroll.passive="onScroll">...</div>

    <hr>
    <input placeholder="Press enter to submit" @keyup.enter="submit" v-model="inputText"/>
    <input placeholder="Try pressing the ArrowDown key" @keyup.arrow-down="onArrowDown($event)"/>
    
    <hr>
    <input placeholder="Press alt+enter to clear" @keyup.alt.enter="clear" v-model="textUsedForClear"/>
    <label @click.alt="greet">Press click+alt to greet</label>

    <hr>
    <!-- this will fire even if Ctrl or Shift is also pressed -->
    <button @click.alt="onClick">Button 1</button>
    <!-- this will only fire when Alt and no other keys are pressed -->
    <button @click.alt.exact="onClick">Button 2</button>
    <!-- this will only fire when no system modifiers are pressed -->
    <button @click.exact="onClick">Button 3</button>

    <hr>
    <button @click.left="mouseMainClicked">Button 1</button>
    <button @click.right="mouseSecondaryClicked">Button 2</button>
    <button @click.middle="mouseMiddleClicked">Button 3</button>
</template>