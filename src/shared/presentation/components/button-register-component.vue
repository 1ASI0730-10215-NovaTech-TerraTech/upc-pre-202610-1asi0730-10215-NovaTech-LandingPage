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
  <a href="https://terratech-frontend.netlify.app/">
    <button class="button-register" href="https://terratech-frontend.netlify.app/">{{ title }}</button>
  </a>
</template>

<style scoped>
.button-register {
  background-color: #00BB31;
  color: white;
  font-weight: bold;
  padding: 1px 2rem;
  height: 50px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: fit-content;
}
.button-register:hover {
  background-color: #218838;
}
</style>