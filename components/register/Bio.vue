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
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <div class="q-pa-md" style="max-width: 400px; min-width: 300px">
      <div class="q-gutter-sm mt-3 lg:text-body1 text-subtitle2">
        <q-radio
          v-for="val in allgender"
          v-model="gender"
          size="sm"
          :val="val"
          :label="val"
          class="border lg:pr-6 lg:pl-3 pr-3 pl-0 pt-1 pb-1"
        />
      </div>

      <q-input
        readonly
        outlined
        v-model="DOB"
        :value="DOB"
        label="Date of birth"
        class="mt-6 input-width border"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
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

<style scoped>
.input-width {
  width: 350px;
}
.border {
  border: 1px solid gray;
}
@media screen and (max-width: 1024px) {
  .input-width {
    width: 280px;
  }
}
</style>
