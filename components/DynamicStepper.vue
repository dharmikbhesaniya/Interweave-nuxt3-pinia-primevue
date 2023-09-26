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

<template>
  <div class="main-register flex-1 h-full relative">
    <div
      class="register-content flex mb-16 justify-evenly pt-4 pb-10 items-center overflow-scroll h-[28rem]"
    >
      <div class="register-img">
        <Image
          src="/images/login-side.jpg"
          alt="logo"
          class="w-[30rem] hide-img"
        />
      </div>
      <div class="register-form">
        <component
          :is="currentComponent"
          v-if="compIndex < components.length"
        />
      </div>
    </div>
    <div
      class="register-progress absolute bottom-0 grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-x-2.5"
    >
      <q-linear-progress
        v-for="(val, index) in progressBars"
        :key="index"
        :value="val"
        size="4px"
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
        :label="step === 5 ? 'Register' : 'Save & Continue'"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-width {
  width: auto;
}
.register-progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.register-content::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 865px) {
  .hide-img {
    display: none;
  }
}
</style>
