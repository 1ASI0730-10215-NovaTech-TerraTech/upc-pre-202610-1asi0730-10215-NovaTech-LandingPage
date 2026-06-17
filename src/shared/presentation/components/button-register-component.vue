<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Register',
  },
})
</script>

<template>
  <a href="https://terratech-frontend.netlify.app/" class="button-link">
    <button class="button-register">{{ title }}</button>
  </a>
</template>

<style scoped>
.button-link {
  display: block;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  flex: 0 0 200px;
  text-decoration: none;
}

.button-register {
  background-color: #00BB31;
  color: white;
  font-weight: bold;
  padding: 1px 2rem;
  height: 50px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  box-sizing: border-box;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}
.button-register:hover {
  background-color: #28a745;
}
</style>