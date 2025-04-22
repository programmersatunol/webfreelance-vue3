<template>
    <section class="section-container">
        <div class="course-detail">
            <img v-if="course" :src="course.image" :alt="course.title" class="course-image" />

            <div class="course-content">
                <h1 class="course-title">{{ course?.title || "Course Tidak Ditemukan" }}</h1>
                <p v-if="course" class="course-price">{{ formatPrice(course.price) }}</p>

                <p v-if="course" class="course-description">
                    Ini adalah halaman detail untuk <strong>{{ course.title }}</strong>. Di sini Anda akan menemukan
                    semua informasi tentang kursus ini.
                </p>

                <!-- Tombol Bayar Midtrans Snap -->
                <button v-if="course" @click="pay" class="pay-button" :disabled="loading">
                    <template v-if="loading">
                        <span class="spinner"></span> Memproses...
                    </template>
                    <template v-else>
                        Bayar Sekarang
                    </template>
                </button>


                <router-link to="/courses" class="back-button">
                    ← Kembali
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "CourseDetail",
    data() {
        return {
            course: null,
            courses: [
                { id: 1, slug: "course-a", title: "Course A", price: 199000, image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                { id: 2, slug: "course-b", title: "Course B", price: 249000, image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                { id: 3, slug: "course-c", title: "Course C", price: 149000, image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                // Tambahkan course lainnya...
            ],
            snapLoaded: false,
            loading: false // << ini yang kurang!
        };
    },
    created() {
        const slug = this.$route.params.slug;
        this.course = this.courses.find(c => c.slug === slug);
    },
    methods: {
        formatPrice(value) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
        },
        pay() {
            this.loading = true; // Tambahkan ini saat klik tombol

            if (!window.snap) {
                
                const isProduction = process.env.NODE_ENV === 'production';

                const script = document.createElement('script');
                script.src = isProduction
                    ? 'https://app.midtrans.com/snap/snap.js'
                    : 'https://app.sandbox.midtrans.com/snap/snap.js';
                script.setAttribute('data-client-key', isProduction
                    ? 'Mid-client-MTOkMwkHo-GgALKS'
                    : 'SB-Mid-client-J3yhGCaFWOIEqoOp');

                document.head.appendChild(script);


                script.onload = () => {
                    this.snapLoaded = true;
                    this.startPayment();
                };
                script.onerror = () => {
                    this.loading = false; // kalau gagal load snap.js
                    alert('Gagal memuat Midtrans snap.js');
                };
            } else {
                this.startPayment();
            }
        },
        startPayment() {
            const itemDetails = [{
                id: this.course.id,
                price: this.course.price,
                quantity: 1,
                name: this.course.title,
            }];

            axios.post('https://backend-snap-node.vercel.app/api/snap', {
                transaction_details: {
                    order_id: 'ORDER-ID-' + Date.now(),
                    gross_amount: this.course.price,
                },
                item_details: itemDetails,
            })
                .then(response => {
                    const token = response.data.token;
                    window.snap.pay(token, {
                        onSuccess: result => {
                            console.log('Pembayaran berhasil', result);
                            this.loading = false;
                        },
                        onError: error => {
                            console.error('Pembayaran error', error);
                            this.loading = false;
                        },
                        onClose: () => {
                            alert('Anda menutup popup pembayaran.');
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    console.error('Gagal mendapatkan token pembayaran', error);
                    this.loading = false;
                });
        }
    }
};
</script>

<style scoped>
/* Tambahan CSS Spinner */
.spinner {
    border: 3px solid #fff;
    border-top: 3px solid #ff7f50;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    animation: spin 1s linear infinite;
    margin-right: 8px;
    vertical-align: middle;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Saat tombol disabled */
.pay-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}


.section-container {
    padding: 40px 20px;
    background-color: #f9fafb;
    min-height: 100vh;
}

.course-detail {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
}

.course-image {
    width: 100%;
    max-width: 700px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.course-content {
    text-align: center;
}

.course-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #21867a;
    margin-bottom: 8px;
}

.course-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e76f51;
    margin-bottom: 16px;
}

.course-description {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 24px;
    line-height: 1.6;
}

.pay-button,
.back-button {
    display: inline-block;
    width: 200px;
    text-align: center;
    margin-bottom: 16px;
}

.pay-button {
    background-color: #ff7f50;
    color: white;
    border: none;
    padding: 12px 0;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
}

.pay-button:hover {
    background-color: #e76f51;
}

.back-button {
    background-color: #2a9d8f;
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 0;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #21867a;
}

/* Responsive */
@media (max-width: 768px) {
    .course-title {
        font-size: 2rem;
    }

    .course-price {
        font-size: 1.25rem;
    }

    .pay-button,
    .back-button {
        width: 100%;
        max-width: 300px;
    }
}
</style>
