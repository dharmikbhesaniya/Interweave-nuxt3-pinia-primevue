<template>
  <div class="main-menu p-8 h-[40.1rem] font-semibold sticky left-0">
    <div class="menu mt-14">
      <i class="fa-solid fa-house"></i>
    </div>
    <div class="menu">
      <i class="fa-solid fa-search"></i>
    </div>
    <div class="menu">
      <q-icon name="explore" size="sm" />
    </div>
    <div class="menu">
      <i class="fa-solid fa-plus"></i>
    </div>
    <div class="menu">
      <i class="fa-solid fa-film"></i>
    </div>
    <div class="menu">
      <i class="fa-regular fa-bell"></i>
    </div>
    <div class="menu">
      <i class="fa-regular fa-comment"></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.menu {
  display: flex;
  cursor: pointer;
  margin: 30px 0;
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
  border-right: 1px solid rgb(233, 230, 230);
}
</style>
