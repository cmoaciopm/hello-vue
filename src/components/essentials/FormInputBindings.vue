<script setup>
import { ref } from 'vue'

const text = ref('')
const message = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])

const selectedForDynamicalRendering = ref('A')
const options = ref([
    { text: 'One', value: 'A'},
    { text: 'Two', value: 'B'},
    { text: 'Three', value: 'C'},
])

const toggle = ref('no')
const dynamicTrueValue = '1'
const dynamicFalseValue = '0'

const pick = ref('')
const first = 'first'
const second = 'second'

const selectedForBindingObject = ref(null)

const msg = ref('')

const age = ref('')
function showType() {
    alert('Type is ' + typeof(age.value))
}

const autoTrimedMsg = ref('')
function checkMessage() {
    alert('Your input is "' + autoTrimedMsg.value + '"')
}
</script>

<template>
    <input placeholder="Not using v-model" :value="text" @input="event => text = event.target.value"/>
    <input placeholder="Using v-model" v-model="text"/>
    <label>Your input: {{ text }}</label>

    <hr>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me"/>

    <hr>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <hr>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{ checked }}</label>

    <hr>
    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
    <label for="mike">Mike</label>

    <hr>
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked"/>
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked"/>
    <label for="two">Two</label>

    <hr>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <hr>
    <div>Selected: {{ multiSelected }}</div>
    <select v-model="multiSelected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <hr>
    <div>Selected: {{ selectedForDynamicalRendering }}</div>
    <select v-model="selectedForDynamicalRendering">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>

    <hr>
    <div>Toggle value: {{ toggle }}</div>
    <input type="checkbox" v-model="toggle"
        id="staticCheckbox"
        true-value="yes" false-value="no"/>
    <label for="staticCheckbox">yes/no</label>
    <input type="checkbox" v-model="toggle"
        id="dynamicCheckbox"
        :true-value="dynamicTrueValue" :false-value="dynamicFalseValue"/>
    <label for="dynamicCheckbox">1/0</label>

    <hr>
    <div>Pick value: {{ pick }}</div>
    <input type="radio" v-model="pick" :value="first" id="first"/>
    <label for="first">Option 1</label>
    <input type="radio" v-model="pick" :value="second" id="second"/>
    <label for="second">Option 2</label>

    <hr>
    <div>Selected: {{ selectedForBindingObject }}</div>
    <select v-model="selectedForBindingObject">
        <option :value="{ number: 123}">123</option>
        <option :value="{ number: 456}">456</option>
    </select>

    <hr>
    <div>! Message will be changed after "change" event</div>
    <div> Message is: "{{ msg }}"</div>
    <input v-model.lazy="msg"/>

    <hr>
    <div>Age is: {{ age }}</div>
    <input v-model.number="age"/>
    <button @click="showType">Show input type</button>

    <hr>
    <div>! Message will be trimed automatically</div>
    <div> Message is: "{{ autoTrimedMsg }}"</div>
    <input v-model.trim="autoTrimedMsg"/>
</template>

<style scoped>
select[multiple] {
    width: 100px;
}
</style>