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
  background: linear-gradient(to right, #b5ffef, #47ffac);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://source.unsplash.com/1600x900/?success,business');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.left h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease;
}

.left p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease;
}

button {
  padding: 0.8rem 1.5rem;
  background: #ff7e5f;
  border: none;
  border-radius: 2rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #feb47b;
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
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  width: 90%;
  text-align: center;
  animation: popUp 0.5s ease;
}

.modal h2 {
  margin-bottom: 1rem;
  color: #333;
}

.cta-form input,
.cta-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.cta-form button[type="submit"] {
  background: #2575fc;
  color: white;
  font-weight: bold;
}

.cta-form button[type="submit"]:hover {
  background: #6a11cb;
}

.close-button {
  margin-top: 1rem;
  background: #ccc;
  color: #333;
}

.close-button:hover {
  background: #999;
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popUp {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>