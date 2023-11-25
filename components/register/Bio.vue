<script setup>
useHead({
  title: "Interwave",
});

const allgender = ref(["Male", "Female", "Other"]);

const gender = ref("Male");
const DOB = ref("");
let qDateClose = ref(true);
</script>

<template>
  <div class="auth-inputs">
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="q-pa-md" style="max-width: 400px; min-width: 300px">
      <div class="q-gutter-sm mt-3 lg:text-body1 text-subtitle2">
        <q-radio
          v-for="val in allgender"
          v-model="gender"
          size="sm"
          :val="val"
          :label="val"
          class="border border-gray-400 border-solid lg:pr-6 lg:pl-3 pr-3 pl-0 pt-1 pb-1"
        />
      </div>

      <q-input
        readonly
        outlined
        v-model="DOB"
        :value="DOB"
        label="Date of birth"
        class="mt-6 border border-gray-400 border-solid"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date
                v-model="DOB"
                mask="DD-MM-YYYY"
                v-close-popup="qDateClose"
                @navigation="qDateClose = false"
                @update:model-value="qDateClose = true"
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>
