<template>
  <div>
    <div class="lg:max-w-[370px] md:max-w-[510px] mx-auto">
      <div class="xl:space-y-6 space-y-3 md:pb-12">
        <!-- peaple you might know -->
        <div class="bg-white rounded-xl shadow-md p-5 px-6 border1">
          <div class="flex justify-between text-black">
            <h3 class="font-bold text-base">People You might know</h3>
          </div>

          <div class="space-y-4 capitalize text-xs font-normal mt-5 mb-2">
            <div class="flex items-center py-0.5" v-for="i in 4">
              <NuxtLink href="#" class="flex items-center gap-3 text-black no-underline">
                <img
                  src="https://t4.ftcdn.net/jpg/01/32/16/91/360_F_132169192_hlO3x0SGk7irwXHJ2UUZU93I3PPHVte2.jpg"
                  alt="user-profile"
                  class="bg-gray-200 rounded-full w-10 h-10 object-cover"
                />
                <div class="flex-1">
                  <h4 class="font-semibold text-sm text-black">Johnson smith</h4>
                  <div class="mt-0.5 text-gray-500">Suggested For You</div>
                </div>
              </NuxtLink>
              <button
                type="button"
                class="text-sm rounded-full cursor-pointer py-1.5 px-4 font-semibold bg-stone-800 text-white ml-auto"
              >
                Follow
              </button>
            </div>
          </div>
        </div>

        <!-- online friends -->
        <div class="bg-white rounded-xl shadow-md p-5 px-6 border1">
          <div class="flex justify-between text-black">
            <h3 class="font-bold text-base">Online Friends</h3>
          </div>

          <div class="grid grid-cols-5 gap-3 mt-4">
            <NuxtLink href="#" v-for="i in 5">
              <div class="w-12 h-12 relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KOWWKm_0832Msjnhv-MtIxzQY_Wjx72hLLm4x5JODwxSgmGnsyEoPHKP0Wu3zKsuW_c&usqp=CAU"
                  alt=""
                  class="w-full h-full absolute inset-0 rounded-full"
                />
                <div
                  class="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2"
                ></div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
