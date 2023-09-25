<script setup lang="ts">
const test = ref<string[]>([
  "RegisterEmail",
  "RegisterOTP",
  "RegisterDetails",
  "RegisterUserName",
  "RegisterBio",
]);
</script>
<template>
  <!-- <DynamicStepper test="hello" :comp="test" /> -->
  
  <Stepper />
</template>
<style scoped></style>
