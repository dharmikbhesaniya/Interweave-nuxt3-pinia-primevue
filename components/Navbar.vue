<template>
  <div class="main-navbar">
    <NuxtLink to="/" class="no-underline">
      <h2 class="navbar-heading">
        Intractify
      </h2>
    </NuxtLink>
    <div class="md:ml-30 lg:ml-48 ml-10">
      <div class="relative -mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="search"
          class="navbar-input"
          placeholder="Search"
          name="search"
          id="search"
        />
      </div>
    </div>
    <div class="md:flex items-center ml-12 text-lg mt-3 hidden">
      <NuxtLink to="/notification" class="no-underline text-black">
        <p>Notification</p>
      </NuxtLink>
      <NuxtLink to="/notification" class="no-underline text-black ml-10">
        <p>Blog</p>
      </NuxtLink>
    </div>
    <div class="ml-auto cursor-pointer">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KOWWKm_0832Msjnhv-MtIxzQY_Wjx72hLLm4x5JODwxSgmGnsyEoPHKP0Wu3zKsuW_c&usqp=CAU"
        alt="User Profile"
        class="w-12 h-12 rounded-full mr-8 img-cover"
      />
    </div>
  </div>
</template>

<script setup></script>
