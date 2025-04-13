<template>
  <section class="client-logo-section">
    <div class="container">
      <h2 v-if="title" class="section-title">{{ title }}</h2>
      
      <div class="logo-carousel-container">
        <button 
          class="scroll-button prev" 
          @click="scrollPrev" 
          :disabled="currentIndex === 0"
          aria-label="Previous logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div class="logo-carousel" ref="logoContainer">
          <div class="logo-row">
            <div 
              v-for="(logo, index) in visibleLogos" 
              :key="index" 
              class="logo-item"
            >
              <img :src="logo.src" :alt="logo.alt || 'Client logo'" class="logo-image" />
            </div>
          </div>
        </div>
        
        <button 
          class="scroll-button next" 
          @click="scrollNext" 
          :disabled="currentIndex + visibleCount >= logos.length"
          aria-label="Next logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      <div class="scroll-indicators" v-if="logos.length > visibleCount">
        <span 
          v-for="i in Math.ceil((logos.length - visibleCount + 1) / scrollStep)" 
          :key="i-1"
          :class="['indicator', { active: Math.floor(currentIndex / scrollStep) === i-1 }]"
          @click="goToIndex((i-1) * scrollStep)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientLogoSection',
  props: {
    title: {
      type: String,
      default: 'Our Trusted Clients'
    },
    logos: {
      type: Array,
      default: () => [
        { src: 'https://img.icons8.com/?size=100&id=ESLt6KaSzGIa&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=NEEFJMuauJD8&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=XY6XVIE2E3ig&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=YYvuiXp7wbiJ&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=ESLt6KaSzGIa&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=ESLt6KaSzGIa&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=YYvuiXp7wbiJ&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=ESLt6KaSzGIa&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=NEEFJMuauJD8&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=XY6XVIE2E3ig&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=YYvuiXp7wbiJ&format=png&color=000000', alt: 'Client' },
        { src: 'https://img.icons8.com/?size=100&id=ESLt6KaSzGIa&format=png&color=000000', alt: 'Client' },
      ]
    }
  },
  data() {
    return {
      currentIndex: 0,
      visibleCount: 5,
      scrollStep: 1,
      breakpoints: {
        small: 576,
        medium: 768,
        large: 992
      }
    };
  },
  computed: {
    visibleLogos() {
      return this.logos.slice(this.currentIndex, this.currentIndex + this.visibleCount);
    }
  },
  methods: {
    scrollNext() {
      if (this.currentIndex + this.visibleCount < this.logos.length) {
        this.currentIndex = Math.min(this.currentIndex + this.scrollStep, this.logos.length - this.visibleCount);
      }
    },
    scrollPrev() {
      if (this.currentIndex > 0) {
        this.currentIndex = Math.max(this.currentIndex - this.scrollStep, 0);
      }
    },
    goToIndex(index) {
      this.currentIndex = Math.min(index, this.logos.length - this.visibleCount);
    },
    updateVisibleCount() {
      const width = window.innerWidth;
      if (width < this.breakpoints.small) {
        this.visibleCount = 1; // Show 1 logo on small screens
        this.scrollStep = 1;
      } else if (width < this.breakpoints.medium) {
        this.visibleCount = 2; // Show 2 logos on medium screens
        this.scrollStep = 2;
      } else if (width < this.breakpoints.large) {
        this.visibleCount = 3; // Show 3 logos on large screens
        this.scrollStep = 3;
      } else {
        this.visibleCount = 5; // Show 5 logos on extra large screens
        this.scrollStep = 3;
      }
      
      // Ensure currentIndex is valid after resizing
      if (this.currentIndex + this.visibleCount > this.logos.length) {
        this.currentIndex = Math.max(0, this.logos.length - this.visibleCount);
      }
    }
  },
  mounted() {
    this.updateVisibleCount();
    window.addEventListener('resize', this.updateVisibleCount);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateVisibleCount);
  }
}
</script>

<style scoped>
.client-logo-section {
  padding: 4rem 0;
  background-color: var(--background-light);
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 1.75rem;
  font-weight: 600;
}

.logo-carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
}

.logo-carousel {
  flex: 1;
  overflow: hidden;
  margin: 0 1rem;
}

.logo-row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.logo-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: calc((100% - 8rem) / 5); /* Adjust based on visibleCount */
  min-width: 120px;
}

.logo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.logo-image {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
}

.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--color-border);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  z-index: 2;
}

.scroll-button:hover:not(:disabled) {
  background-color: var(--primary-color);
  color: var(--white);
  border-color: var(--primary-color);
}

.scroll-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scroll-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-border);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.indicator.active {
  background-color: var(--primary-color);
}

@media (max-width: 992px) {
  .logo-item {
    width: calc((100% - 4rem) / 3); /* 3 logos per row */
  }
}

@media (max-width: 768px) {
  .logo-item {
    width: calc((100% - 2rem) / 2); /* 2 logos per row */
    padding: 1rem;
  }
  
  .logo-image {
    max-height: 50px;
  }
}

@media (max-width: 576px) {
  .logo-item {
    width: 100%; /* 1 logo per row */
    padding: 0.75rem;
  }
  
  .logo-image {
    max-height: 40px;
  }
  
  .logo-carousel-container {
    padding: 0 0.5rem;
  }
}
</style>
