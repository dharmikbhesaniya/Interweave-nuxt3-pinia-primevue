<script setup>
useHead({
  title: "interweave auth",
});

const username = ref();
</script>

<template>
  <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
  <Input :model="username" label="username" type="text" />
</template>
