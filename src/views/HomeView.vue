<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to <span class="highlight">YourBrand</span></h1>
        <p class="hero-subtitle">Creating amazing digital experiences</p>
        <router-link to="/contact" class="cta-button">Get Started</router-link>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">What We Offer</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Web Design</h3>
            <p>Beautiful and responsive websites that engage your audience</p>
          </div>
          <div class="feature-card">
            <h3>Development</h3>
            <p>Custom web applications built with modern technologies</p>
          </div>
          <div class="feature-card">
            <h3>SEO</h3>
            <p>Optimize your online presence for better visibility</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.hero {
  height: calc(100vh - 70px);
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #fbbf24;
  color: #1f2937;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.features {
  padding: 4rem 2rem;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1f2937;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .features {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>