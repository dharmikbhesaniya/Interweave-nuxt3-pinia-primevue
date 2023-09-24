<template>
  <div class="default-layout">
    <div class="default-content">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.default-content {
  text-align: center;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: scroll;
  width: 800px;
}
.default-content::-webkit-scrollbar {
  display: none;
}
</style>
