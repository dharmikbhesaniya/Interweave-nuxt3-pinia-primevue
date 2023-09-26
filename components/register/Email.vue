<script setup lang="ts">
useHead({
  title: "Interwave",
});

const email = ref<string>("");
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-start min-h-[30rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="email"
      label="email"
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
@media screen and (max-width: 865px) {
  .input-width {
    width: 250px;
  }
}
</style>
