<script setup>

import LanguageSwitcher from "./language-switcher-component.vue";
import ButtonRegister from "./button-register.vue";
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
        <li><a href="#">{{ t('components.toolbar.home') }}</a></li>
        <li><a href="#">{{ t('components.toolbar.about') }}</a></li>
        <li><a href="#">{{ t('components.toolbar.subscription') }}</a></li>
      </ul>
      <button-register :title="t('components.toolbar.button-register')"/>
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