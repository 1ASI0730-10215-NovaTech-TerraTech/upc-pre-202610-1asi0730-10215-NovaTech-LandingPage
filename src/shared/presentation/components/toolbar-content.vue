<script setup>

import LanguageSwitcher from "./language-switcher-component.vue";
import ButtonRegisterComponent from "./button-register-component.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>

  <nav class="toolbar-content">
    <div class="toolbar-content-image">
      <img src="/assets/terratech.png" alt="terratech-logo"/>
    </div>
    <div class="toolbar-content-text">
      <ul>
        <li><router-link to="/home">{{ t('components.toolbar.home') }}</router-link></li>
        <li><router-link to="/about">{{ t('components.toolbar.about') }}</router-link></li>
        <li><router-link to="/subscription">{{ t('components.toolbar.subscription') }}</router-link></li>
      </ul>
      <button-register-component :title="t('components.toolbar.button-register')"/>
      <language-switcher/>
    </div>
  </nav>

</template>

<style scoped>
.toolbar-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #30c554;
  width: 100%;
  align-items: center;
}
.toolbar-content-image img{
  height: 90px;
  width: 125px;
}
.toolbar-content-text, .toolbar-content-text ul{
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
}
.toolbar-content-text ul{
  list-style: none;
}
.toolbar-content-text ul li a{
  font-size: 20px;
  font-weight: 100;
  text-decoration: none;
}
.button-register{
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