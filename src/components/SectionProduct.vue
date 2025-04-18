<template>
    <section class="section">
        <h2 class="section-title">Solusi Produk Terbaik</h2>

        <div class="cards-center">
            <div v-for="(product, index) in products" :key="index" class="card">
                <img :src="product.image" :alt="product.name" class="card-image" />
                <div class="card-content">
                    <h3 class="card-title">{{ product.name }}</h3>
                    <p class="card-desc">{{ product.description }}</p>
                    <!-- <ul class="features">
                        <li v-for="(feature, idx) in product.features" :key="idx">{{ feature }}</li>
                    </ul> -->
                    <a href="#" class="button">Selengkapnya</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProdukSection",
    data() {
        return {
            products: [
                {
                    name: "Digital Forensic Analyzer A",
                    description: "Solusi unggul untuk investigasi digital cepat dan akurat.",
                    image: "https://cdn.nwe.io/files/x/66/5c/1874454b2f21bffc545c883b756c.jpg",
                    features: [
                        "Algoritma Analisis Ringan & Cepat",
                        "Struktur Data Tahan Lama & Aman",
                        "Dukungan Garansi Teknologi 2 Tahun",
                    ],
                },
                {
                    name: "Digital Forensic Workstation B",
                    description: "Kekuatan pemrosesan tinggi untuk investigasi forensik tingkat lanjut.",
                    image: "https://cdn.nwe.io/files/x/66/5c/1874454b2f21bffc545c883b756c.jpg",
                    features: [
                        "Performa Proses Data Besar Super Cepat",
                        "Desain Ergonomis & Tahan Lama",
                        "Layanan Support Teknis 24/7 untuk Kasus Forensik",
                    ],
                },
                {
                    name: "Forensic Intelligence System C",
                    description: "Menyatukan kecanggihan teknologi dan kemudahan pengoperasian forensik.",
                    image: "https://cdn.nwe.io/files/x/66/5c/1874454b2f21bffc545c883b756c.jpg",
                    features: [
                        "Engine Teknologi AI Forensik Terkini",
                        "Antarmuka Operasi Mudah & User-Friendly",
                        "Efisiensi Energi Tinggi untuk Operasi Panjang",
                    ],
                },
                {
                    name: "Mobile Forensic Suite D",
                    description: "Mengoptimalkan produktivitas penyelidikan digital Anda di mana saja.",
                    image: "https://cdn.nwe.io/files/x/66/5c/1874454b2f21bffc545c883b756c.jpg",
                    features: [
                        "Modul Analisis Produktivitas Maksimal",
                        "Kompatibel Multi-Device (iOS, Android, Windows)",
                        "Solusi Hemat Biaya Tanpa Kompromi Kualitas",
                    ],
                },
            ]

        };
    },
};
</script>

<style scoped>
.section {
    padding: 50px 20px;
    /* max-width: 1200px; */
    margin: 0 auto;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    width: 100%;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 40px;
}

/* Ganti scroll-container menjadi cards-center */
.cards-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

/* Card styling tetap sama */
.card {
    flex: 0 0 300px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-title {
    font-size: 24px;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
}

.card-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
}

.features {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
}

.features li {
    font-size: 14px;
    color: #444;
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;
}

.features li::before {
    content: "✔";
    color: green;
    position: absolute;
    left: 0;
}

.button {
    background: #007bff;
    color: white;
    padding: 12px;
    text-align: center;
    border-radius: 30px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s;
    margin-top: auto;
}

.button:hover {
    background: #0056b3;
}
</style>