<script setup lang="ts">
useHead({
  title: "interwave",
});
const otp = ref<number>();
</script>

<template>
  <div>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <Input :model="otp" label="otp" type="number" />
  </div>
</template>
