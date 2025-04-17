<template>
    <section class="section-container">
        <div class="product-detail">
            <img v-if="product" :src="product.image" :alt="product.name" class="product-image" />

            <div class="product-info">
                <h1 class="product-name">{{ product?.name || 'Produk Tidak Ditemukan' }}</h1>
                <p class="product-price">Rp{{ product?.price.toLocaleString() }}</p>

                <div class="product-description">
                    <h2>Deskripsi Produk</h2>
                    <p>{{ product?.description || 'Belum ada deskripsi untuk produk ini.' }}</p>
                </div>

                <div class="cart-controls">
                    <label>Jumlah:</label>
                    <div class="quantity-controls">
                        <button @click="decreaseQuantity">-</button>
                        <input type="number" v-model.number="quantity" min="1" :max="product?.stock || 1" />
                        <button @click="increaseQuantity">+</button>
                    </div>
                </div>

                <div class="action-buttons">
                    <button @click="addToCart" class="add-to-cart">Tambah ke Keranjang</button>
                    <button @click="payNow" class="pay-now">Bayar Sekarang</button>
                </div>

                <router-link to="/shop" class="back-button">
                    ← Kembali ke Shop
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProductDetail",
    data() {
        return {
            quantity: 1,
            product: null,
            products: [
                { id: 1, link: "produk-a", name: "Produk A", price: 150000, stock: 10, image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000", description: "Ini adalah produk A yang berkualitas tinggi." },
                { id: 2, link: "produk-b", name: "Produk B", price: 200000, stock: 5, image: "https://img.icons8.com/?size=100&id=Of4lZV2lwBQI&format=png&color=000000", description: "Produk B sangat cocok untuk kebutuhan harian Anda." },
                // Tambahkan produk lainnya di sini
            ]
        };
    },
    created() {
        const link = this.$route.params.link;
        this.product = this.products.find(p => p.link === link);
    },
    methods: {
        increaseQuantity() {
            if (this.quantity < (this.product?.stock || 1)) {
                this.quantity++;
            }
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        addToCart() {
            alert(`Berhasil menambahkan ${this.quantity} ${this.product.name} ke keranjang!`);
        },
        async payNow() {
            alert(`Melanjutkan ke pembayaran untuk ${this.quantity} ${this.product.name}.`);
            try {
                const totalPrice = this.product.price * this.quantity; // <-- calculate total price here!

                const itemDetails = [{
                    id: this.product.id.toString(),    // Make sure id is string
                    price: this.product.price,          // Single item price
                    quantity: this.quantity,            // How many items
                    name: this.product.name,
                    // brand: "Your Brand Name",            // You can customize this
                    // category: "Your Category",           // You can customize this too
                    // merchant_name: "Your Merchant",      // Your store name
                    // tenor: "12",                         // Optional
                    // code_plan: "000",                    // Optional
                    // mid: "123456",                       // Optional
                    // url: window.location.href            // Current product URL
                }];

                const response = await fetch('https://backend-snap-node.vercel.app/api/snap', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        transaction_details: {
                            order_id: 'ORDER-ID-' + Date.now(),
                            gross_amount: totalPrice,
                        },
                        item_details: itemDetails,
                    }),
                });

                const data = await response.json();
                const snapToken = data.token;

                window.snap.pay(snapToken, {
                    onSuccess: function (result) {
                        console.log('Success', result);
                    },
                    onPending: function (result) {
                        console.log('Pending', result);
                    },
                    onError: function (result) {
                        console.error('Error', result);
                    },
                    onClose: function () {
                        console.log('Payment popup closed');
                    }
                });
            } catch (error) {
                console.error('Payment error:', error);
            }
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

.product-detail {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: flex-start;
}

.product-image {
    width: 100%;
    max-width: 500px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.product-info {
    flex: 1;
}

.product-name {
    font-size: 2.5rem;
    font-weight: bold;
    color: #21867a;
    margin-bottom: 8px;
}

.product-price {
    font-size: 1.5rem;
    color: #e76f51;
    margin-bottom: 16px;
}

.product-description {
    margin-bottom: 24px;
}

.product-description h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.cart-controls {
    margin-bottom: 24px;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.quantity-controls input {
    width: 60px;
    text-align: center;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.quantity-controls button {
    padding: 8px 12px;
    font-size: 18px;
    background-color: #2a9d8f;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.quantity-controls button:hover {
    background-color: #21867a;
}

.action-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
}

.add-to-cart,
.pay-now {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.add-to-cart {
    background-color: #2a9d8f;
    color: white;
}

.add-to-cart:hover {
    background-color: #21867a;
}

.pay-now {
    background-color: #e76f51;
    color: white;
}

.pay-now:hover {
    background-color: #d55d3a;
}

.back-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ccc;
    color: #333;
    text-decoration: none;
    border-radius: 8px;
}

.back-button:hover {
    background-color: #bbb;
}

@media (max-width: 768px) {
    .product-detail {
        flex-direction: column;
        align-items: center;
    }

    .product-info {
        text-align: center;
    }
}
</style>