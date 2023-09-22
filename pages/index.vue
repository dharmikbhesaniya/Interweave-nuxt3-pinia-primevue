<script setup>
useHead({
  title: "Interwave",
});

import { QSpinnerGears } from "quasar";
const q = useQuasar();

function showNotif() {
  q.notify({
    message: "Jim pinged you.",
    icon: "announcement",
  });
}

function showDefault() {
  q.notify({
    spinner: true,
    message: "Please wait...",
    timeout: 2000,
  });
}

function showCustom() {
  q.notify({
    spinner: QSpinnerGears,
    message: "Working...",
    timeout: 2000,
  });
}
</script>

<template>
  <div class="text-h3 q-pa-md">Notify Plugin - Quasar</div>
  <div class="text-h5 q-pa-md">With icon</div>
  <div class="q-pa-md">
    <q-btn color="primary" @click="showNotif" label="Show Notification" />
  </div>
  <div class="q-pa-md">
    <div class="text-h5 q-pb-md">With Spinner</div>
    <div class="row q-gutter-sm">
      <q-btn color="primary" @click="showDefault" label="Default spinner" />
      <q-btn color="primary" @click="showCustom" label="Custom spinner"/>
    </div>
  </div>
  <hr />
  <div class="text-h3 q-pa-md">Button</div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>
</template>
