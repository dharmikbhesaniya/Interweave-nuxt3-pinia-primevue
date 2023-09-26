<script setup>
useHead({
  title: "interweave auth",
});

const bio = ref();
</script>

<template>
  <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
  <div class="q-pa-md" style="max-width: 500px; min-width: 350px">
    <q-input v-model="bio" outlined filled autogrow />
  </div>
</template>
