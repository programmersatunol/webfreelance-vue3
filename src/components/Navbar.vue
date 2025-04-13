<template>
  <nav class="navbar" :class="{ 'navbar-active': isMenuOpen }">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">
        YourLogo
      </router-link>

      <div class="navbar-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <ul class="navbar-menu" :class="{ 'active': isMenuOpen }">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link" @click="closeMenu">Home</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/about" class="navbar-link" @click="closeMenu">About</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/services" class="navbar-link" @click="closeMenu">Services</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/portfolio" class="navbar-link" @click="closeMenu">Portfolio</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/contact" class="navbar-link" @click="closeMenu">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navbar-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #007bff;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.active {
    display: flex;
  }

  .navbar-item {
    text-align: center;
  }
}
</style>