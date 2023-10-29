<!--^ there are need to add icon as per twitter  -->

<!-- like this -->

<!-- <NuxtLink to="/" class="no-underline text-black">
      <div
        class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg"
      >
        <div class="css-1dbjc4n">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
          >
            <g>
              <path
                d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"
              ></path>
            </g>
          </svg>
        </div>
        <div
          dir="ltr"
          class="css-901oao css-1hf3ou5 r-18jsvk2 r-37j5jr r-adyw6z r-16dba41 r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0"
          style="text-overflow: unset"
        >
          <span
            class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
            style="text-overflow: unset"
            >Home</span
          >
        </div>
      </div>
    </NuxtLink> -->

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
