<script setup>
useHead({
  title: "Login",
});
definePageMeta({
  middleware: "user-auth",
});

const email = ref();
const password = ref();
</script>

<template>
  <div
    class="register-content justify-evenly flex mb-16 pb-10 items-stretch overflow-scroll h-[34rem]"
  >
    <div class="register-img lg:basis-1/2 self-center mt-20 lg:block hidden">
      <Image src="/images/login-side.jpg" alt="logo" class="w-[30rem]" />
    </div>
    <div class="self-center justify-items-center basis-1/2 mt-10">
      <div
        class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[48rem]"
      >
        <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
        <q-input
          v-model="email"
          label="Email"
          type="text"
          outlined
          class="mt-3 input-width"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          class="mt-3 input-width"
        />
        <div
          class="text-subtitle1 mt-4 flex justify-start w-[17.6rem] lg:w-[22.1rem]"
        >
          don't have an account ?
          <NuxtLink
            class="text-blue-500 font-bold no-underline"
            href="/auth/register"
          >
            &nbsp;Register</NuxtLink
          >
        </div>
        <div class="mt-4 flex justify-between w-[17.7rem] lg:w-[22.1rem]">
          <q-btn color="primary font-bold pr-6 pl-6">Login</q-btn>
          <q-btn flat color="primary font-bold">forget password ?</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-width {
  width: 350px;
}
@media screen and (max-width: 1024px) {
  .input-width {
    width: 280px;
  }
}
.register-content::-webkit-scrollbar {
  display: none;
}
</style>
