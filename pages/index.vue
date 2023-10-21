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
    <SidebarMobileMenu class="block md:hidden" />
    <SidebarLaptopMenu class="hidden md:block" />
    <!-- set post layout here  -->
    <!-- PostsMain teg only in layout -->
    <div class="mt-9 w-[55rem] m-auto post">
      <PostsMain v-for="i in 5" />
    </div>
    <!-- end post layout here  -->
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
