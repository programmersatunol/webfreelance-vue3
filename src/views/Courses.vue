<template>
    <SectionHeading title="Kursus" subtitle="Investasi terbaik untuk masa depan profesional Anda." />

    <section class="section-container">
        <div class="page">
            <h1 class="title">Courses</h1>
            <p class="subtitle">Temukan courses unggulan kami.</p>

            <input v-model="searchQuery" type="text" class="search-input" placeholder="Cari courses..." />

            <div class="portfolio-grid">
                <div v-for="item in paginatedItems" :key="item.id + '-' + item.title" class="portfolio-card">
                    <img :src="item.image" :alt="item.title" class="portfolio-image" />
                    <div class="portfolio-content">
                        <h3 class="portfolio-title">{{ item.title }}</h3>
                        <p class="portfolio-price">{{ formatPrice(item.price) }}</p>
                        
                        <!-- <div class="portfolio-rating">
                            <span v-for="n in 5" :key="n" class="star">
                                <svg v-if="n <= item.rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" class="star-icon filled">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="star-icon empty">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                                </svg>
                            </span>
                        </div> -->
                        <router-link :to="item.link" class="portfolio-link">
                            Lihat Selengkapnya
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="pagination" v-if="totalPages > 1">
                <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
                <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">
                    Next
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeading from '@/components/SectionHeading.vue';

export default {
    name: 'CoursesList',
    components: { SectionHeading },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 3,
            searchQuery: '',
            portfolioItems: [
                { id: 1, title: 'Course A', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-a', price: 199000, rating: 5 },
                { id: 2, title: 'Course B', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-b', price: 249000, rating: 4 },
                { id: 3, title: 'Course C', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-c', price: 149000, rating: 3 },
                { id: 4, title: 'Course D', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-d', price: 299000, rating: 5 },
                { id: 5, title: 'Course E', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-e', price: 179000, rating: 4 },
                { id: 6, title: 'Course F', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-f', price: 219000, rating: 5 },
                { id: 7, title: 'Course G', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-g', price: 159000, rating: 3 },
                { id: 8, title: 'Course H', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-h', price: 189000, rating: 4 },
                { id: 9, title: 'Course I', image: 'https://img.icons8.com/?size=100&id=19293&format=png&color=000000', link: '/courses/course-i', price: 129000, rating: 2 },
            ],
        };
    },
    computed: {
        filteredItems() {
            if (!this.searchQuery) return this.portfolioItems;
            return this.portfolioItems.filter(item =>
                item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredItems.slice(start, start + this.itemsPerPage);
        },
    },
    watch: {
        searchQuery() {
            this.currentPage = 1;
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        formatPrice(value) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
        },
    },
};
</script>

<style scoped>
.section-container {
    background-color: beige;
}

.page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    font-family: "Segoe UI", sans-serif;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: #21867a;
}

.subtitle {
    margin-bottom: 16px;
    font-size: 1rem;
    color: #555;
}

.search-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 24px;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: #2a9d8f;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.portfolio-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
}

.portfolio-card:hover {
    transform: translateY(-5px);
}

.portfolio-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.portfolio-content {
    padding: 16px;
}

.portfolio-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.portfolio-price {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #e76f51;
}

.portfolio-rating {
    display: flex;
    margin-bottom: 12px;
}

.star-icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
}

.star-icon.filled {
    color: #f4c150;
}

.star-icon.empty {
    color: #ccc;
}

.portfolio-link {
    display: inline-block;
    text-decoration: none;
    color: #2a9d8f;
    font-weight: 500;
    transition: color 0.3s;
}

.portfolio-link:hover {
    color: #21867a;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    gap: 16px;
}

.pagination button {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    background-color: #2a9d8f;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.pagination span {
    font-size: 14px;
}
</style>
