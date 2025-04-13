<template>
  <div class="testimonial-card">
    <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-image">
    <div class="testimonial-content">
      <p class="testimonial-text">"{{ testimonial.description }}"</p>
      <h3 class="testimonial-name">{{ testimonial.name }}</h3>
      <p class="testimonial-position">{{ testimonial.position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.testimonial-card {
  min-width: 300px;
  max-width: 350px;
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.testimonial-content {
  text-align: left;
}

.testimonial-text {
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-style: italic;
}

.testimonial-name {
  color: #2d3748;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.testimonial-position {
  color: #718096;
  font-size: 0.9rem;
}
</style>