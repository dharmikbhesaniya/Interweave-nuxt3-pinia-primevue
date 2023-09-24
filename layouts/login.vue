<template>
  <div class="main-login">
    <div class="login-img">
      <h2>Login image</h2>
      <slot name="img" />
    </div>
    <div class="login-content">
      <slot />
    </div>
    <Stepper />
  </div>
</template>

<script setup></script>

<style scoped></style>
