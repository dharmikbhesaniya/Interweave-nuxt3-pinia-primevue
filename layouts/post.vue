<template>
  <div class="flex items-center justify-center bg-gray-50 pt-20 h-screen">
  <!-- <div class="post justify-items-center grid lg:pt-9 lg:max-w-5xl"> -->
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.post {
  width: 70vw;
  background-color: rgb(247, 245, 245);
  overflow: scroll;
}

@media screen and (max-width: 1024px) {
  .post {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .post {
    width: 77.3%;
  }
}

.post::-webkit-scrollbar {
  display: none;
}
</style>
