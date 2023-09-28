<script setup>
useHead({
  title: "Personal Details",
});

const mobile = ref();
const name = ref();
const gender = ref();
const password = ref();
const DOB = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <h2>{{ mobile }}</h2>
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <q-input
      v-model="name"
      outlined
      label="Name"
      type="text"
      class="mt-3 input-width"
    />
    <q-input
      v-model="gender"
      outlined
      label="Gender"
      type="text"
      class="mt-3 input-width"
    />
    <q-input
      v-model="DOB"
      outlined
      label="Date of birth"
      type="calender"
      class="mt-3 input-width"
    />
    <q-input
      label="Mobile Number"
      type="number"
      v-model="mobile"
      outlined
      class="mt-3 input-width"
    />
    <q-input
      v-model="password"
      outlined
      label="Password"
      type="password"
      class="mt-3 input-width"
    />
  </div>
</template>

<style scoped>
.input-width {
  width: 350px;
}
@media screen and (max-width: 1024px) {
  .input-width {
    width: 280px;
  }
}
</style>
