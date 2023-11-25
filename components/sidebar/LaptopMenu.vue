<template>
  <div class="p-8 sticky left-0">
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
