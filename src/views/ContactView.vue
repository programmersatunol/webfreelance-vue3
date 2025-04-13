<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1 class="contact-title">Get in Touch</h1>
      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
                placeholder="Your name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              placeholder="Your email"
                required
              >
            </div>
            
            <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
            </div>
            
          <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
          </div>
          </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
    }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

  .contact-container {
    width: 100%;
  max-width: 800px;
  margin: 0 auto;
  }

.contact-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.95rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  background: #2980b9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-wrapper {
    padding: 2rem;
  }

  .contact-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-form-wrapper {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .submit-button {
    padding: 0.8rem 1.5rem;
  }
}
</style>
