<template>
  <div class="main-register flex-1 h-full relative">
    <div class="register-content flex mb-16">
      <div class="register-img">
        <h4>Img</h4>
      </div>
      <q-space />
      <div class="register-form">
        <div v-if="progress === 0.2">
          <h4>Email : {{ progress }}</h4>
        </div>
        <div v-if="progress === 0.4">
          <RegisterOTP />
        </div>
        <div v-if="progress === 0.6">
          <RegisterDetails />
        </div>
        <div v-if="progress === 0.8">
          <RegisterUserName />
        </div>
        <div v-if="progress === 1">
          <RegisterBio />
        </div>
      </div>
    </div>

    <div class="register-progress absolute bottom-0">
      <q-linear-progress
        :value="progress"
        size="15px"
        color="black"
        rounded
        class="q-mt-md w-[40rem] mb-8"
      >
      </q-linear-progress>
      <div class="row">
        <q-btn
          color="primary"
          :disable="progress === 0.2 ? true : false"
          @click="nextAndBack('back')"
          >Back</q-btn
        >
        <q-space />
        <q-btn
          v-if="progress === 1"
          color="primary"
          @click="nextAndBack('next')"
          >Register</q-btn
        >
        <q-btn v-else color="primary" @click="nextAndBack('next')">Next</q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Email",
});

definePageMeta({
  middleware: "user-path-check",
});

const progress = ref(0.2);

const nextAndBack = (btn) => {
  if (btn == "next")
    progress.value < 1 ? (progress.value += 0.2) : progress.value;
  else if (btn == "back")
    progress.value > 0.2 ? (progress.value -= 0.2) : progress.value;

  progress.value == 0.6000000000000001
    ? (progress.value = 0.6)
    : progress.value;
  progress.value == 0.39999999999999997
    ? (progress.value = 0.4)
    : progress.value;
  return progress.value.toFixed();
};
</script>

<style scoped></style>
