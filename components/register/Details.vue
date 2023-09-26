<script setup>
useHead({
  title: "interweave auth",
});

const mobile = ref();
const name = ref();
const gender = ref();
const password = ref();
const DOB = ref();
</script>

<template>
  <div>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <Input :model="mobile" label="mobile" type="number" />
    <Input :model="name" label="name" type="text" />
    <Input :model="gender" label="gender" type="text" />
    <Input :model="password" label="password" type="password" />
    <Input :model="DOB" label="date of birth" type="calender" />
  </div>
</template>
