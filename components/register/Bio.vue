<script setup>
useHead({
  title: "interweave auth",
});

const bio = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-start min-h-[30rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="q-pa-md" style="max-width: 500px; min-width: 350px">
      <q-input
        v-model="bio"
        outlined
        filled
        autogrow
        class="mt-3 input-width"
      />
    </div>
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
