<script setup>
useHead({
    title: "UserName"
});
definePageMeta({
  middleware: "user-path-check",
});
</script>

<template>
    <h2>UserName</h2>
</template>
