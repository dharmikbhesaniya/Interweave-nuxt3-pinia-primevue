<script setup lang="ts">
import {
  ComputedOptions,
  ConcreteComponent,
  MethodOptions,
} from "nuxt/dist/app/compat/capi";

//* component details
export interface Props {
  comp: string[];
  test?: string;
}

const props = withDefaults(defineProps<Props>(), {
  test: "hello",
});

// const components: (
//   | string
//   | ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions>
// )[] = [];
const components: any = [];
const compIndex = ref<number>(0);
const step = ref<number>(1);
const progressBars = ref<number[]>([]);

const currentComponent = computed(() => {
  return components[compIndex.value];
});

for (const val of props.comp) {
  //!  there are component can't render
  //^ this is not working resolveComponent(val)

  components.push(resolveComponent(val));
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

<!-- ----------------------------progress line divided into many parts---------------------------- -->

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
    {{ progressBars }}<br />{{ components }}
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
