<template>
    <div class="logo-carousel-wrapper">
        <div class="logo-carousel-content">
            <div class="logo-carousel-header">
                <h1>Mitra Kami</h1>
                <p>Sebuah kebanggaan atas kepercayaan dan dedikasi terbaik</p>
            </div>

            <div class="logo-carousel">
                <button @click="prevPage" :disabled="currentPage === 0">‹</button>

                <div class="logo-container">
                    <div class="logo-slider" :style="{ transform: `translateX(-${currentPage * 100}%)` }">
                        <div class="logo-page" v-for="(page, pageIndex) in pagedLogos" :key="pageIndex">
                            <div class="logo" v-for="(logo, index) in page" :key="index">
                                <img :src="logo" alt="Company Logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <button @click="nextPage" :disabled="currentPage === pagedLogos.length - 1">›</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'

const logos = [
    'https://barqoftech.com/wp-content/uploads/2025/03/NewBarqBigLogo.png',
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=466,fit=crop,q=95/mjE2zOMe3GhvKa6L/ouuuu-YNqJDE4V2wc2EGB0.webp',
    'https://www.malomatia.com/wp-content/uploads/malomatia-logo.png',
    'https://paramountassure.com/wp-content/themes/paramount/images/logo-footer.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/03/hamtinfotech-logo-color.png',

    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=117565&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=LK5oP5g68tui&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',

    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=117565&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=LK5oP5g68tui&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',

    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=117565&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=LK5oP5g68tui&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
    // Add more logos here
]

const currentPage = ref(0)
const logosPerPage = 5

const pagedLogos = computed(() => {
    const pages = []
    for (let i = 0; i < logos.length; i += logosPerPage) {
        pages.push(logos.slice(i, i + logosPerPage))
    }
    return pages
})

function nextPage() {
    if (currentPage.value < pagedLogos.value.length - 1) {
        currentPage.value++
    }
}

function prevPage() {
    if (currentPage.value > 0) {
        currentPage.value--
    }
}
</script>

<style scoped>
/* Full screen wrapper and centering */
.logo-carousel-wrapper {
    height: 50vh;
    /* width: 100vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
}

/* Carousel layout */
.logo-carousel {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    padding: 20px;
}

/* Scroll area */
.logo-container {
    overflow: hidden;
    flex: 1;
}

/* Transition effect */
.logo-slider {
    display: flex;
    transition: transform 0.5s ease;
}

/* Each page (4 logos) */
.logo-page {
    display: flex;
    flex: 0 0 100%;
    justify-content: space-around;
    align-items: center;
}

/* Each logo */
.logo {
    flex: 1;
    padding: 10px;
    text-align: center;
}

.logo img {
    max-width: 120px;
    max-height: 80px;
    object-fit: contain;
}

/* Buttons */
button {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 10px;
}

button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.logo-carousel-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.logo-carousel-header {
    margin-bottom: 20px;
}

.logo-carousel-header h1 {
    font-size: 2rem;
    margin: 0;
}

.logo-carousel-header p {
    font-size: 1rem;
    margin: 0;
    color: #666;
}
</style>