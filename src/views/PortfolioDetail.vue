<template>
    <section class="section-container">
        <div class="detail-page">
            <div class="image-wrapper" v-if="project">
                <img :src="project.image" :alt="project.title" class="detail-image" />
            </div>

            <div class="text-content">
                <h1 class="title">{{ project?.title || 'Project Tidak Ditemukan' }}</h1>
                <p v-if="project" class="description">
                    Ini adalah halaman detail untuk <strong>{{ project.title }}</strong>. Kami menunjukkan kualitas dan
                    inovasi terbaik dalam setiap proyek yang kami kerjakan.
                </p>

                <router-link to="/portfolio" class="back-button">
                    ← Kembali ke Portfolio
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PortfolioDetail",
    data() {
        return {
            project: null,
            projects: [
                { id: 1, slug: "project-a", title: "Project A", image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                { id: 2, slug: "project-b", title: "Project B", image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                { id: 3, slug: "project-c", title: "Project C", image: "https://img.icons8.com/?size=100&id=19293&format=png&color=000000" },
                // tambahkan project lainnya...
            ]
        };
    },
    created() {
        const slug = this.$route.params.slug;
        this.project = this.projects.find(p => p.slug === slug);
    }
};
</script>

<style scoped>
.section-container {
    background-color: #f9fafb;
    padding: 40px 20px;
    min-height: 100vh;
}

.detail-page {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.image-wrapper {
    width: 100%;
}

.detail-image {
    width: 100%;
    max-width: 800px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.text-content {
    text-align: center;
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #21867a;
    margin-bottom: 16px;
}

.description {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 24px;
    line-height: 1.6;
    max-width: 700px;
    margin-inline: auto;
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
    .title {
        font-size: 1.75rem;
    }

    .description {
        font-size: 1rem;
    }
}
</style>