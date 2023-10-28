<template>
  <div class="px-4 py-2 w-full">
    <div class="flex text-2xl">
      <div class="">
        <i class="fa-regular fa-heart mr-7 cursor-pointer"></i>
      </div>
      <div class="">
        <i class="fa-regular fa-comment cursor-pointer"></i>
      </div>
      <div class="ml-auto">
        <i class="fa-regular fa-bookmark cursor-pointer"></i>
      </div>
    </div>
    <div class="mt-2 w-full">
      <p class="text-sm text-left">
        <span class="font-semibold">10 likes</span>
      </p>
    </div>
    <div class="w-full">
      <p class="text-left">
        <span class="font-semibold">abhi_patel32 </span>&nbsp;my first post
      </p>
    </div>
    <div class="max-h-[8rem] home-comment overflow-auto mt-2">
      <div class="py-1">
        <div class="mb-1">
          <p class="text-sm flex w-full text-left">
            <span class="font-semibold">dharmik_48</span>
            &nbsp; my first comment
            <button class="ml-auto cursor-pointer bg-white border-none hover:text-red-600">
              <i class="fa-solid fa-trash"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
