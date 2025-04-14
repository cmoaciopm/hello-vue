import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BasicExamples from './components/BasicExamples.vue'
import Essentials from './components/Essentials.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

import HelloWorld from './components/basic/HelloWorld.vue'
import HandlingUserInput from './components/basic/HandlingUserInput.vue'
import AttributeBindings from './components/basic/AttributeBindings.vue'
import ConditionalAndLoops from "./components/basic/ConditionalAndLoops.vue"
import FormBindings from './components/basic/FormBindings.vue'
import SimpleComponent from './components/basic/SimpleComponent.vue'

import TemplateSyntax from './components/essentials/TemplateSyntax.vue'
import ReactivityFundamentals from './components/essentials/ReactivityFundamentals.vue'
import ComputedProperties from './components/essentials/ComputedProperties.vue'
import ClassAndStyleBindings from './components/essentials/ClassAndStyleBindings.vue'
import ConditionalRendering from './components/essentials/ConditionalRendering.vue'
import ListRendering from './components/essentials/ListRendering.vue'
import EventHandling from './components/essentials/EventHandling.vue'
import FormInputBindings from './components/essentials/FormInputBindings.vue'
import Watchers from './components/essentials/Watchers.vue'
import TemplateRefs from './components/essentials/TemplateRefs.vue'

const routes = [
  { path: '/basic', component: BasicExamples },
  { path: '/practical', component: BasicExamples },
  { path: '/essentials', component: Essentials },

  { path: '/basic/hello_world', component: HelloWorld },
  { path: '/basic/handling_user_input', component: HandlingUserInput },
  { path: '/basic/attribute_bindings', component: AttributeBindings},
  { path: '/basic/conditional_and_loops', component: ConditionalAndLoops},
  { path: '/basic/form_bindings', component: FormBindings },
  { path: '/basic/simple_component', component: SimpleComponent },

  { path: '/essentials/template_syntax', component: TemplateSyntax},
  { path: '/essentials/reactivity_fundamentals', component: ReactivityFundamentals},
  { path: '/essentials/computed_properties', component: ComputedProperties},
  { path: '/essentials/class_and_style_bindings', component: ClassAndStyleBindings},
  { path: '/essentials/conditional_rendering', component: ConditionalRendering},
  { path: '/essentials/list_rendering', component: ListRendering},
  { path: '/essentials/event_handling', component: EventHandling},
  { path: '/essentials/form_input_bindings', component: FormInputBindings},
  { path: '/essentials/watchers', component: Watchers},
  { path: '/essentials/template_refs', component: TemplateRefs},
]
  
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
