<script setup lang="ts">
useHead({
  title: "Email",
});

const email = ref<string>("");
</script>

<template>
  <div class="auth-inputs">
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="relative">
      <q-input
        v-model="email"
        label="Email"
        type="text"
        outlined
        class="mt-3 auth-input"
      />
    </div>
    <div class="text-[16px] mt-4 flex justify-start auth-input">
      Already have an account ?
      <NuxtLink class="text-blue-700 font-semibold no-underline" href="/auth/login"
        >&nbsp;Login</NuxtLink
      >
    </div>
  </div>
</template>

<script setup></script>
