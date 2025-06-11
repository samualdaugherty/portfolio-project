<template>
  <section class="relative w-full mt-0 md:mt-8 max-w-[1100px] ml-0">
    <!-- Right-aligned Section Header -->
    <div class="relative mb-12 translate-y-[56px] sm:translate-y-[75px] z-10">
      <SectionHeading
        main-text="Let's Chat"
        small-text="Thanks"
        bg-text="Let's Chat"
        align="right"
        bgTextTop="top-[10%] sm:top-[40%] md:top-[40%] lg:top-[45%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[8rem] lg:left-[15rem] xl:left-[27rem]"
        bgTextSize="text-[140px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
        :no-padding="true"
      />
    </div>

    <!-- Top Row: Image + Paragraph + Orange Bar -->
    <div class="flex flex-col xl:flex-row items-start xl:items-end w-full gap-4 relative xl:-mt-16" style="min-height: 260px;">
      <!-- Left-aligned Image -->
      <img src="/wireframe-pic.png" alt="Bio" class="h-auto w-[500px] object-cover rounded-2xl ml-0 xl:ml-[-64px] mb-8 xl:mb-0 z-10 hero-drop-shadow" />
      <!-- Paragraph -->
      <div class="flex-1 flex items-end w-full">
        <p class="pl-0 mb-4 text-black dark:text-white text-body w-full xl:max-w-lg">
            I'm always hoping to find a role where I can make an impact and provide value to a team and organization. I love opportunities where I can learn and grow, and mentor other designers to do the same. And a place where I can be creative and collaborate with other amazing designers.
        </p>
      </div>
      <!-- Right Orange Bar -->
      <img src="/orange-arrow.svg" alt="Bio Bar" class="absolute left-[83%] md:left-[88%] lg:left-[82%] xl:left-[88%] -top-12 w-[125px] lg:w-[175px] h-[auto] z-0 translate-y-[-120px] md:translate-y-[-200px] lg:translate-y-[-215px] hidden sm:block" />
    </div>
    
    <!-- Additional Full-Width Paragraph -->
    <div class="w-full xl:mt-8">
      <p class="text-black dark:text-white text-body">
        If that's you, and you see work in my portfolio that aligns with your needs, reach out and let's have a chat. I look forward to connecting with you.
      </p>
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