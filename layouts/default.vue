<template>
  <div class="default-layout">
    <div class="default-content">
      <div v-if="token">
        <Navbar />
      </div>
      <div class="flex items-start justify-center" v-if="token">
        <div class="md:w-[20%]">
          <div class="bg-white">
            <SidebarLaptopMenu class="hidden lg:block" />
          </div>
          <div class="w-screen">
            <SidebarMobileMenu class="block md:hidden" />
          </div>
          <div class="bg-white w-[6rem]">
            <SidebarTabletMenu class="md:block lg:hidden hidden" />
          </div>
        </div>
        <div class="flex items-center justify-evenly lg:px-20 w-[80%]">
          <slot />
        </div>
      </div>
      <slot v-if="!token" />
    </div>
  </div>
</template>

<script setup>
let token = true;
</script>

<style scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.default-content {
  text-align: center;
  overflow: scroll;
  width: 1400px;
}
.default-content::-webkit-scrollbar {
  display: none;
}
</style>
