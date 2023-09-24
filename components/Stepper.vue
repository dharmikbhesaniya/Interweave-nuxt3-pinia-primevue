<template>
  <div class="q-pa-md">
    <!-- <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      flat
      contracted
      transition-prev="fade"
      transition-next="fade"
      :inactive-icon="settings"
      inactive-color="black"
      active-color="blue"
      :contracted="$q.platform.is.mobile"
    > -->
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      flat
      contracted
      inactive-icon="white"
    >
      <q-step :name="1" title="Email" :done="step > 1" done-color="green">
        <!-- {{
          step === 1 && router.path !== "/user/register"
            ? navigateTo("/user/register")
            : ""
        }} -->
        <p>Email</p>
      </q-step>

      <q-step :name="2" title="OTP" :done="step > 2" done-color="green">
        <!-- {{ step === 2 ? navigateTo("/user/register/otp") : "" }} -->
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step
        :name="3"
        title="Personal Details"
        icon="assignment"
        :done="step > 3"
        done-color="green"
      >
        <!-- {{ step === 3 ? navigateTo("/user/register/details") : "" }} -->
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Username"
        icon="add_comment"
        :done="step > 4"
        done-color="green"
      >
        <!-- {{ navigateTo("/user/register/username") }} -->
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>
      <q-step
        :name="5"
        title="Bio"
        icon="add_comment"
        caption="(optional)"
        done-color="green"
      >
        <!-- {{ step === 5 ? navigateTo("/user/register/bio") : "" }} -->
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template #navigation>
        <q-stepper-navigation class="row">
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
          <q-space />
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? 'Finish' : 'Continue'"
          />
        </q-stepper-navigation>
      </template>

      <template #message>
        <q-banner v-if="step === 1" class="bg-purple-7 text-white">
          We keep your personal details safe and secure
        </q-banner>
        <q-banner v-if="step === 2" class="bg-orange-7 text-white">
          Enter your OTP
        </q-banner>
      </template>
    </q-stepper>
    <q-btn @click="$refs.stepper.goTo(5)">Last</q-btn>
  </div>
  <hr />

  
</template>

<script setup>
const step = ref(1);
const router = useRoute();

</script>
