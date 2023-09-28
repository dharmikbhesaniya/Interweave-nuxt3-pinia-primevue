<script setup>
useHead({
  title: "Interwave",
});
definePageMeta({
  middleware: "user-auth",
});
// const { gtag, grantConsent, revokeConsent } = useGtag();

// function acceptTracking() {
//   grantConsent();
// }
</script>

<template>
  <ClientOnly>
    <h4>Interwave</h4>
    <!-- <button @click="acceptTracking">Accept Tracking</button> -->
  </ClientOnly>
</template>
