<script setup>
definePageMeta({
  middleware: "user-auth",
  layout: false,
});

useHead({
  title: "Interactify",
});
</script>

<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="flex w-full items-start justify-center bg-gray-50">
      <div class="bg-white left-0 absolute">
        <SidebarLaptopMenu class="hidden lg:block" />
      </div>
      <div class="w-screen">
        <SidebarMobileMenu class="block lg:hidden" />
      </div>
      <div class="h-[35rem] posts overflow-auto mt-20">
        <PostsMain v-for="i in 4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts::-webkit-scrollbar {
  display: none;
}
</style>
