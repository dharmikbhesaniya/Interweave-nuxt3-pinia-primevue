<script setup lang="ts">
useHead({
  title: "Interwave",
});

const email = ref<string>("");
</script>

<template>
  <div>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <Input :model="email" label="email" type="text" />
  </div>
</template>
