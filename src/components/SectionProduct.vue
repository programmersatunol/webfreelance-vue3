<template>
    <section class="full-screen-section">
      <div class="background"></div>
      <div class="content">
        <div class="left">
          <h1>Ayo Mulai Sekarang!</h1>
          <p>Gabung bersama ribuan orang lainnya dan raih kesuksesanmu hari ini. Klik tombol di bawah untuk memulai!</p>
          <button @click="toggleForm">Mulai Sekarang</button>
        </div>
      </div>
  
      <!-- Modal Form -->
      <div v-if="showForm" class="modal-overlay" @click.self="toggleForm">
        <div class="modal">
          <h2>Form Pendaftaran</h2>
          <form class="cta-form" @submit.prevent="submitForm">
            <input type="text" v-model="name" placeholder="Nama Lengkap" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <textarea v-model="message" placeholder="Pesan Anda" rows="4" required></textarea>
            <button type="submit">Kirim</button>
          </form>
          <button class="close-button" @click="toggleForm">Tutup</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showForm = ref(false)
  const name = ref('')
  const email = ref('')
  const message = ref('')
  
  const toggleForm = () => {
    showForm.value = !showForm.value
  }
  
  const submitForm = () => {
    alert(`Terima kasih, ${name.value}!\nEmail: ${email.value}\nPesan: ${message.value}`);
    name.value = ''
    email.value = ''
    message.value = ''
    showForm.value = false
  }
  </script>
  
  <style scoped>
  .full-screen-section {
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #a2aaad, #7fead5);
    z-index: 0;
  }
  
  .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    height: 80%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 1;
  }
  
  .left {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 40px;
  }
  
  .left h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .left p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .left button {
    padding: 12px 24px;
    font-size: 1rem;
    background-color: #4facfe;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .left button:hover {
    background-color: #00f2fe;
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  
  .modal {
    background: white;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    position: relative;
    animation: fadeIn 0.3s ease;
  }
  
  .modal h2 {
    margin-bottom: 20px;
  }
  
  .cta-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .cta-form input,
  .cta-form textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  .cta-form button[type="submit"] {
    padding: 12px;
    font-size: 1rem;
    background-color: #00c6ff;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .cta-form button[type="submit"]:hover {
    background-color: #0072ff;
  }
  
  .close-button {
    margin-top: 20px;
    background: transparent;
    border: none;
    color: #0072ff;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: underline;
  }
  
  /* Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .content {
      height: auto;
      padding: 20px;
    }
  
    .left h1 {
      font-size: 2rem;
    }
  
    .left p {
      font-size: 1rem;
    }
  
    .left button {
      width: 100%;
    }
  }
  </style>
  