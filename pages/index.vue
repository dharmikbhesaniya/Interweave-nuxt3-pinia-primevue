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
    <div>
      <SidebarMobileMenu class="block lg:hidden" />
      <SidebarLaptopMenu class="hidden lg:block" />
    </div>
    <NuxtLayout name="post" class="h-screen">
      <PostsMain v-for="i in 4" />
    </NuxtLayout>
  </div>
</template>
