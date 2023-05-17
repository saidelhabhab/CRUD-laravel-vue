import './bootstrap';

import Alpine from 'alpinejs';

// import Vue from 'vue'
 
import { createApp } from 'vue' 
import PostsIndex from './components/Posts/Index.vue' 

window.Alpine = Alpine;

Alpine.start();


 
createApp({}) 
    .component('PostsIndex', PostsIndex)
    .mount('#app') 