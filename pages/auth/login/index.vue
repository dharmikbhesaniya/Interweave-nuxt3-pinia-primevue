<script setup>
useHead({
  title: "Login",
});
definePageMeta({
  middleware: "user-auth",
  layout: "auth",
});

const email = ref();
const password = ref();
</script>

<template>
  <div class="auth-content">
    <div class="auth-img">
      <Image src="/images/login-side.jpg" alt="logo" class="w-[30rem]" />
    </div>
    <div class="auth-components">
      <div class="auth-inputs">
        <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
        <q-input
          v-model="email"
          label="Email"
          type="text"
          outlined
          class="mt-3 auth-input"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          class="mt-3 auth-input"
        />
        <div class="mt-2 text-left auth-input">
          <q-btn flat color="primary font-bold" class="lg:text-subtitle1"
            >forget password ?
          </q-btn>
        </div>
        <div class="mt-4 flex justify-between auth-input">
          <q-btn color="primary font-semibold px-6 py-2 auth-input">Login</q-btn>
        </div>
        <div class="auth-input text-[16px] mt-4 flex justify-center">
          don't have an account ?
          <NuxtLink
            class="text-blue-700 font-semibold no-underline"
            href="/auth/register"
          >
            &nbsp;Register</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
