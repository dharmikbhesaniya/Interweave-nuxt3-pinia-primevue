<script setup>
useHead({
  title: "interweave auth",
});

const username = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-start min-h-[30rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="username"
      label="username"
      type="text"
      outlined
      class="mt-3 inpu-width"
    />
  </div>
</template>

<style scoped>
.inpu-width {
  width: 350px;
}
@media screen and (max-width: 865px) {
  .inpu-width {
    width: 250px;
  }
}
</style>
