import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BasicExamples from './components/BasicExamples.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import HelloWorld from './components/basic/HelloWorld.vue'
import HandlingUserInput from './components/basic/HandlingUserInput.vue'
import AttributeBindings from './components/basic/AttributeBindings.vue'
import ConditionalAndLoops from "./components/basic/ConditionalAndLoops.vue"

const routes = [
  { path: '/basic', component: BasicExamples },
  { path: '/practical', component: BasicExamples },
  { path: '/basic/hello_world', component: HelloWorld },
  { path: '/basic/handling_user_input', component: HandlingUserInput },
  { path: '/basic/attribute_bindings', component: AttributeBindings},
  { path: '/basic/conditional_and_loops', component: ConditionalAndLoops},
]
  
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
