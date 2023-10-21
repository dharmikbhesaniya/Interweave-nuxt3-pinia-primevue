<template>
  <div>
    <ClientOnly>
      <h4>Interwave</h4>
      <button @click="acceptTracking">Accept Tracking</button>
    </ClientOnly>
  </div>
</template>

<script setup>
const { gtag, grantConsent, revokeConsent } = useGtag();

function acceptTracking() {
  console.log("call...");
  grantConsent();
}
</script>

<style scoped></style>
