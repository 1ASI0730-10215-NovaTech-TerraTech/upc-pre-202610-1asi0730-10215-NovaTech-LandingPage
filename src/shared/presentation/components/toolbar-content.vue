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
      <div class="menu-container">
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
      </div>
      <div class="separator"></div>
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

.toolbar-content-text {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
}

/* Contenedor que engloba los 3 botones con fondo verde */
.menu-container {
  background-color: #00BB31;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-container ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
}

/* Cada li debe tener ancho fijo */
.menu-container ul li {
  flex: 0 0 140px;
  min-width: 140px;
  max-width: 140px;
  text-align: center;
}

/* Estilos para los enlaces del menú */
.nav-link {
  font-size: 20px;
  font-weight: 100;
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  border-radius: 4px;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  background: transparent;
}

.nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
}

/* Enlace activo */
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

/* Raya separadora blanca vertical */
.separator {
  width: 4px;
  height: 50px;
  background-color: #ffffff;
  flex-shrink: 0;
  opacity: 0.8;
  border-radius: 2px;
}
</style>