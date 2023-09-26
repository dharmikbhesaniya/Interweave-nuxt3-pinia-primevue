<script setup></script>

<template>
  <LazyDynamicStepper
    :comp="[
      'LazyRegisterEmail',
      'LazyRegisterOTP',
      'LazyRegisterDetails',
      'LazyRegisterUserName',
      'LazyRegisterBio',
    ]"
  />
</template>

<style scoped></style>
