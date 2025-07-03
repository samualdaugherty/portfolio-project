<template>
  <section class="relative flex flex-col items-start max-w-4xl mt-16 sm:mr-8 ml-0 md:ml-16 lg:ml-52">
    <!-- Left Orange Bar -->
    <img src="/New-Block.svg" alt="Bio Bar" class="absolute left-0 -top-12 w-[125px] lg:w-[175px] h-[auto] z-[-1] translate-y-[-225px] lg:translate-y-[-175px] -ml-20 lg:-ml-52 hidden md:block" />
    <!-- Project Name and Arrow Button -->
    <div class="flex items-center pl-4 md:pl-[6rem] xl:pl-[8rem] w-full text-left justify-between sm:justify-start">
      <h2 class="font-alumni font-bold text-md-header sm:text-md-header-sm text-black dark:text-white mr-4 mb-[-8px]">
        <span class="sm:hidden">Blueprint Banking App</span>
        <span class="hidden sm:inline">Blueprint Mobile Banking App</span>
      </h2>
      <OnwardButton class="ml-2" to="/work/blueprint-mobile-banking-app" />
    </div>
    <!-- Project Type -->
    <div class="mb-2 sm:mb-8 w-full text-left pl-4 md:pl-[6rem] xl:pl-[8rem]">
      <span class="font-alumni font-bold text-sm-header sm:text-sm-header-sm text-accent">Native iOS App</span>
    </div>
    <!-- Screenshots with Rotated Label -->
    <div class="relative w-full flex justify-start pl-4 md:pl-[6rem] xl:pl-[8rem]">
      <!-- Rotated Label -->
      <span 
        class="absolute left-[-68px] sm:left-[-98px] md:left-[-20px] xl:left-[12px] top-[55%] font-alumni font-bold text-md-header sm:text-md-header-sm text-black dark:text-white rotate-[-90deg] select-none pointer-events-none z-0"
      >Original Design</span>
      <!-- Screenshots -->
      <div class="flex gap-2 md:gap-4 z-10">
        <img v-for="n in 4" :key="n" :src="`/blueprint-${n}.png`" :alt="`Blueprint screenshot ${n}`" class="w-[144px] sm:w-[180px] h-auto hero-drop-shadow rounded-2xl" />
      </div>
    </div>
  </section>
</template>

<script setup>
import OnwardButton from './OnwardButton.vue'
</script>

<style scoped>
.hero-drop-shadow {
  filter: drop-shadow(15.999px 32.249px 75px rgba(0,0,0,0.15))
          drop-shadow(10.37px 20.902px 43.924px rgba(0,0,0,0.11))
          drop-shadow(6.163px 12.422px 23.889px rgba(0,0,0,0.09))
          drop-shadow(3.2px 6.45px 12.188px rgba(0,0,0,0.08))
          drop-shadow(1.304px 2.628px 6.111px rgba(0,0,0,0.06))
          drop-shadow(0.296px 0.597px 2.951px rgba(0,0,0,0.04));
}
</style> 