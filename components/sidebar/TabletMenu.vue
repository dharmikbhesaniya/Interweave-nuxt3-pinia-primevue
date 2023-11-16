<template>
  <div class="main-menu p-5 h-[36.7rem] mt-14 font-semibold sticky left-0">
    <template v-for="data in menu">
      <NuxtLink :to="data.path" class="no-underline">
        <div class="menu flex items-center">
          <div class="mr-4">
            <svg viewBox="0 0 24 24" class="w-7" aria-hidden="true">
              <g>
                <path :d="data.svg"></path>
                <path :d="data.boldSvg" v-if="$route.fullPath === data.path"></path>
              </g>
            </svg>
          </div>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup>
import { menu } from "../../src/jsonData/sidebar";
</script>

<style scoped>
.menu {
  cursor: pointer;
  margin: 17px 0;
  padding: 10px;
}
.main-menu {
  border-right: 1px solid rgb(233, 230, 230);
}
</style>
