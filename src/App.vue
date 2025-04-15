<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <section class="hero">
      <div class="hero-content">
        <h1>Selamat Datang di Konsultan SatuNol</h1>
        <p>Mitra Solusi Digital Untuk Kebutuhan Teknologi Anda</p>
        <button @click="getStarted">Ayo Mulai</button>
      </div>
    </section>

    <!-- WhatsApp button -->
    <a
      href="https://wa.me/085177778888?text=Halo, Saya ingin tanya layanan anda!"
      target="_blank"
      class="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
      <!-- Font Awesome WhatsApp icon -->
    </a>

    <!-- Services Section -->
    <section class="services">
      <div class="services-header">
        <h2>Layanan Kami</h2>
        <p>Kami menawarkan berbagai layanan digital untuk memenuhi kebutuhan teknologi Anda.</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <i class="fab fa-whatsapp service-icon"></i>
          <h2>Pengembang Web</h2>
          <p>Deskripsi layanan 1 yang ditawarkan oleh perusahaan.</p>
        </div>
        <div class="service-card">
          <i class="fab fa-whatsapp service-icon"></i>
          <h2>Kursus Olah Data</h2>
          <p>Deskripsi layanan 2 yang ditawarkan oleh perusahaan.</p>
        </div>
        <div class="service-card">
          <i class="fab fa-whatsapp service-icon"></i>
          <h2>Kursus Koding</h2>
          <p>Deskripsi layanan 3 yang ditawarkan oleh perusahaan.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getStarted() {
      alert("kirim proposal anda ke satpam@satunoldigitalsolusi.web.id!");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background: linear-gradient(to right, #4facfe, #00f2fe); /* Gradient background */
  color: white;
  text-align: center;
  padding: 20px;
}

.hero h1 {
  font-size: 3rem; /* Large font size for the heading */
  margin-bottom: 1rem; /* Space below the heading */
}

.hero p {
  font-size: 1.5rem; /* Medium font size for the paragraph */
  margin-bottom: 2rem; /* Space below the paragraph */
}

.hero button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #ff5722; /* Button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #e64a19; /* Darker shade on hover */
}

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366; /* WhatsApp green color */
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size: 24px; /* Adjust icon size */
}

.whatsapp-button:hover {
  background-color: #128c7e; /* Darker green on hover */
}

/* Services Section */
.services {
  padding: 40px 20px;
  background-color: #f9f9f9; /* Light background color for the services section */
}

.services-header {
  text-align: center; /* Center the text */
  margin-bottom: 20px; /* Space below the header */
}

.services-header h2 {
  font-size: 2rem; /* Heading size */
  color: #ff5722; /* Color for the heading */
  margin-bottom: 10px; /* Space below heading */
}

.services-header p {
  font-size: 1.2rem; /* Subheading size */
  color: #333; /* Color for the subheading */
}

/* Grid layout for service cards */
.services-grid {
  display: flex; /* Use flexbox to arrange cards */
  justify-content: space-between; /* Space between columns */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.service-card {
  flex: 1; /* Each card takes up equal space */
  max-width: 400px; /* Max width for each card */
  margin: 10px; /* Margin around each card */
  padding: 20px;
  background-color: white; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  text-align: center; /* Center the text */
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: space-between; /* Space out content evenly */
}

.service-icon {
  font-size: 40px; /* Icon size */
  color: #ff5722; /* Icon color */
  margin-bottom: 10px; /* Space below icon */
}

.service-card h2 {
  font-size: 1.5rem; /* Heading size */
  margin-bottom: 10px; /* Space below heading */
}

.service-card p {
  font-size: 1rem; /* Paragraph size */
}
</style>