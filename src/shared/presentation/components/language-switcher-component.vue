<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

// Valor local para el selector
const selectedLocale = ref('en');

// Cambiar el idioma cuando se selecciona
const changeLocale = (value) => {
  i18n.locale.value = value;
  selectedLocale.value = value;
};

// Sincronizar cuando el idioma cambia desde fuera
watch(() => i18n.locale.value, (newVal) => {
  selectedLocale.value = newVal;
});

// Inicializar al montar
onMounted(() => {
  selectedLocale.value = i18n.locale.value;
});
</script>

<template>
  <div class="translate-button">
    <pv-select-button
        :model-value="selectedLocale"
        @update:model-value="changeLocale"
        :options="['en', 'es']"
    >
      <template #option="slotProps">
        <span class="locale-text">{{ slotProps.option.toUpperCase() }}</span>
      </template>
    </pv-select-button>
  </div>
</template>

<style scoped>
.translate-button {
  margin-right: 5rem;
}

/* Estilos para el contenedor del selectbutton */
:deep(.p-selectbutton) {
  display: inline-flex !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  background: #22c55e !important;
  border: 2px solid #22c55e !important;
  gap: 0 !important;
  box-shadow: 0 2px 4px rgba(34, 197, 94, 0.2) !important;
}

/* Estilos para todos los botones */
:deep(.p-selectbutton .p-togglebutton) {
  background: transparent !important;
  border: none !important;
  color: white !important;
  padding: 0.7rem 2rem !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  letter-spacing: 0.3px !important;
  transition: all 0.25s ease !important;
  border-radius: 0 !important;
  position: relative !important;
  cursor: pointer !important;
}

/* Efecto hover para botones no seleccionados */
:deep(.p-selectbutton .p-togglebutton:not(.p-togglebutton-checked):hover) {
  background: rgba(255, 255, 255, 0.12) !important;
  color: white !important;
}

/* Estilos para el botón seleccionado */
:deep(.p-selectbutton .p-togglebutton-checked) {
  background: white !important;
  color: #166534 !important;
  border-radius: 6px !important;
  margin: 3px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}

/* Asegurar que el texto del botón seleccionado sea verde */
:deep(.p-selectbutton .p-togglebutton-checked .locale-text) {
  color: #166534 !important;
}

/* Asegurar que el texto de los botones no seleccionados sea blanco */
:deep(.p-selectbutton .p-togglebutton:not(.p-togglebutton-checked) .locale-text) {
  color: white !important;
}

/* Transición suave para el texto */
.locale-text {
  transition: color 0.25s ease !important;
}

/* Remover el efecto de ripple */
:deep(.p-ink) {
  display: none !important;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  :deep(.p-selectbutton .p-togglebutton) {
    padding: 0.5rem 1.5rem !important;
    font-size: 0.8rem !important;
  }
}
</style>