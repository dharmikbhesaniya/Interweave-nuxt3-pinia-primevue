<script setup>
definePageMeta({
  middleware: "user-auth",
});

useHead({
  title: "Interactify",
});
</script>

<template>
  <div class="flex">
    <SidebarMobileMenu />
    <SidebarLaptopMenu />
    <div class="mt-9 w-[55rem] m-auto post">
      <PostsMain />
      <PostsMain />
      <PostsMain />
      <PostsMain />
    </div>
  </div>
</template>

<style scoped>
.post {
  height: 92vh;
  overflow: scroll;
}
.post::-webkit-scrollbar {
  display: none;
}
</style>
