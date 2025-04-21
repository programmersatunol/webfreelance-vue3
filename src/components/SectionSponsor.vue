<template>
    <section class="sponsors-section">
        <!-- Header and Subheader -->
        <div class="header">
            <h1 class="title">Our Proud Sponsors</h1>
            <p class="subtitle">
                We are honored to be supported by these amazing partners around the world.
            </p>
        </div>

        <!-- Sponsorship Cards -->
        <div class="logos-grid">
            <div v-for="(logo, index) in visibleLogos" :key="index" class="logo-card">
                <img :src="logo" alt="Sponsor Logo" />
            </div>
        </div>

        <!-- Load More Button -->
        <div v-if="visibleLogos.length < logos.length" class="load-more-container">
            <button @click="loadMore" class="load-more-button">
                Load More
            </button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            logos: [
                'https://ncsc-website-prod-assets.s3.me-south-1.amazonaws.com/assets/images/logo_3e9732a294.png',
                'https://www.bahrain.bh/wps/contenthandler/en/!ut/p/digest!VjBueQcDg9ZtERuc1v4-zw/dav/fs-type1/themes/BahrainGovPortalThemeDX95/assets/images/Logo_en.svg'
            ],
            visibleCount: 6,
        };
    },
    computed: {
        visibleLogos() {
            return this.logos.slice(0, this.visibleCount);
        },
    },
    methods: {
        loadMore() {
            this.visibleCount += 3;
        },
    },
};
</script>

<style scoped>
/* General Section */
.sponsors-section {
    min-height: 50vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #ffffff, #f3f4f6);
}

/* Header Section */
.header {
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
}

.title {
    font-size: 28px;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 16px;
    color: #718096;
    max-width: 600px;
    margin: 0 auto;
}

/* Main Logo */
.main-logo {
    margin-bottom: 40px;
}

.main-logo img {
    height: 80px;
    object-fit: contain;
}

/* Logos Grid */
.logos-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    width: 100%;
    max-width: 1200px;
}

/* Single Logo Card */
.logo-card {
    width: 220px;
    padding: 16px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-card img {
    height: 50px;
    object-fit: contain;
}

.logo-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Load More Button */
.load-more-container {
    margin-top: 40px;
}

.load-more-button {
    background-color: #3182ce;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 32px;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.load-more-button:hover {
    background-color: #2b6cb0;
}

/* Fade-in Animation for Cards */
.logo-card {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.95);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .title {
        font-size: 24px;
    }

    .subtitle {
        font-size: 14px;
    }

    .logo-card {
        width: 100px;
    }

    .logo-card img {
        height: 40px;
    }

    .load-more-button {
        font-size: 14px;
        padding: 10px 24px;
    }
}
</style>