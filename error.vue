<template>
  <div class="error-page">
    <h4>Page not found</h4>
    <NuxtLink to="/">
      <q-btn color="primary" glossy>Home</q-btn>
    </NuxtLink>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
