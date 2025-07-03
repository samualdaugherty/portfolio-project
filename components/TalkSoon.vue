<template>
  <section class="relative w-full mt-4 max-w-[1200px] ml-0">
    <!-- Left Orange Bar -->
    <div class="absolute -left-4 md:left-4 top-0 sm:top-4 flex flex-col justify-start items-start z-0 block lg:hidden">
        <div class="w-[84px] sm:w-[125px] h-[280px] bg-accent"></div>
      </div>
    <!-- Left-aligned Section Header -->
    <div class="relative mb-4 mt-16 lg:mt-24">
      <SectionHeading
        main-text="Let's Talk Soon"
        small-text="Thanks"
        bg-text="Let's Talk Soon"
        align="left"
        bgTextTop="top-[-70%] sm:top-[-10%] md:top-[15%] lg:top-[20%]"
        bgTextLeft="left-[-9rem] sm:left-[-7rem] md:left-[-5rem] lg:left-[-5rem] xl:left-[0rem]"
        bgTextSize="text-[120px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
      />
    </div>

    <!-- Paragraph -->
    <div class="pl-20 sm:pl-40 md:pl-[15.5rem] lg:pl-80 lg:pr-8">
      <p class="text-black dark:text-white text-body">
        I'm always willing to chat with other designers, members of the community, or anyone who wants to share their cool idea or recent projects they're excited about. I hope to meet you soon!
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
</style> 