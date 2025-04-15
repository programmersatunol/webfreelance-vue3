<template>
    <div class="page">
        <h1 class="title">Shop</h1>
        <p class="subtitle">Temukan produk terbaik kami di sini.</p>

        <input
            type="text"
            v-model="searchQuery"
            placeholder="Cari produk..."
            class="search-bar"
        />

        <div class="products-grid">
            <div v-for="product in paginatedProducts" :key="product.id" class="product-card">
                <img :src="product.image" :alt="product.name" class="product-image" />
                <div class="product-info">
                    <h2 class="product-name">{{ product.name }}</h2>
                    <p class="product-price">Rp{{ product.price.toLocaleString() }}</p>
                    <p class="product-stock">Stok: {{ product.stock }}</p>
                </div>
                <button @click="addToCart(product)" class="add-to-cart">
                    Tambah ke Keranjang
                </button>
            </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
            <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Shop",
    data() {
        return {
            searchQuery: "",
            currentPage: 1,
            itemsPerPage: 8,
            products: [
            {
                    id: 1,
                    name: "Produk A",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 150000,
                    stock: 10
                },
                {
                    id: 2,
                    name: "Produk B",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 200000,
                    stock: 5
                },
                {
                    id: 3,
                    name: "Produk C",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 180000,
                    stock: 8
                },
                {
                    id: 4,
                    name: "Produk D",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 250000,
                    stock: 3
                },
                {
                    id: 5,
                    name: "Produk E",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 100000,
                    stock: 15
                },
                {
                    id: 6,
                    name: "Produk F",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 300000,
                    stock: 6
                },
                {
                    id: 7,
                    name: "Produk G",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 275000,
                    stock: 12
                },
                {
                    id: 8,
                    name: "Produk H",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 220000,
                    stock: 9
                },
                {
                    id: 9,
                    name: "Produk Utama",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 190000,
                    stock: 11
                },

                {
                    id: 10,
                    name: "Produk Utama",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 190000,
                    stock: 11
                },
                {
                    id: 11,
                    name: "Produk Utama",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 190000,
                    stock: 11
                },
                {
                    id: 12,
                    name: "Produk Utama",
                    image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000",
                    price: 190000,
                    stock: 11
                }
            ]
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredProducts.slice(start, start + this.itemsPerPage);
        }
    },
    watch: {
        searchQuery() {
            this.currentPage = 1; // Reset to first page on search
        }
    },
    methods: {
        addToCart(product) {
            alert(`Produk ${product.name} ditambahkan ke keranjang.`);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
};
</script>

<style scoped>
.page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    font-family: 'Segoe UI', sans-serif;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: #21867a;
}

.subtitle {
    margin-bottom: 24px;
    font-size: 1rem;
    color: #555;
}

.search-bar {
    width: 100%;
    max-width: 400px;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 32px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}

.product-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.product-info {
    padding: 16px;
    flex-grow: 1;
}

.product-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
}

.product-price {
    color: #2a9d8f;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
}

.product-stock {
    font-size: 14px;
    color: #666;
}

.add-to-cart {
    background-color: #2a9d8f;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    border-top: 1px solid #eee;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: #21867a;
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
