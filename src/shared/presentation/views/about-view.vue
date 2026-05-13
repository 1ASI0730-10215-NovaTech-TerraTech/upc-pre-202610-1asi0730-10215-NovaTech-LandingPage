<script setup>

import FooterContentComponent from "../components/footer-content-component.vue";
import ToolbarContent from "../components/toolbar-content.vue";

import {computed, ref} from 'vue';
import { useI18n } from "vue-i18n";

const activeTab = ref('about');
const { t } = useI18n();

const contents = computed(() => ({
  about: {
    title:  t('routes.about.tabs.about.title'),
    text: t('routes.about.tabs.about.text'),
  },
  features: {
    title:  t('routes.about.tabs.features.title'),
    text: t('routes.about.tabs.features.text'),
  },
  community: {
    title:  t('routes.about.tabs.community.title'),
    text: t('routes.about.tabs.community.text'),
  },
  developers: {
    title: t('routes.about.tabs.developers.title'),
    text: t('routes.about.tabs.developers.text')
  }
}));
</script>

<template>
  <header>
    <toolbar-content/>
  </header>

  <main>
    <div class="hero-container">
      <img src="/assets/hero-image-green.webp" alt="hero-image-field"/>
    </div>

    <div class="about-container">
      <nav class="about-tabs">
        <button
            class="tab-item"
            :class="{ active: activeTab === 'about' }"
            @click="activeTab = 'about'"
        >{{t('routes.about.tabs.about.about')}}</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'features' }"
            @click="activeTab = 'features'"
        >{{t('routes.about.tabs.features.features')}}</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'community' }"
            @click="activeTab = 'community'"
        >{{t('routes.about.tabs.community.community')}}</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'developers' }"
            @click="activeTab = 'developers'"
        >{{t('routes.about.tabs.developers.developers')}}</button>
      </nav>

      <div class="about-content">
        <h2 class="dynamic-title">{{ contents[activeTab].title }}</h2>
        <p class="dynamic-text">{{ contents[activeTab].text }}</p>

        <div v-if="activeTab === 'about'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/about-the-team.webp" alt="fake-about-the-team"/>
        </div>

        <div v-if="activeTab === 'features'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/about-the-product.webp" alt="fake-about-the-product"/>
        </div>

        <div v-if="activeTab === 'community'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/community.webp" alt="fake-about-the-community"/>
        </div>

        <div v-if="activeTab === 'developers'" class="team-content">
          <article>
            <img src="/assets/luis.jpeg" alt="Luis Acuña"/>
            <h4>Acuña de la Cruz, Luis Alfredo</h4>
            <p>{{t('routes.about.tabs.developers.members.luis')}}</p>
          </article>

          <article>
            <img src="/assets/rodrigo.jpeg" alt="Rodrigo Aguilar"/>
            <h4>Aguilar Untiveros, Rodrigo Fabrizio</h4>
            <p>{{t('routes.about.tabs.developers.members.rodrigo')}}</p>
          </article>

          <article>
            <img src="/assets/guillermo.jpeg" alt="Guillermo Howard"/>
            <h4>Howard Robles, Guillermo Arturo</h4>
            <p>{{t('routes.about.tabs.developers.members.guillermo')}}</p>
          </article>

          <article>
            <img src="/assets/breithner.jpeg" alt="Breithner Perez"/>
            <h4>Perez Encarnacion, Breithner Rodolfo</h4>
            <p>{{t('routes.about.tabs.developers.members.breithner')}}</p>
          </article>

          <article>
            <img src="/assets/jorge.jpeg" alt="Jorge Retuerto"/>
            <h4>Retuerto Rodríguez, Jorge Manuel</h4>
            <p>{{t('routes.about.tabs.developers.members.jorge')}}</p>
          </article>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <footer-content-component/>
  </footer>
</template>

<style scoped>
main {
  background: #ffffff;
}
.hero-container img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.about-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 1500px;
}
.about-tabs {
  display: flex;
  justify-content: center;
  gap: 3rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 3rem;
}
.tab-item {
  background: none;
  border: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-transform: capitalize;
}
.tab-item:hover {
  color: #000;
}
.tab-item.active {
  color: #000;
}
.tab-item.active::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
.about-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.about-content h2{
  font-size: 64px;
  margin-bottom: 2rem;
}
.about-content p {
  transition: opacity 0.3s ease;
}

.team-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 1rem;
  animation: fadeIn 0.6s ease-out;
  width: 1000px;
  justify-self: center;
}
.about-image{
  display: block;
  margin-top: 4rem;
  width: 800px;
  height: 500px;
}
.team-content article {
  background: #ffffff;
  border: 1px solid #eef2ee;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team-content article:hover {
  transform: translateY(-10px);
  border-color: #28a745;
  box-shadow: 0 12px 30px rgba(40, 167, 69, 0.15);
}
.team-content article img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid #f0fdf4;
  transition: transform 0.3s ease;
}
.team-content article:hover img {
  transform: scale(1.05);
  border-color: #28a745;
}
.team-content article h4 {
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  position: relative;
  padding-bottom: 10px;
}
.team-content article h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: #28a745;
  border-radius: 2px;
}
.team-content article p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: center;
  min-height: auto !important;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>