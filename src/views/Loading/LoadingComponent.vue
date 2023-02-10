<template>
   <div>
    <div class="loading_container">
        <!-- <Icon icon="svg-spinners:bars-rotate-fade" width="90" color="#F9A226" /> -->
        <div class="lds-dual-ring"></div>
    </div>
   </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>

<style lang="scss" scoped>
    .loading_container{
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 9999;
        min-width: 100vw !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        min-height: 100vh !important;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid #F9A226;
  border-color: #F9A226 transparent #F9A226 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


    }
</style>