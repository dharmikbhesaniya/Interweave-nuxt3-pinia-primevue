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
  <div
    class="grid grid-cols-1 justify-items-center content-center min-h-[28rem] max-h-[50rem]"
  >
    <Image src="/images/interwave-logo.jpg" alt="logo" class="w-[8rem]" />
    <v-otp-input
      ref="otpInput"
      v-model="otp"
      input-classes="otp-input mt-4 w-12 h-12 mx-3 text-xl rounded text-center"
      separator=" "
      :num-inputs="6"
      :should-auto-focus="true"
      @on-complete="handleOnComplete"
    />
  </div>
</template>

<style>
.input-width {
  width: 350px;
}
@media screen and (max-width: 1024px) {
  .input-width {
    width: 280px;
  }
}
.otp-input {
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-left: none;
  border-right: none;
}

.otp-input.is-complete {
  background-color: #f5f4f4;
}
</style>
