<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="footer-content">
    <p>&copy; TerraTech, 2026 - {{t('components.footer.rights')}} | {{t('components.footer.powered')}} <a href="https://vuejs.org">Vue</a></p>
    <p><a href="https://policies.google.com/">{{t('components.footer.conditions')}}</a></p>
  </div>
</template>

<style scoped>
.footer-content{
  background: #1A2B4C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5rem;
}
.footer-content p, .footer-content p a{
  text-align: center;
  color: #ffffff;
  text-decoration: none;
}
.footer-content p a:hover{
  text-decoration: underline;
}
</style>