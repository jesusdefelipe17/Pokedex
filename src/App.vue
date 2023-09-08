<!-- App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component"/>
      </transition>
     </router-view>
  </div>
</template>

<style>

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

</style>

<script setup>

import NavBar from './components/Navbar.vue'

</script>