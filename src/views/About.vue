<template>
    <div class="page">
        <h1 class="floating-heading">Tentang Kami</h1>
        <p class="floating-subheading">Kami adalah tim digital solusi kreatif dan inovatif.</p>
    </div>
</template>

<script>
export default {
    name: "About"
};
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f4f7fa;
    text-align: center;
}

.floating-heading {
    font-size: 3rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    animation: floatHeading 3s ease-in-out infinite;
}

.floating-subheading {
    font-size: 1.5rem;
    color: #34495e;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    animation: floatSubheading 4s ease-in-out infinite;
}

@keyframes floatHeading {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

@keyframes floatSubheading {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-4px);
    }
}
</style>
