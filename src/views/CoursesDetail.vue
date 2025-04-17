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

                <router-link to="/courses" class="back-button">
                    ← Kembali ke Daftar Courses
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
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
            ]
        };
    },
    created() {
        const slug = this.$route.params.slug;
        this.course = this.courses.find(c => c.slug === slug);
    },
    methods: {
        formatPrice(value) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
        }
    }
};
</script>

<style scoped>
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

.back-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2a9d8f;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
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
}
</style>