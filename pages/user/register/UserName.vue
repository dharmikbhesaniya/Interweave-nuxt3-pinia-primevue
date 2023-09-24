<script setup lang="ts">
useHead({
  title: "UserName",
});
definePageMeta({
  middleware: "user-path-check",
  layout: "login",
});
</script>

<template>
  <h2>UserName</h2>
</template>
