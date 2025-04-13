<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="main-content">
    <router-view></router-view>
  </main>
</template>

<style>
@import './assets/main.css';

.main-content {
  margin-top: 70px; /* Adjust based on navbar height */
  min-height: calc(100vh - 70px);
}
</style>
