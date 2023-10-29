<template>
  <div class="main-menu p-8 h-[40.1rem] font-semibold sticky left-0">
    <NuxtLink to="/" class="no-underline text-black">
      <div class="menu mt-14">
        <i class="fa-solid fa-home"></i>
        <p>Home</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/search" class="no-underline text-black">
      <div class="menu">
        <i class="fa-solid fa-search"></i>
        <p>Search</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/explore" class="no-underline text-black">
      <div class="menu">
        <q-icon name="explore" size="sm" />
        <p>Explore</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/createpost" class="no-underline text-black">
      <div class="menu">
        <i class="fa-solid fa-plus"></i>
        <p>Create</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/reels" class="no-underline text-black">
      <div class="menu">
        <i class="fa-solid fa-film"></i>
        <p>Reels</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/notification" class="no-underline text-black">
      <div class="menu">
        <i class="fa-regular fa-bell"></i>
        <p>Notifications</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/messages" class="no-underline text-black">
      <div class="menu">
        <i class="fa-regular fa-comment"></i>
        <p>Messages</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style scoped>
.menu {
  display: flex;
  cursor: pointer;
  margin: 10px 0;
  padding: 20px 10px;
  padding-bottom: 0;
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
