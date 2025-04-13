<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="main-content">
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-7245R3C4SW"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-7245R3C4SW");
    </script>

    <router-view></router-view>
  </main>
</template>

<style>
@import "./assets/main.css";

.main-content {
  margin-top: 70px; /* Adjust based on navbar height */
  min-height: calc(100vh - 70px);
}
</style>
