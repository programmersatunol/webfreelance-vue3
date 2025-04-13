<template>
  <section class="testimonials-section">
    <h2 class="section-title">What Our Clients Say</h2>
    <div class="testimonials-container" ref="scrollContainer">
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        :testimonial="testimonial"
      />
    </div>
    <div class="scroll-buttons">
      <button @click="scroll('left')" class="scroll-button">←</button>
      <button @click="scroll('right')" class="scroll-button">→</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TestimonialCard from './TestimonialCard.vue';

const scrollContainer = ref(null);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    description: "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    description: "The attention to detail and creative solutions provided by the team helped us achieve our business goals.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Product Manager",
    description: "Outstanding service and professional approach. They transformed our vision into reality perfectly.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },

  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    description: "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    description: "The attention to detail and creative solutions provided by the team helped us achieve our business goals.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Product Manager",
    description: "Outstanding service and professional approach. They transformed our vision into reality perfectly.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },

  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    description: "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    description: "The attention to detail and creative solutions provided by the team helped us achieve our business goals.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Product Manager",
    description: "Outstanding service and professional approach. They transformed our vision into reality perfectly.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },

  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    description: "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    description: "The attention to detail and creative solutions provided by the team helped us achieve our business goals.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Product Manager",
    description: "Outstanding service and professional approach. They transformed our vision into reality perfectly.",
    image: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
  },
  
];

const scroll = (direction) => {
  const container = scrollContainer.value;
  const scrollAmount = 400;
  
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 4rem 2rem;
  background-color: #f7fafc;
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
}

.testimonials-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  gap: 1rem;
  padding: 1rem 0;
}

.testimonials-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.scroll-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.scroll-button {
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: #2d3748;
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>