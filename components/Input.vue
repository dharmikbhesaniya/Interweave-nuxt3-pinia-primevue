<template>
  <div>
    <q-input
      outlined
      :v-model="model"
      :label="label"
      :loading="loading"
      :type="type"
      class="w-80 mt-3"
    />
  </div>
</template>

<script setup>
const loading = ref(false);

defineProps({
  model: [String, Number],
  label: String,
  type: [String, Number],
});
</script>

<style scoped></style>
