<template>
	<SectionHeading title="Portfolio Terbaik"
		subtitle="Cerminan komitmen kami terhadap kualitas dan inovasi." />


	<div class="page">
		<h1 class="title">Portfolio</h1>
		<p class="subtitle">Ini adalah halaman portfolio kami.</p>

		<input v-model="searchQuery" type="text" class="search-input" placeholder="Cari project..." />

		<div class="portfolio-grid">
			<div v-for="item in paginatedItems" :key="item.id + '-' + item.title" class="portfolio-card">
				<img :src="item.image" :alt="item.title" class="portfolio-image" />
				<div class="portfolio-content">
					<h3 class="portfolio-title">{{ item.title }}</h3>
					<a :href="item.link" class="portfolio-link">Lihat Selengkapnya</a>
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
</template>

<script>
import SectionHeading from '@/components/SectionHeading.vue';

export default {
	name: "Portfolio",
	components: {
		SectionHeading
	},
	data() {
		return {
			currentPage: 1,
			itemsPerPage: 3,
			searchQuery: "",
			portfolioItems: [
				{
					id: 1,
					title: "Project A",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-a",
				},
				{
					id: 2,
					title: "Project B",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-b",
				},
				{
					id: 3,
					title: "Project C",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-c",
				},
				{
					id: 4,
					title: "Project D",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-d",
				},
				{
					id: 5,
					title: "Project E",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-e",
				},
				{
					id: 6,
					title: "Project F",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-f",
				},
				{
					id: 7,
					title: "Project G",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-g",
				},
				{
					id: 8,
					title: "Project H",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-h",
				},
				{
					id: 9,
					title: "Project I",
					image:
						"https://img.icons8.com/?size=100&id=19293&format=png&color=000000",
					link: "/portfolio/project-i",
				},
			],
		};
	},
	computed: {
		filteredItems() {
			if (!this.searchQuery) return this.portfolioItems;
			return this.portfolioItems.filter((item) =>
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
	},
};
</script>

<style scoped>
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
