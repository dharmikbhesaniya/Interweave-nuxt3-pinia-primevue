<script setup>
useHead({
  title: "Username",
});

const username = ref();
</script>

<template>
  <div class="auth-inputs">
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="username"
      label="Username"
      type="text"
      outlined
      class="mt-3 auth-input"
    />
  </div>
</template>
