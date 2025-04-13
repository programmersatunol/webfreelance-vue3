<script setup>
import Navbar from './components/Navbar.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <Navbar />
  <main class="main-content">
    <router-view></router-view>
  </main>
  <WhatsAppButton phoneNumber="1234567890" message="Hello! I'd like to know more about your services." />
</template>

<style>
@import './assets/main.css';

.main-content {
  margin-top: 70px; /* Adjust based on navbar height */
  min-height: calc(100vh - 70px);
}
</style>
