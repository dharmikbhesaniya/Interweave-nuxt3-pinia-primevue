<script setup lang="ts">
useHead({
  title: "interwave",
});
const otp = ref<number>();
</script>

<template>
   <div
    class="grid grid-cols-1 justify-items-center content-start min-h-[30rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="otp"
      label="otp"
      type="number"
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
