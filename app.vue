<template>
  <div>
    <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
  </div>
  <br />
  <div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
      <i class="pi pi-user"></i>
    </span>
    <InputText class="border-solid border-orange-500" placeholder="Username" />
  </div>
  <br />
  <Button
    type="button"
    label="Search"
    icon="pi pi-search"
    :loading="loading"
    @click="load"
    class="bg-red-500 text-red-500"
  />
</template>
<script setup>
import { ref } from "vue";

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
