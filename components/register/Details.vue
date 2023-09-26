<script setup>
useHead({
  title: "interwave",
});

const mobile = ref();
const name = ref();
const gender = ref();
const password = ref();
const DOB = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-start min-h-[30rem] max-h-[50rem]"
  >
    <h2>{{ mobile }}</h2>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      label="mobile"
      type="number"
      v-model="mobile"
      outlined
      class="mt-3 inpu-width"
    />
    <q-input
      v-model="name"
      outlined
      label="name"
      type="text"
      class="mt-3 inpu-width"
    />
    <q-input
      v-model="gender"
      outlined
      label="gender"
      type="text"
      class="mt-3 inpu-width"
    />
    <q-input
      v-model="password"
      outlined
      label="password"
      type="password"
      class="mt-3 inpu-width"
    />
    <q-input
      v-model="DOB"
      outlined
      label="date of birth"
      type="calender"
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
