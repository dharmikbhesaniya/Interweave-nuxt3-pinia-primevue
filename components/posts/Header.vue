<template>
  <div class="flex items-center justify-between py-4">
    <NuxtLink>
      <div class="flex items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KOWWKm_0832Msjnhv-MtIxzQY_Wjx72hLLm4x5JODwxSgmGnsyEoPHKP0Wu3zKsuW_c&usqp=CAU"
          alt="User Profile"
          class="lg:w-14 lg:h-14 w-10 h-10 rounded-full mr-4 img-cover"
        />
        <div class="flex flex-col">
          <h2 class="lg:text-lg text-sm font-semibold">
            abhi_patel_24
            <span class="lg:text-sm text-xs text-blue-500 cursor-pointer"
              >&nbsp;Follow</span
            >
          </h2>
          <h2 class="lg:text-sm text-xs text-left text-gray-500 mt-[-0.1rem]">bhesan</h2>
        </div>
      </div>
    </NuxtLink>
    <button class="bg-white border-none cursor-pointer mr-4 text-2xl">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
  </div>
</template>

<script setup></script>
