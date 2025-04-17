<template>
    <section class="services">
        <div class="services-header">
            <h2>Paket Web Design</h2>
            <p>
                Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Kami siap membantu mewujudkan website impian Anda!
            </p>
        </div>
        <div class="services-grid">
            <div class="service-card" v-for="(packageItem, index) in packages" :key="index">
                <i :class="packageItem.icon + ' service-icon'"></i>
                <h2>{{ packageItem.title }}</h2>
                <p>{{ packageItem.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services",
    data() {
        return {
            packages: [
                {
                    title: "Paket Basic",
                    description: "Cocok untuk bisnis kecil dan personal branding. Termasuk 1 halaman utama, desain responsif, dan formulir kontak, whatsapp button.",
                    icon: "fab fa-slack"
                },
                {
                    title: "Paket Profesional",
                    description: "Pilihan ideal untuk usaha menengah. Termasuk hingga 5 halaman, CMS untuk update konten, SEO dasar, dan desain responsif.",
                    icon: "fab fa-slack"
                },
                {
                    title: "Paket Premium",
                    description: "Solusi lengkap untuk bisnis besar. Termasuk website custom, fitur e-commerce, optimasi SEO lanjutan, dan support premium.",
                    icon: "fab fa-slack"
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
    padding: 40px 20px;
    box-sizing: border-box;
    /* Modern gradient background */
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    width: 100%;
    overflow-x: hidden;
}

.services-header {
    text-align: center;
    margin-bottom: 20px;
}

.services-header h2 {
    font-size: 2rem;
    color: #ff5722;
    margin-bottom: 10px;
}

.services-header p {
    font-size: 1.2rem;
    color: #555;
}

.services-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
}

.service-card {
    flex: 1;
    max-width: 500px;
    margin: 10px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Add hover effect for modern feel */
.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.service-icon {
    font-size: 40px;
    color: #ff5722;
    margin-bottom: 10px;
}

.service-card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.service-card p {
    font-size: 1rem;
}

/* Mobile Responsive */
@media (max-width: 600px) {
    .service-card {
        flex: 1 1 100%;
        max-width: 100%;
        margin: 10px 0;
    }

    .services-grid {
        justify-content: center;
    }
}
</style>
