<template>
  <section class="pricing">
    <div class="pricing-header">
      <h2>Web Design Budgets</h2>
      <p>Pilih paket yang sesuai dengan kebutuhan Anda.</p>
    </div>
    <div class="pricing-grid">
      <div
        class="pricing-card"
        v-for="(item, index) in Budgets"
        :key="index"
      >
        <h3>{{ item.title }}</h3>
        <p class="price">{{ item.price }}</p>
        <ul>
          <li v-for="(feature, idx) in item.features" :key="idx">
            {{ feature }}
          </li>
        </ul>
        <button @click="selectPackage(package)">Pilih Paket</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      Budgets: [
        {
          title: "Keong",
          price: "RP199K",
          features: [
            "1 Halaman Website",
            "Desain Responsif",
            "Integrasi Media Sosial",
            "Dukungan Email",
            "-",
            "-",
          ],
        },
        {
          title: "Kijang",
          price: "RP599K",
          features: [
            "5 Halaman Website",
            "Desain Responsif",
            "SEO Dasar",
            "Dukungan Email",
            "Penyimpanan Cloud",
            "-"
          ],
        },
        {
          title: "Singa",
          price: "RP1599K",
          features: [
            "10 Halaman Website",
            "Desain Responsif",
            "SEO Lanjutan",
            "Dukungan Email",
            "Penyimpanan Cloud",
            "Analitik Website",
          ],
        },
      ],
    };
  },
  methods: {
    selectPackage(item) {
      alert(`Anda memilih paket: ${item.title}`);
    },
  },
};
</script>

<style scoped>

@media (min-width: 800px) {
  .pricing {
    height: 100vh;
  }
}

.pricing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #00ffdd; /* Light background color */
}

.pricing-header {
  text-align: center; /* Center the text */
  margin-bottom: 30px; /* Space below the header */
}

.pricing-header h2 {
  font-size: 2.5rem; /* Heading size */
  color: #ff5722; /* Color for the heading */
}

.pricing-header p {
  font-size: 1.2rem; /* Subheading size */
  color: #333; /* Color for the subheading */
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Responsive grid */
  gap: 20px; /* Space between cards */
  width: 100%; /* Full width */
  max-width: 1200px; /* Max width for the grid */
}

.pricing-card {
  background-color: white; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  padding: 20px;
  text-align: center; /* Center the text */
  transition: transform 0.3s, box-shadow 0.3s; /* Animation */
}

.pricing-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.pricing-card h3 {
  font-size: 1.8rem; /* Card heading size */
  margin-bottom: 15px; /* Space below heading */
}

.price {
  font-size: 2rem; /* Price size */
  color: #ff5722; /* Price color */
  margin-bottom: 15px; /* Space below price */
}

ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
  margin: 0 0 15px; /* Margin below the list */
}

ul li {
  font-size: 1rem; /* Feature size */
  margin-bottom: 10px; /* Space below each feature */
}

button {
  background-color: #ff5722; /* Button color */
  color: white; /* Button text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding for button */
  font-size: 1rem; /* Button font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Transition for hover effect */
}

button:hover {
  background-color: #e64a19; /* Darker shade on hover */
}
</style>
