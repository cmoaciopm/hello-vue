<script setup>
import { watchEffect } from 'vue';
import {ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
    if(newQuestion.includes('?')) {
        loading.value = true
        answer.value = "Thinking..."
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch(error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

const x = ref(0)
const y = ref(0)
watch(x, (newX) => {
    console.log(`x is ${newX}`)
})

watch(
    () => x.value + y.value,
    (sum) => {
        console.log(`sum of x+y is: ${sum}`)
    }
)

watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`)
})

// Demonstrate watching reactive object replacement
const obj = ref(reactive({ count: 0 }))
watch(obj, (newValue, oldValue) => {
    if (newValue == oldValue) {
        // Will never go with this path based on current implementation
        console.log('Object reference is not changed.')
    } else {
        console.log(`Object reference changed. Old count: ${oldValue.count}, New count: ${newValue.count}`)
    }
})

function increaseBy1() {
    obj.value.count++
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function updateWithNewObject() {
    var randomNumber = getRandomInt(1, 10)
    obj.value = reactive({ count: randomNumber})
}

// Demonstrate the deep watch
let obj2 = reactive({ count: 0 })
watch(obj2, (newValue, oldValue) => {
    if (newValue == oldValue) {
        console.log(`Object reference is not changed. Old count: ${oldValue.count}, New count: ${newValue.count}`)
    } else {
        // Will never go with this path based on current implementation
        console.log('Object reference changed.')
    }
})
function increaseBy1ForObj2() {
    obj2.count++
}
function updateWithNewObjectForObj2() {
    var randomNumber = getRandomInt(1, 10)
    obj2 = ref({ count: randomNumber})
}

// Demonstrate the eager watcher
const testForEagerWatcher = ref(0)
watch(
    testForEagerWatcher,
    (newValue) => {
        console.log(`testForEagerWatcher is ${newValue}`)
    },
    { immediate: true}
)

// Demonstrate the once watcher
const testForOnceWatcher = ref(0)
watch(
    testForOnceWatcher,
    (newValue) => {
        console.log(`testForOnceWatcher is ${newValue}`)
    },
    { once: true}
)

// Demonstrate the watchEffect with sync callback
const reactiveVar1 = ref(0)
const reactiveVar2 = ref('')
const reactiveVar3 = ref(false)
watchEffect(() => {
    console.log(`watchEffect callback is invoked. var1 is ${reactiveVar1.value}, var2 is ${reactiveVar2.value}, var3 is ${reactiveVar3.value}`)
})

function changeReactiveVar1() {
    reactiveVar1.value++
}
function changeReactiveVar2() {
    reactiveVar2.value += 'a'
}
function changeReactiveVar3() {
    reactiveVar3.value = !reactiveVar3.value
}

// Demonstrate the watchEffect with async callback
const todoId = ref(1)
const data = ref(null)
const anotherReactiveVar = ref(10)
/*
watch(
    todoId,
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
        data.value = await response.json()
    },
    { immediate: true }
)
*/
function increaseTodoId() {
    todoId.value++
}

function resetData() {
    data.value = null
}

function increaseAnotherReactiveVariable() {
    anotherReactiveVar.value++
}

watchEffect(async () => {
    // When using watchEffect with an async callback,
    // only properties accessed before the first await tick will be tracked.
    // Here both anotherReactiveVar and todoId will be tracked
    console.log(`Another reactive variable is ${anotherReactiveVar.value}`)
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
})
</script>

<template>
    <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading"/>
    </p>
    <p>{{ answer }}</p>

    <hr>
    <p>
        <input v-model.number="x"/>
        <input v-model.number="y"/>
    </p>

    <hr>
    <p>"Add 1" will not trigger the watcher. While "Update with new object" can trigger the watcher. See console logs.</p>
    <button @click="increaseBy1">Add 1</button>
    <button @click="updateWithNewObject">Update with new object</button>

    <hr>
    <button @click="increaseBy1ForObj2">Add 1</button>
    <button @click="updateWithNewObjectForObj2">Update with new object</button>

    <hr>
    <button @click="testForEagerWatcher++">Add 1 to test eager watcher</button>

    <hr>
    <button @click="testForOnceWatcher++">Add 1 to test once watcher</button>

    <hr>
    <p>All dependencies in sync callback will be tracked by watchEffect</p>
    <button @click="changeReactiveVar1">Change reactive var1</button>
    <button @click="changeReactiveVar2">Change reactive var2</button>
    <button @click="changeReactiveVar3">Change reactive var3</button>

    <hr>
    <p>Only dependencies before the first "await" in async callback will be tracked by watchEffect</p>
    <button @click="increaseTodoId">Increase todo ID</button>
    <label>{{ data }}</label>
    <p>
        <button @click="resetData">Reset the data</button>
        <button @click="increaseAnotherReactiveVariable">Increase another reactive variable</button>
    </p>
</template>