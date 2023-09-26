<template>
  <img :src="src" :alt="alt" loading="lazy" :class="class" />
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  class: String,
});
</script>

<style scoped></style>
