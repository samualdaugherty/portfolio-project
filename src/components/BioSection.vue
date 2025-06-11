<template>
  <section class="relative w-full mt-8 max-w-[1200px] ml-0">
    <!-- Right-aligned Section Header -->
    <div class="relative mb-12 translate-y-[56px] sm:translate-y-[75px] z-10">
      <SectionHeading
        main-text="A Quick TL;DR"
        small-text="BIO"
        bg-text="A Quick TL;DR"
        align="right"
        bgTextTop="top-[10%] sm:top-[30%] md:top-[35%] lg:top-[50%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-0 xl:left-[20rem]"
        bgTextSize="text-[120px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
        :no-padding="true"
      />
    </div>

    <!-- Top Row: Image + Paragraph + Orange Bar -->
    <div class="flex flex-col xl:flex-row items-start xl:items-end w-full relative" style="min-height: 260px;">
      <!-- Left-aligned Image -->
      <img src="/Bio-Pic.png" alt="Bio" class="h-auto w-[500px] object-cover rounded-2xl ml-0 sm:ml-5 xl:ml-[-64px] mb-8 xl:mb-0 z-10 hero-drop-shadow" />
      <!-- Paragraph -->
      <div class="flex-1 flex items-end w-full">
        <p class="pl-0 sm:pl-4 mb-4 text-black dark:text-white text-body w-full lg:max-w-[80%] xl:max-w-lg">
          I won't bore you with a long drawn out history of my life, unless you want that. For the past several years, I've been a design leader focused on strategic vision and opportunities for growth within the organizations I work with.
        </p>
      </div>
      <!-- Right Orange Bar -->
      <img src="/Bio-Bar.svg" alt="Bio Bar" class="absolute left-[88%] md:left-[85%] xl:left-[90%] -top-12 w-[125px] lg:w-[175px] h-[auto] z-0  translate-y-[-200px] lg:translate-y-[-175px] hidden sm:block" />
    </div>

    <!-- Bottom Row: Orange Bar + Paragraphs -->
    <div class="flex mt-4 w-full">
      <!-- Left Orange Bar -->
      <div class="flex flex-col justify-start items-start z-0 hidden lg:block">
        <div class="w-[125px] lg:w-[175px] h-[120%] xl:h-full bg-accent lg:ml-4 lg:translate-y-0 xl:translate-y-[25%] md:translate-x-[-5rem] xl:translate-x-[0]"></div>
      </div>
      <!-- Paragraphs -->
      <div class="flex-1 pl-0 sm:pl-4 lg:pl-12 w-full lg:max-w-[70%] xl:max-w-3xl lg:translate-x-[-5rem] xl:translate-x-0">
        <p class="mb-6 text-black dark:text-white text-body">
          Like all designers, I still push some pixels, and throughly enjoy doing it. But, as the Lead Designer, my job is more about crafting strategies that align business opportunities with customer pain points. For the past 4 years, I've been an integral business partner focused on primarily on Growth, and successfully helping organizations increase both their customer base, and their conversion rates.
        </p>
        <p class="mb-6 text-black dark:text-white text-body">
          I currently work for Zoro, a B2B e-commerce site with more than 14 million products to shop. And, with a selection size that large, there are a lot of opportunities to increase our sales metrics and attract new customers. Initially, my focus was on identifying product categories with big growth potential and improving shopability within the category to increase order values.
        </p>
        <p class="mb-6 text-black dark:text-white text-body">
          2024 was a year focused almost solely on strategic thinking around the way we handle onsite marketing and promotions. I was selected to lead two teams to help the selection process of a Promo Engine and a new CMS, and getting those integrated into our company technology stack. It was a major task and transition.
        </p>
        <p class="text-black dark:text-white text-body">
          2025 is a year focused on implementing all of the strategies we've spent the past year defining, focus grouping, and researching. There are big things happening and I can't wait to share them with you.
        </p>
      </div>
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