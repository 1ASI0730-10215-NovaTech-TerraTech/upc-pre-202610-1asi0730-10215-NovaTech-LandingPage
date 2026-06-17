<script setup>
import LanguageSwitcher from "./language-switcher-component.vue";
import ButtonRegisterComponent from "./button-register-component.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <nav class="toolbar-content">
    <div class="toolbar-content-image">
      <img src="/assets/terratech.png" alt="terratech-logo"/>
    </div>
    <div class="toolbar-content-text">
      <ul>
        <li>
          <router-link
              to="/home"
              class="nav-link"
              :class="{ 'active-link': isActive('/home') || isActive('/') }"
          >
            {{ t('components.toolbar.home') }}
          </router-link>
        </li>
        <li>
          <router-link
              to="/about"
              class="nav-link"
              :class="{ 'active-link': isActive('/about') }"
          >
            {{ t('components.toolbar.about') }}
          </router-link>
        </li>
        <li>
          <router-link
              to="/subscription"
              class="nav-link"
              :class="{ 'active-link': isActive('/subscription') }"
          >
            {{ t('components.toolbar.subscription') }}
          </router-link>
        </li>
      </ul>
      <button-register-component :title="t('components.toolbar.button-register')"/>
      <language-switcher/>
    </div>
  </nav>
</template>

<style scoped>
.toolbar-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #30c554;
  width: 100%;
  align-items: center;
}
.toolbar-content-image img {
  height: 90px;
  width: 125px;
}
.toolbar-content-text, .toolbar-content-text ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
}
.toolbar-content-text ul {
  list-style: none;
}

/* Estilos para los enlaces del menú */
.nav-link {
  font-size: 20px;
  font-weight: 100;
  text-decoration: none;
  color: #000000;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 4px;
  position: relative;
}

.nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
}

/* Enlace activo: texto blanco y resaltado rectangular encima */
.nav-link.active-link {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: 600;
}

.nav-link.active-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #ffffff;
  border-radius: 0 0 2px 2px;
}

.button-register {
  color: black;
  height: 60px;
  width: 200px;
  background: none;
  border-color: #1A2B4C;
  border-radius: 0;
  border-style: solid;
  font-size: 20px;
  font-weight: bold;
}
</style>