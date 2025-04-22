<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Social Icons -->
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#" aria-label="Facebook" class="social-circle facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" class="social-circle twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" class="social-circle instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-circle linkedin">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <!-- Email Contact -->
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email us at:</p>
        <a href="mailto:info@example.com" class="email-link">info@example.com</a>
      </div>

      <!-- Page Links -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#">Web Development</a></li>
          <li><a href="#">System Administrator</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.footer {
  background-color: #111;
  color: #fff;
  padding: 40px 20px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 20px;
  text-align: center;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 1.2em;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 1.2em;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
}

.social-circle:hover.facebook {
  background-color: #3b5998;
}

.social-circle:hover.twitter {
  background-color: #1da1f2;
}

.social-circle:hover.instagram {
  background-color: #e4405f;
}

.social-circle:hover.linkedin {
  background-color: #0077b5;
}

.email-link {
  color: #1da1f2;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
}

.email-link:hover {
  text-decoration: underline;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin: 8px 0;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: text-decoration 0.3s;
}

.footer-links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>