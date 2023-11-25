<template>
  <div class="default-layout">
    <div class="default-content">
      <div class="z-100 h-16">
        <Navbar />
      </div>
      <div class="flex items-start justify-center">
        <div class="lg:w-[20%] sm:w-[11%]">
          <div class="bg-white main-menu-border h-[89vh] 2xl:h-screen hidden lg:block">
            <SidebarLaptopMenu />
          </div>
          <div class="w-screen block sm:hidden">
            <SidebarMobileMenu />
          </div>
          <div
            class="bg-white main-menu-border h-[89vh] 2xl:h-screen sm:block lg:hidden hidden w-[6rem]"
          >
            <SidebarTabletMenu />
          </div>
        </div>
        <div class="flex justify-evenly lg:px-20 lg:w-[80%] sm:w-[89%]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
