<script setup>
useHead({
  title: "Username",
});

const username = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="username"
      label="Username"
      type="text"
      outlined
      class="mt-3 input-width"
    />
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
