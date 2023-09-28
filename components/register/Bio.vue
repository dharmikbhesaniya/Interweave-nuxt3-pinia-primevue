<script setup>
useHead({
  title: "Bio",
});

const bio = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="q-pa-md" style="max-width: 400px; min-width: 300px">
      <q-input
        type="textarea"
        v-model="bio"
        label="Bio (optional)"
        outlined
        autogrow
      />
    </div>
  </div>
</template>

<style scoped>

</style>
