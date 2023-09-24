<script setup>
useHead({
    title: "Bio"
});
definePageMeta({
  middleware: "user-path-check",
  layout: "login"
});
</script>

<template>
    <h2>Bio</h2>
</template>
