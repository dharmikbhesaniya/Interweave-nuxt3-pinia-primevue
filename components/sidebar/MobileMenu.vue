<template>
  <div class="flex justify-items-center">
    <div
      class="main-menu flex justify-between w-screen p-5 absolute bottom-0 bg-white font-semibold"
    >
      <template v-for="data in menu">
      <NuxtLink :to="data.path" class="no-underline">
        <div class="flex items-center">
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
  </div>
</template>

<script setup>
import { menu } from "../../src/jsonData/sidebar";
</script>
