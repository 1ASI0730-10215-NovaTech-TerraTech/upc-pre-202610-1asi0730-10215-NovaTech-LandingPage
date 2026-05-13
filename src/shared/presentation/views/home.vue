<script setup>

import ToolbarContent from "../components/toolbar-content.vue";
import FooterContent from "../components/footer-content.vue";
import ButtonRegister from "../components/button-register.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>

  <header>
    <toolbar-content/>
  </header>

  <main>
    <section class="hero-container">
      <div class="hero-content-text">
        <!--TODO: Translate later-->
        <h1>{{t('routes.home.hero.title')}}</h1>
        <p>{{t('routes.home.hero.subtitle')}}</p>
        <button-register :title="t('routes.home.hero.button')"/>
      </div>
      <div class="hero-content-image"/>
    </section>

    <section class="features-container">
      <!--TODO: Translate later-->
      <h1>{{t('routes.home.features.title')}}</h1>
      <div class="features-content-articles">
        <article>
          <img src="/assets/iot-sensors.webp" alt="iot-sensor"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.features.iot.title')}}</h2>
          <h3>{{t('routes.home.features.iot.subtitle')}}</h3>
          <p>&oplus;  <a href="#">{{t('routes.home.features.see-more')}}</a></p>
        </article>

        <article>
          <img src="/assets/fertility-map.webp" alt="fertility-map"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.features.map.title')}}</h2>
          <h3>{{t('routes.home.features.map.subtitle')}}</h3>
          <p>&oplus;  <a href="#">{{t('routes.home.features.see-more')}}</a></p>
        </article>

        <article>
          <img src="/assets/predictive-alerts.webp" alt="predictive-alerts"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.features.alerts.title')}}</h2>
          <h3>{{t('routes.home.features.alerts.subtitle')}}</h3>
          <p>&oplus;  <a href="#">{{t('routes.home.features.see-more')}}</a></p>
        </article>
      </div>
    </section>

    <section class="reviews-container">
      <!--TODO: Translate later-->
      <h1>{{t('routes.home.reviews.title')}}</h1>
      <div class="reviews-content-article">
        <article>
          <img src="/assets/community.webp" alt="community"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.reviews.review-01.title')}}</h2>
          <p>{{t('routes.home.reviews.review-01.subtitle')}}</p>
        </article>
        <article>
          <img src="/assets/ehr-certificate.webp" alt="ehr-certificate"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.reviews.review-02.title')}}</h2>
          <p>{{t('routes.home.reviews.review-02.subtitle')}}</p>
        </article>

        <article>
          <img src="/assets/lorawan-certificate.webp" alt="lorawan-certificate"/>
          <!--TODO: Translate later-->
          <h2>{{t('routes.home.reviews.review-03.title')}}</h2>
          <p>{{t('routes.home.reviews.review-03.subtitle')}}</p>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <footer-content/>
  </footer>

</template>

<style scoped>
.hero-container {
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 50vh;
  width: 100%;
}
.hero-content-text {
  background-color: #1A2B4C;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-content-text h1{
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.hero-content-text p{
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}
.hero-content-image{
  background-image: url('/assets/hero-image-field.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}


.features-container {
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: left;
}
.features-container h1{
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: bold;
}
.features-content-articles{
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
}
.features-content-articles article{
  flex: 1;
  min-width: 300px;
  border: 2px solid #28a745;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  transition: transform 0.3s ease;
}
.features-content-articles article:hover{
  transform: translateY(-5px);
}
.features-content-articles img{
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 2px solid #28a745;
}
.features-content-articles h2{
  text-align: center;
  margin-bottom: 2rem;
}
.features-content-articles h3 {
  color: #444;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  margin: 0 1.5rem;
  text-align: center;
  flex-grow: 1;
}
.features-content-articles p {
  text-align: right;
  margin: 1rem 1.5rem 0 0;
  font-weight: bold;
  color: #28a745;
}
.features-content-articles a {
  text-decoration: none;
  color: #28a745;
  font-size: 0.9rem;
}
.features-content-articles a:hover {
  text-decoration: underline;
}

.reviews-container {
  padding: 4rem 2rem;
  background: #ffffff;
}
.reviews-container h1{
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 3rem;
  font-weight: bold;
}
.reviews-content-article {
  display: flex;
  gap: 0;
  justify-content: center;
  flex-wrap: wrap;
}
.reviews-content-article article {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
.reviews-content-article img{
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}
.reviews-content-article article h2,
.reviews-content-article article p {
  background-color: #c9e9cc;
  padding: 0 1.5rem;
  margin: 0;
  text-align: center;
}
.reviews-content-article h2 {
  padding-top: 1.5rem !important;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
}
.reviews-content-article p {
  padding-top: 1rem !important;
  padding-bottom: 2rem !important;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
  flex-grow: 1;
}

</style>