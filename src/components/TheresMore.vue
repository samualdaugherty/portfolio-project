<template>
  <section class="relative w-full mt-0 max-w-[1200px] ml-0">
    <!-- Right-aligned Section Header -->
    <div class="relative mb-12 translate-y-[56px] sm:translate-y-[75px] z-10">
      <SectionHeading
        main-text="There's More"
        small-text="Thanks"
        bg-text="There's More"
        align="right"
        bgTextTop="top-[10%] sm:top-[40%] md:top-[40%] lg:top-[45%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-[10rem] xl:left-[25rem]"
        bgTextSize="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px]"
        :no-padding="true"
      />
    </div>

    <!-- Top Row: Image + Paragraph + Orange Bar -->
    <div class="flex flex-col xl:flex-row items-start xl:items-end w-full relative translate-y-8 xl:-translate-y-16" style="min-height: 260px;">
      <!-- Left-aligned Image -->
      <img src="/wireframe-pic.png" alt="Bio" class="relative h-auto w-[500px] object-cover rounded-2xl ml-0 xl:ml-[-64px] mb-8 xl:mb-0 z-20 hero-drop-shadow" />
      <!-- Paragraph -->
      <div class="flex-1 flex-col items-end w-full">
        <p class="pl-0 lg:pl-8 mb-4 text-black dark:text-white text-body w-full lg:max-w-[80%] xl:max-w-lg">
            There's a lot more to my portfolio, but that covers some of the recent work for '23 and '24. Slowly but surely, I'll get the rest of them written and added. But, honestly, who's going to read more than a couple of them anyway?
        </p>
        <p class="pl-0 lg:pl-8 mb-4 text-black dark:text-white text-body w-full lg:max-w-[80%] xl:max-w-lg">
            Weirdos, that's who.
        </p>
      </div>
      <!-- Right Orange Bar -->
      <img src="/orange-arrow.svg" alt="Bio Bar" class="absolute left-[82%] lg:left-[80%] xl:left-[88%] -top-12 w-[125px] lg:w-[175px] h-[auto] z-0 translate-y-[-200px] lg:translate-y-[-250px] xl:translate-y-[-225px] hidden sm:block" />
    </div>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
</script>

<style scoped>
.section-shadow {
  filter: drop-shadow(0px 8px 32px rgba(16, 4, 23, 0.35));
}

.hero-drop-shadow {
  filter: drop-shadow(15.999px 32.249px 75px rgba(0,0,0,0.15))
          drop-shadow(10.37px 20.902px 43.924px rgba(0,0,0,0.11))
          drop-shadow(6.163px 12.422px 23.889px rgba(0,0,0,0.09))
          drop-shadow(3.2px 6.45px 12.188px rgba(0,0,0,0.08))
          drop-shadow(1.304px 2.628px 6.111px rgba(0,0,0,0.06))
          drop-shadow(0.296px 0.597px 2.951px rgba(0,0,0,0.04));
}
</style> 