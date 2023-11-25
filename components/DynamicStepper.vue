<script setup lang="ts">
//* component details
export interface Props {
  comp: string[];
}

const props = withDefaults(defineProps<Props>(), {});

const components: any[] = [];
const compIndex = ref<number>(0);
const step = ref<number>(1);
const progressBars = ref<number[]>([]);

const currentComponent = computed(() => {
  return components[compIndex.value];
});

for (const val of props.comp) {
  components.push(val);
  if (progressBars.value.length == 0) progressBars.value.push(1);
  else progressBars.value.push(0);
}

//* next step button
const nextProgress = () => {
  if (step.value < progressBars.value.length && compIndex.value <= components.length) {
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

<template>
  <div class="main-register relative">
    <div class="auth-content">
      <div class="auth-img">
        <Image src="/images/login-side.jpg" alt="logo" class="w-[30rem]" />
      </div>
      <div class="auth-components">
        <component :is="currentComponent" v-if="compIndex < components.length" />
      </div>
    </div>
    <div class="auth-progress-bar">
      <q-linear-progress
        v-for="(val, index) in progressBars"
        :key="index"
        :value="val"
        size="4px"
        color="blue-6"
        rounded
        class="q-mt-md w-auto mb-0"
      >
      </q-linear-progress>
    </div>
    <div class="row">
      <q-btn
        color="primary"
        @click="backProgress"
        class="absolute bottom-12 font-bold tracking-wide"
        flat
        :disable="compIndex >= 1 ? false : true"
        >Back</q-btn
      >
      <q-space />
      <q-btn
        color="primary absolute bottom-12 right-2"
        @click="nextProgress"
        v-if="compIndex < components.length"
        :label="step === 5 ? 'Register' : step === 1 ? 'Send Otp' : 'Next'"
      />
    </div>
  </div>
</template>
