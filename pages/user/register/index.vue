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

    <div class="register-progress absolute bottom-0 flex">
      <q-linear-progress
        v-for="(val, index) in progressBars"
        :key="index"
        :value="val.bar"
        size="12px"
        color="black"
        rounded
        class="q-mt-md progress-width mb-8"
      >
      </q-linear-progress>
    </div>
    <div class="row">
      <q-btn
        color="primary absolute bottom-20"
        @click="backprogress"
        :disable="compIndex >= 1 ? false : true"
        >Back</q-btn
      >
      <q-space />
      <q-btn
        color="primary absolute bottom-20 right-2"
        @click="nextprogress"
        v-if="compIndex < components.length"
        :label="progress === 5 ? 'Register' : 'Next'"
      />
    </div>
  </div>
</template>

<script setup>
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

//* progress details
let progress = ref(1);
let progressBars = ref([
  { bar: 1 },
  { bar: 0 },
  { bar: 0 },
  { bar: 0 },
  { bar: 0 },
]);

//* next progress button
const nextprogress = () => {
  if (
    progress.value <= progressBars.value.length &&
    compIndex.value <= components.length
  ) {
    progressBars.value[progress.value].bar = 1;
    progress.value++;
    compIndex.value++;
  }
};

//* back progress button
const backprogress = () => {
  if (progress.value >= 1 && compIndex.value >= 1) {
    progress.value--;
    progressBars.value[progress.value].bar = 0;
    compIndex.value--;
  }
};
</script>

<style scoped>
.progress-width {
  width: 18vw;
}
.register-progress {
  width: 95vw;
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
