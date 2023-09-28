<script setup>
const test = ref([
  "LazyRegisterEmail",
  "LazyRegisterOTP",
  "LazyRegisterDetails",
  "LazyRegisterUserName",
  "LazyRegisterBio",
]);

useHead({
  title: "Register",
});

definePageMeta({
  middleware: "user-auth",
});
</script>

<template>
  <LazyDynamicStepper :comp="test" />
</template>

<style scoped></style>
 