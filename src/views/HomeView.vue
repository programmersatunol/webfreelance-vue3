<script setup>
import TestimonialSection from "../components/TestimonialSection.vue";
import ClientLogoSection from "../components/ClientLogoSection.vue";
</script>

<template>
  <main>
    <div class="home">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Welcome to <span class="highlight">YourBrand</span>
          </h1>
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
            <div class="feature-card">
              <h3>Branding</h3>
              <p>
                Create a strong brand identity to stand out from competitors
              </p>
            </div>
            <div class="feature-card">
              <h3>Content Strategy</h3>
              <p>Plan and deliver content that drives results</p>
            </div>
            <div class="feature-card">
              <h3>Support & Maintenance</h3>
              <p>Ongoing support to keep your site secure and updated</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Add the ClientLogoSection before or after TestimonialSection -->
      <ClientLogoSection />
      <TestimonialSection />
    </div>
  </main>
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
  height: 100vh;
  /* Full screen height */
  display: flex;
  /* Enable flexbox */
  align-items: center;
  /* Vertical centering */
  justify-content: center;
  /* Horizontal centering */
  padding: 4rem 2rem;
  background-color: #f9fafb;
  box-sizing: border-box;
  /* Ensure padding doesn't overflow */
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
  grid-template-columns: repeat(3, 1fr);
  /* 3 cards per row */
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    /* 2 per row on tablets */
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
    /* 1 per row on small screens */
  }
}

.feature-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
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
