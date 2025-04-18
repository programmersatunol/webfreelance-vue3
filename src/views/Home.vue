<template>
    <div id="app">
        
        <section class="hero">
            <div class="hero-content">
                <h1>Selamat Datang di Konsultan SatuNol</h1>
                <p>Mitra Solusi Digital Untuk Kebutuhan Teknologi Anda</p>
                <button @click="getStarted">Ayo Mulai</button>
            </div>
        </section>

        <!-- Include the Services component -->
        <Services />

        <!-- Include the Pricing component -->
        <SectionBudgets />

        <SectionProduct />

        <Partnerships />
        
    </div>
</template>

<script>
import Services from "@/components/Services.vue";
import GTranslate from "@/components/GTranslate.vue";
import Partnerships from "@/components/Partnerships.vue";
import SectionBudgets from "@/components/SectionBudgets.vue";
import SectionProduct from "@/components/SectionProduct.vue";

export default {
    name: "App",
    components: {
        Services,
        GTranslate,
        SectionBudgets,
        Partnerships,
        SectionProduct
    },
    methods: {
        getStarted() {
            alert("kirim proposal anda ke satpam@satunoldigitalsolusi.web.id!");
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Full viewport height */
    background: linear-gradient(to right,
            #1ce257,
            #00ff91);
    /* Gradient background */
    color: white;
    text-align: center;
    padding: 20px;
}

.hero h1 {
    font-size: 3rem;
    /* Large font size for the heading */
    margin-bottom: 1rem;
    /* Space below the heading */
}

.hero p {
    font-size: 1.5rem;
    /* Medium font size for the paragraph */
    margin-bottom: 2rem;
    /* Space below the paragraph */
}

.hero button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background-color: #ff5722;
    /* Button color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.hero button:hover {
    background-color: #e64a19;
    /* Darker shade on hover */
}

.whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    /* WhatsApp green color */
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-size: 24px;
    /* Adjust icon size */
}

.whatsapp-button:hover {
    background-color: #128c7e;
    /* Darker green on hover */
}
</style>
