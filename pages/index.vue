<script setup>
definePageMeta({
  middleware: "user-auth",
});

useHead({
  title: "Intractify",
});
</script>

<template>
  <div class="h-[89vh] 2xl:h-screen posts overflow-auto">
    <PostsMain v-for="i in 4" />
  </div>
  <div class="posts overflow-auto xl:block hidden mt-2">
    <FollowRequest />
  </div>
</template>

<style scoped>
.posts::-webkit-scrollbar {
  display: none;
}
</style>
