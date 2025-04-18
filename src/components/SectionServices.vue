<template>
    <section class="services">
        <div class="services-header">
            <h2>Jadi Mitra Kami</h2>
            <p>
                Hadir dengan
                solusi yang dinamis, dukungan berkelanjutan, dan pendekatan yang berorientasi pada maslahat.
            </p>
        </div>
        <div class="services-grid">
            <div class="service-card" v-for="(service, index) in services" :key="index">
                <i :class="service.icon + ' service-icon'"></i>
                <h2>{{ service.title }}</h2>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services",
    data() {
        return {
            services: [
                {
                    title: "Profesional & Berpengalaman",
                    description: "Kami memiliki tim ahli dengan pengalaman bertahun-tahun di bidang pengembangan web, pelatihan olah data, dan pemrograman.",
                    icon: "fas fa-handshake"
                },
                {
                    title: "Solusi Terintegrasi",
                    description: "Kami menyediakan layanan lengkap dari konsultasi hingga implementasi, sehingga klien tidak perlu repot mencari vendor lain.",
                    icon: "fas fa-handshake"
                },
                {
                    title: "Pendekatan Personal",
                    description: "Kami mendengarkan kebutuhan Anda dan memberikan solusi berkelanjutan yang disesuaikan dengan tujuan dan anggaran Anda.",
                    icon: "fas fa-handshake"
                }
            ],
        };
    },
};
</script>

<style scoped>
.services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* Changed from height to min-height */
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    width: 100%;
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
}


.services-header {
    text-align: center;
    /* Center the text */
    margin-bottom: 20px;
    /* Space below the header */
}

.services-header h2 {
    font-size: 2rem;
    /* Heading size */
    color: #ff5722;
    /* Color for the heading */
    margin-bottom: 10px;
    /* Space below heading */
}

.services-header p {
    font-size: 1.2rem;
    /* Subheading size */
    color: #333;
    /* Color for the subheading */
}

/* Grid layout for service cards */
.services-grid {
    display: flex;
    /* Use flexbox to arrange cards */
    justify-content: space-between;
    /* Space between columns */
    flex-wrap: wrap;
    /* Allow wrapping on smaller screens */
    width: 100%;
    /* Full width to ensure cards align properly */
}

.service-card {
    flex: 1;
    /* Each card takes up equal space */
    max-width: 500px;
    /* Max width for each card */
    margin: 10px;
    /* Margin around each card */
    padding: 20px;
    background-color: white;
    /* Card background color */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    /* Shadow for depth */
    text-align: center;
    /* Center the text */
    display: flex;
    flex-direction: column;
    /* Stack content vertically */
    justify-content: space-between;
    /* Space out content evenly */
}

.service-icon {
    font-size: 40px;
    /* Icon size */
    color: #ff5722;
    /* Icon color */
    margin-bottom: 10px;
    /* Space below icon */
}

.service-card h2 {
    font-size: 1.5rem;
    /* Heading size */
    margin-bottom: 10px;
    /* Space below heading */
}

.service-card p {
    font-size: 1rem;
    /* Paragraph size */
}

/* Media query for mobile responsiveness */
@media (max-width: 600px) {
    .service-card {
        flex: 1 1 100%;
        /* Full width on mobile */
        max-width: 100%;
        /* Remove max-width restriction */
        margin: 10px 0;
        /* Margin above and below for spacing */
    }

    .services-grid {
        justify-content: center;
        /* Center cards on mobile */
    }
}
</style>