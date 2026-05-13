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
  <!--TODO: translate later and connect with front-->
  <button class="button-register">{{ title }}</button>
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