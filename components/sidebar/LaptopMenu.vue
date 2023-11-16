<template>
  <div class="main-menu p-8 h-[36.7rem] sticky left-0 mt-14">
    <template v-for="data in menu">
      <NuxtLink :to="data.path" class="no-underline">
        <div class="menu flex items-center">
          <div class="w-7 mr-4">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path :d="data.svg"></path>
                <path :d="data.boldSvg" v-if="$route.fullPath === data.path"></path>
              </g>
            </svg>
          </div>
          <div class="text-lg text-black">
            <span>{{ data.name }}</span>
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
.menu:hover {
  background-color: rgb(231, 229, 229);
  transition: 0.4s;
  border-radius: 10px;
}
.menu p {
  font-size: 16px;
}
.menu i {
  font-size: 22px;
  margin-right: 20px;
}
.main-menu {
  border-right: 1px solid rgb(233, 230, 230);
}
.router-link-active {
  font-weight: bold;
}
</style>
