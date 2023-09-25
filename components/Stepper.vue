<!-- ----------------------------progress line divided into 5 parts---------------------------- -->
<template>
  <div class="main-register flex-1 h-full relative">
    <div class="register-content flex mb-16">
      <div class="register-img">
        <h4>Img</h4>
      </div>
      <q-space />
      <div class="register-form">
        <component
          :is="currentComponent"
          v-if="compIndex < components.length"
        />
      </div>
    </div>
    {{ components }}
    <div
      class="register-progress absolute bottom-0 flex flex-row grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-x-2.5"
    >
      <q-linear-progress
        v-for="(val, index) in progressBars"
        :key="index"
        :value="val"
        size="5px"
        color="deep-purple-6"
        rounded
        class="q-mt-md progress-width mb-8"
      >
      </q-linear-progress>
    </div>
    <div class="row">
      <q-btn
        color="primary absolute bottom-20"
        @click="backProgress"
        :disable="compIndex >= 1 ? false : true"
        >Back</q-btn
      >
      <q-space />
      <q-btn
        color="primary absolute bottom-20 right-2"
        @click="nextProgress"
        v-if="compIndex < components.length"
        :label="step === 5 ? 'Register' : 'Next'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//* component details

let compIndex = ref<number>(0);
let components = [
  resolveComponent("RegisterEmail"),
  resolveComponent("RegisterOTP"),
  resolveComponent("RegisterDetails"),
  resolveComponent("RegisterUserName"),
  resolveComponent("RegisterBio"),
];
const currentComponent = computed(() => {
  return components[compIndex.value];
});

//* progress details
let step = ref<number>(1);
let progressBars = ref<number[]>([1, 0, 0, 0, 0]);

//* next step button
const nextProgress = () => {
  if (
    step.value < progressBars.value.length &&
    compIndex.value <= components.length
  ) {
    progressBars.value[step.value] = 1;
    step.value++;
    compIndex.value++;
  }
};

//* back progress button
const backProgress = () => {
  if (step.value >= 1 && compIndex.value >= 1) {
    step.value--;
    progressBars.value[step.value] = 0;
    compIndex.value--;
  }
};
</script>

<style scoped>
.progress-width {
  width: auto;
}
.register-progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 400px) {
  .progress-width {
    width: 16vw;
  }
  .register-progress {
    width: 85vw;
    display: flex;
    justify-content: space-between;
  }
}
</style>

<!-- ----------------------------straight line progress---------------------------- -->
<!-- <template>
  <div class="main-register flex-1 h-full relative">
    <div class="register-content flex mb-16">
      <div class="register-img">
        <h4>Img</h4>
      </div>
      <q-space />
      <div class="register-form">
        <component
          :is="currentComponent"
          v-if="compIndex < components.length"
        />
      </div>
    </div>

    <div class="register-progress absolute bottom-0">
      <q-linear-progress
        :value="progress"
        size="12px"
        color="black"
        rounded
        class="q-mt-md progress-width mb-8"
      >
      </q-linear-progress>
      <div class="row">
        <q-btn
          color="primary"
          :disable="compIndex === 0 ? true : false"
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

//* component details
const Email = resolveComponent("RegisterEmail");
const Bio = resolveComponent("RegisterBio");
const Details = resolveComponent("RegisterDetails");
const UserName = resolveComponent("RegisterUserName");
const OTP = resolveComponent("RegisterOTP");

let compIndex = ref(0);
let components = [Email, OTP, Details, UserName, Bio];

const currentComponent = computed(() => {
  return components[compIndex.value];
});

const progress = ref(0.2);

//* next and back button 
const nextAndBack = (btn) => {
  if (btn == "next")
    progress.value < 1 ? ((progress.value += 0.2), compIndex.value++) : "";
  else if (btn == "back")
    compIndex.value >= 1 ? ((progress.value -= 0.2), compIndex.value--) : "";

  return progress.value.toFixed();
};
</script>

<style scoped>
.progress-width {
  width: 95vw;
}
@media screen and (max-width: 400px) {
  .progress-width {
    width: 85vw;
  }
}
</style> -->
