<script setup>
const test = ref([
  "LazyRegisterEmail",
  "LazyRegisterOTP",
  "LazyRegisterDetails",
  "LazyRegisterUserName",
  "LazyRegisterBio",
]);
</script>

<template>
  <LazyDynamicStepper :comp="test" />
</template>

<style scoped></style>
