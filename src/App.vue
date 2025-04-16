<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <div v-if="isDevelopment" class="dev-banner">
            🚧 Development Mode - Localhost - <a target="_blank" href="https://satunoldigitalsolusi.web.id">Check Live Site</a>
        </div>

        <!-- Navbar -->
        <nav class="navbar">
            <div class="navbar-container">
                <div class="logo">SatuNol</div>
                <button class="menu-toggle" @click="toggleMenu">
                    <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
                </button>
                <ul :class="['nav-links', { open: isMenuOpen }]">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/portfolio">Portfolio</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/shop">Shop</router-link></li>
                </ul>
            </div>
        </nav>

        <!-- WhatsApp button -->
        <a href="https://wa.me/085177778888?text=Halo, Saya ingin tanya layanan anda!" target="_blank"
            class="whatsapp-button" aria-label="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>

        <!-- Include the GTranslate component -->
        <GTranslate />

        <router-view />
    </div>
</template>

<script>
import GTranslate from './components/GTranslate.vue';

export default {
    name: "App",
    components: {
        GTranslate
    },
    computed: {
        isDevelopment() {
            return process.env.NODE_ENV === 'development';
        }
    },
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>


<style>
.dev-banner {
    background-color: #ff9800;
    color: white;
    text-align: center;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

body {
    padding-top: 40px;
    /* Offset for the fixed banner */
}

/* navbar */
.navbar {
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: auto;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links li a:hover {
    color: #ff5722;
}

/* Responsive for mobile */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background-color: white;
        display: none;
        gap: 0;
        padding: 10px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links li {
        text-align: center;
        padding: 10px 0;
    }
}
</style>