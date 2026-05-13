<script setup>

</script>

<template>
  <div class="translate-button">
    <pv-select-button v-model="$i18n.locale" :options="$i18n.availableLocales">
      <template #option="slotProps">
        <span>{{ slotProps.option.toUpperCase() }}</span>
      </template>
    </pv-select-button>
  </div>
</template>

<style scoped>
.translate-button {
  margin-right: 5rem;
}

:deep(.p-selectbutton button),
:deep(.p-selectbutton .p-togglebutton) {
  background-color: #f0fdf4 !important;
  border: 1px solid #22c55e !important;
  color: #166534 !important;
}

:deep(.p-selectbutton .p-togglebutton-checked),
:deep(.p-selectbutton .p-highlight) {
  background-color: #22c55e !important;
  color: white !important;
}
</style>