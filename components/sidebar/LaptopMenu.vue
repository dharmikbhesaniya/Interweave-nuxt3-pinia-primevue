<template>
  <div class="main-menu w-[15rem] p-8 font-semibold">
    <div class="menu">
      <p class="text-3xl">Interactify</p>
    </div>
    <div class="menu">
      <i class="fa-solid fa-house"></i>
      <p>Home</p>
    </div>
    <div class="menu">
      <i class="fa-solid fa-search"></i>
      <p>Search</p>
    </div>
    <div class="menu">
      <i class="fa-solid fa-plus"></i>
      <p>Create</p>
    </div>
    <div class="menu">
      <i class="fa-solid fa-message"></i>
      <p>Messages</p>
    </div>
    <div class="menu">
      <i class="fa-solid fa-user"></i>
      <p>Profile</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.menu {
  display: flex;
  width: 8rem;
  margin: 18px 0px;
  cursor: pointer;
  margin-right: auto;
}
.menu p {
  font-size: 16px;
}
.menu i {
  font-size: 22px;
  margin-right: 20px;
}
.main-menu {
  border-right: 1px solid gray;
  height: 100vh;
}
</style>
