<template>
  <div class="main-menu w-60 p-8 h-[40.1rem] font-semibold sticky left-0">
    <div class="menu mt-20">
      <i class="fa-solid fa-house"></i>
      <p>Home</p>
    </div>
    <div class="menu">
      <q-icon name="explore" size="sm" />
      <p>Explore</p>
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
      <i class="fa-solid fa-comment"></i>
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
  cursor: pointer;
  margin: 25px 0;
  padding: 12px 10px;
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
  border-right: 1px solid gray;
}
</style>
