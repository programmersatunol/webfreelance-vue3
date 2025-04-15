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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const logos = [
  'https://barqoftech.com/wp-content/uploads/2025/03/NewBarqBigLogo.png',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=466,fit=crop,q=95/mjE2zOMe3GhvKa6L/ouuuu-YNqJDE4V2wc2EGB0.webp',
  'https://www.malomatia.com/wp-content/uploads/malomatia-logo.png',
  'https://paramountassure.com/wp-content/themes/paramount/images/logo-footer.png',
  'https://hamtinfotech.com/wp-content/uploads/2025/03/hamtinfotech-logo-color.png',
  'https://img.icons8.com/?size=100&id=115213&format=png&color=000000',
  'https://img.icons8.com/?size=100&id=117565&format=png&color=000000',
  'https://img.icons8.com/?size=100&id=LK5oP5g68tui&format=png&color=000000',
  'https://img.icons8.com/?size=100&id=115213&format=png&color=660D0D',
  'https://img.icons8.com/?size=100&id=115213&format=png&color=20C997',
]

const currentPage = ref(0)
const logosPerPage = ref(5) // Default for desktop

const pagedLogos = computed(() => {
  const pages = []
  for (let i = 0; i < logos.length; i += logosPerPage.value) {
    pages.push(logos.slice(i, i + logosPerPage.value))
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

// Responsive logic
function updateLogosPerPage() {
  logosPerPage.value = window.innerWidth <= 768 ? 1 : 5
}

onMounted(() => {
  updateLogosPerPage()
  window.addEventListener('resize', updateLogosPerPage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLogosPerPage)
})
</script>


<style scoped>
/* Full screen wrapper and centering */
.logo-carousel-wrapper {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    padding: 20px;
}

/* Centered content layout */
.logo-carousel-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}

/* Header section */
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

/* Carousel layout */
.logo-carousel {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 10px;
}

/* Scroll container */
.logo-container {
    overflow: hidden;
    flex: 1;
}

/* Scrolling slider */
.logo-slider {
    display: flex;
    transition: transform 0.5s ease;
}

/* Each page (set of logos) */
.logo-page {
    display: flex;
    flex: 0 0 100%;
    justify-content: space-around;
    align-items: center;
}

/* Logo styling */
.logo {
    flex: 1;
    padding: 10px;
    text-align: center;
}

.logo img {
    max-width: 100px;
    max-height: 70px;
    object-fit: contain;
}

/* Navigation buttons */
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

/* Responsive styles for mobile */
@media (max-width: 768px) {
    .logo-carousel-wrapper {
        height: auto;
        padding: 40px 10px;
    }

    .logo-carousel-header h1 {
        font-size: 1.5rem;
    }

    .logo-carousel-header p {
        font-size: 0.9rem;
    }

    .logo-carousel {
        flex-direction: column;
    }

    .logo-page {
        flex-wrap: wrap;
        gap: 10px;
    }

    .logo {
        flex: 0 0 50%;
        /* Show 2 logos per row on mobile */
        padding: 10px 5px;
    }

    .logo img {
        max-width: 80px;
        max-height: 60px;
    }

    button {
        font-size: 1.5rem;
        padding: 5px;
    }
}
</style>