<script setup>
import { ref } from 'vue'
import ButtonCounter from './ButtonCounter.vue'
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue'
import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'

const posts = ref([
    { id: 1, title: "My journey with Vue"},
    { id: 2, title: "Blogging with Vue"},
    { id: 3, title: "Why Vue is so fun"},
])

const postFontSize = ref(1)

const currentTab = ref('Home')
const tabs = {
    'Home': Home,
    'Posts': Posts,
    'Archive': Archive
}

</script>

<template>
    <h1>Here is a child component!</h1>
    <ButtonCounter/>

    <hr>
    <h1>Here are many child components!</h1>

    <hr>
    <ButtonCounter/>
    <ButtonCounter/>
    <ButtonCounter/>

    <hr>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            @enlarge-text="postFontSize += 0.1"
            />
    </div>

    <hr>
    <AlertBox>Something bad happened.</AlertBox>

    <hr>
    <div class="demo">
        <button
            v-for="(_, tab) in tabs"
            :key = "tab"
            :class="['tab-button', { active: currentTab === tab}]"
            @click="currentTab = tab">
            {{ tab }}
        </button>
        <component :is="tabs[currentTab]" class="tab"></component>
    </div>
</template>

<style scoped>
.demo {
    font-family: sans-serif;
    border: 1px solod #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
}

.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solod #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button.hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solod #ccc;
    padding: 10px;
}
</style>