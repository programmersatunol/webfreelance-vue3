<template>
    <section class="services">
      <div class="services-header">
        <h2>Layanan Kami</h2>
        <p>Kami menawarkan berbagai layanan digital untuk memenuhi kebutuhan teknologi Anda.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <i :class="service.icon + ' service-icon'"></i>
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Services",
    data() {
      return {
        services: [
          {
            title: "Pengembang Web",
            description: "Deskripsi layanan 1 yang ditawarkan oleh perusahaan.",
            icon: "fab fa-whatsapp",
          },
          {
            title: "Kursus Olah Data",
            description: "Deskripsi layanan 2 yang ditawarkan oleh perusahaan.",
            icon: "fab fa-whatsapp",
          },
          {
            title: "Kursus Koding",
            description: "Deskripsi layanan 3 yang ditawarkan oleh perusahaan.",
            icon: "fab fa-whatsapp",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
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