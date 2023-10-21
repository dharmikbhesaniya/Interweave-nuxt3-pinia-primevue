<template>
  <div class="post justify-items-center grid pt-9">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.post {
  width: 82.4vw;
  background-color: rgb(247, 245, 245);
  overflow: scroll;
}

@media screen and (max-width: 1024px) {
  .post {
    width: 100%;
  }
}

.post::-webkit-scrollbar {
  display: none;
}
</style>
