<script setup lang="ts">
useHead({
  title: "Email",
});

const email = ref<string>("");
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="relative">
      <q-input
        v-model="email"
        label="Email"
        type="text"
        outlined
        class="mt-3 input-width"
      />
    </div>
    <div
      class="text-subtitle1 mt-4 flex justify-start w-[17.6rem] lg:w-[22.1rem]"
    >
      Already have an account ?
      <NuxtLink class="text-blue-500 font-bold no-underline" href="/auth/login"
        >&nbsp;Login</NuxtLink
      >
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
</style>
