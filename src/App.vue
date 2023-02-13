<script setup>
import LoadingComponent from './views/Loading/LoadingComponent.vue';
import {onMounted, ref } from 'vue'
const loading = ref(false);



  
// window.addEventListener("load", function(event) {
//     loading.value = false;
//   })
</script>

<template>
  <div class="layout_wrapper">
   <router-view></router-view>
   <LoadingComponent v-show="loading"></LoadingComponent>
  </div>
</template>

