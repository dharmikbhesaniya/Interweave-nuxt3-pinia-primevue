<script setup lang="ts">
useHead({
  title: "OTP",
});

const otp = ref<number>();
import VOtpInput from "vue3-otp-input";

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);

const handleOnComplete = (value: number) => {
  otp.value = value;
};
</script>

<template>
  <div class="auth-inputs">
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <v-otp-input
      ref="otpInput"
      v-model="otp"
      input-classes="auth-otp-input"
      separator=" "
      :num-inputs="4"
      :should-auto-focus="true"
      @on-complete="handleOnComplete"
    />
  </div>
</template>
