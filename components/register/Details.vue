<script setup>
useHead({
  title: "Personal Details",
});

const mobile = ref();
const name = ref();
const password = ref();
</script>

<template>
  <div class="auth-inputs">
    <h2>{{ mobile }}</h2>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input v-model="name" outlined label="Name" type="text" class="mt-3 auth-input" />
    <q-input
      label="Mobile Number"
      type="number"
      v-model="mobile"
      outlined
      class="mt-3 auth-input"
    />
    <q-input
      v-model="password"
      outlined
      label="Password"
      type="password"
      class="mt-3 auth-input"
    />
  </div>
</template>
