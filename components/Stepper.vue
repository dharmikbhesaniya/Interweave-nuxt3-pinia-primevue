<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Email" icon="settings" :done="step > 1">
        <p>Email</p>
      </q-step>

      <q-step :name="2" title="OTP" icon="create_new_folder" :done="step > 2">
        STEP : {{ step }}
        {{ step === 2 ? navigateTo("/user/register/otp") : "" }}
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step
        :name="3"
        title="Personal Details"
        icon="assignment"
        :done="step > 3"
      >
        {{ step === 3 ? navigateTo("/user/register/details") : "" }}
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Username" icon="add_comment" :done="step > 4">
        {{ step === 4 ? navigateTo("/user/register/username") : "" }}
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>
      <q-step :name="5" title="Bio" icon="add_comment" caption="(optional)">
        {{ step === 5 ? navigateTo("/user/register/bio") : "" }}
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script setup>
const step = ref(1);
</script>
