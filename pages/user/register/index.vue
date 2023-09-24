<template>
  <h2>Email</h2>
</template>

<script setup>
useHead({
  title: "Email",
});
definePageMeta({
  middleware: "user-path-check",
  layout: "login"
});
</script>
