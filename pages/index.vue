<script setup>
definePageMeta({
  middleware: "user-auth",
});

useHead({
  title: "Intractify",
});
</script>

<template>
  <div class="h-[34rem] posts overflow-auto mt-20">
    <PostsMain v-for="i in 4" />
  </div>
  <div class="h-[34rem] posts overflow-auto mt-[6rem] lg:block hidden">
    <FollowRequest />
  </div>
</template>

<style scoped>
.posts::-webkit-scrollbar {
  display: none;
}
</style>
