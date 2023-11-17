<template>
  <div class="default-layout">
    <div class="default-content">
      <div v-if="token">
        <div class="w-[100%] test shadow-md bg-white fixed top-0">
          <!-- need to re create navbar  -->
          <Navbar />
          hello
        </div>
        <div class="flex items-start justify-center test2">
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
          <div class="flex items-center justify-evenly lg:px-20 w-[80%] test1">
            <slot class="test1" />
          </div>
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
.test {
  border: 2px solid red;
}
.test1 {
  border: 2px solid green;
}
.test2 {
  border: 2px solid rgb(0, 60, 128);
}
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
  border: 2px solid black;
}
.default-content::-webkit-scrollbar {
  display: none;
}
</style>
