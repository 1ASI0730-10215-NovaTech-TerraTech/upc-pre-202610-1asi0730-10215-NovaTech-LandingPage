<script setup>

import FooterContent from "../components/footer-content.vue";
import ToolbarContent from "../components/toolbar-content.vue";
import ButtonRegister from "../components/button-register.vue";
</script>

<template>
  <header>
    <toolbar-content/>
  </header>

  <main>
    <div class="hero-container">
      <!--TODO: Translate later-->
      <h1>TERRATECH</h1>
      <p>We want you to feel confident in farming with data. For a limited time, we're offering temporary trial passes for our platform. Experience the precision of LoRaWAN technology before anyone else.</p>
      <button-register title="Get Now!"/>
    </div>

    <div class="subscription-container">
      <article>
        <!--TODO: Translate later-->
        <h2>Freemium</h2>
        <button-register title="Buy Now"/>
        <p>Manual plot registration: Digitize your crop information step by step.</p>
        <p>Best practices library: Access technical guides and agricultural management tutorials.</p>
        <p>Regional weather report: Check the real-time weather forecast for your area.</p>
        <p>Community forum: Connect with other farmers and get answers to basic questions.</p>
        <p>Email support: Technical assistance for using the platform.</p>
      </article>

      <article>
        <!--TODO: Translate later-->
        <h2>Premium</h2>
        <button-register title="Buy Now"/>
        <p>Everything about the Freemium plan.</p>
        <p>IoT Sensor Kit: Monitoring of soil moisture, temperature and nutrients.</p>
        <p>LoRaWAN connectivity: Your sensors work even in areas where the internet doesn't reach.</p>
        <p>Live metrics dashboard: View the real-time status of your field from anywhere.</p>
        <p>Priority support via WhatsApp: Fast assistance for any technical issues.</p>
      </article>

      <article>
        <!--TODO: Translate later-->
        <h2>Plus</h2>
        <button-register title="Buy Now"/>
        <p>Everything included in the Premium plan.</p>
        <p>Multi-user Management: Ideal for cooperatives or companies with multiple technical advisors.</p>
        <p>Traceability via QR Code: Generate smart labels so your buyers can see the origin of the product.</p>
      </article>
    </div>
  </main>

  <footer>
    <footer-content/>
  </footer>
</template>

<style scoped>
main{
  background-color: #ffffff;
  min-height: 180vh;
}
.hero-container {
  background: linear-gradient(
      to right,
      rgb(26 43 76) 0%,
      rgb(26 43 76) 30%,
      rgba(20, 30, 48, 0) 70%),
  url('/assets/hero-image-person.webp');
  background-size: cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
}
.hero-container h1 {
  color: white;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.hero-container p {
  color: white;
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.subscription-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin: 4rem auto;
  gap: 0;
}
.subscription-container article{
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.subscription-container article p{
  margin-top: 1rem;
}
.subscription-container article:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 10%;
  height: 80%;
  width: 2px;
  background: #48bb78;
}
.subscription-container h2{
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #000000;
  text-align: center;
}
.subscription-container p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 300px;
  position: relative;
  padding-left: 1.5rem;
}
.subscription-container p::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #000;
  font-weight: bold;
}
</style>