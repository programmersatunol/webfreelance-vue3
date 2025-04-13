<template>
  <div class="Portfolio">
    <div class="content">
      <h1 class="heading">Portfolio</h1>
      <h2 class="subheading">Your Trusted Development Partner</h2>
      <p class="description">
        We are a team of passionate developers dedicated to creating exceptional
        web solutions that help businesses thrive in the digital world.
      </p>
    </div>
  </div>
</template>

<style scoped>
.Portfolio {
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  text-align: center;
  max-width: 800px;
  animation: float 3s ease-in-out infinite;
}

.heading {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 700;
}

.subheading {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 500;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .heading {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
