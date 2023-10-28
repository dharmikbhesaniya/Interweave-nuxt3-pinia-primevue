<template>
  <div>
    <nav class="shadow-md bg-white fixed top-0 w-full z-[100]">
      <ul class="flex p-3">
        <NuxtLink to="/" class="no-underline">
          <h2 class="md:text-2xl text-xl ml-4 cursor-pointer text-black mr-4 mb-1">
            Interactify
          </h2>
        </NuxtLink>
        <div class="mb-[-2rem] md:ml-20 ml-10 mt-[-12px]">
          <input
            type="search"
            class="outline-none input md:w-[30rem] sm:w-[20rem] w-[10rem]"
            placeholder="🔍 Search your favourite person..."
            name="search"
            id="search"
          />
        </div>
        <!-- <div class="ml-auto">
          <NuxtLink to="">
            <q-btn
              class="mr-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white lg:px-[2rem] lg:py-1.5 cursor-pointer rounded-md"
            >
              Login
            </q-btn>
          </NuxtLink>
        </div> -->
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.input {
  border: 1px solid gray;
  padding: 8px 15px;
  margin: 10px 0;
  border-radius: 4px;
}
</style>
