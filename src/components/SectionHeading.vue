<template>
    <div class="heading">
        <h1 class="floating-heading">{{ title }}</h1>
        <p class="floating-subheading">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    name: 'SectionHeading',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    background: #90aecc;
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
</style>