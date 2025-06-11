<template>
  <section class="w-full pt-16 sm:pt-24 z-10 pl-0 max-w-[1600px]">
    <!-- Page Title with Responsive Background Text -->
    <div class="relative w-full -mb-2 z-10">
      
      <!-- Orange Outlined Background Text (SVG) -->
      <svg
        class="absolute z-0 select-none pointer-events-none left-0 top-0 sm:top-[-3rem] md:top-[-2.5rem] lg:top-[-30%] xl:top-0 translate-x-[-5vw] text-[clamp(6rem,13vw,13.5rem)] tracking-[-3px] xl:tracking-[-5px]"
        width="1400"
        height="300"
        style="overflow: visible;"
      >
        <text
          x="0"
          y="100"
          font-family="Alumni Sans, sans-serif"
          font-weight="700"
          style="text-transform: uppercase;"
          fill="none"
          stroke="#F32929"
          stroke-width="1"
          opacity="0.25"
        >
          Better Recommendations
        </text>
      </svg>

      <!-- Main Page Title (Responsive) -->
      <h1 
        class="font-alumni font-bold text-black dark:text-white relative z-10 tracking-[-1px] sm:tracking-[-3px]"
        style="line-height: 72%; font-size: clamp(3.5rem, 10vw, 11rem);"
      >
        Better Recommendations
      </h1>
      <h2
        class="font-alumni font-bold text-black dark:text-white relative z-10 text-[1.6rem] sm:text-[2rem] lg:text-[3rem]"
        style="line-height: 72%; letter-spacing: -1px;"
      >
        Nuts, Bolts, and a Better Shopping Experience
      </h2>
    </div>

    <!-- Side-by-side Content -->
    <div class="relative w-full flex flex-col lg:flex-row items-end xl:items-center pl-0 z-20 pt-8 lg:pt-0">
      <!-- Text Content -->
      <div class="flex flex-col items-start w-full lg:max-w-2xl z-10">
        <p class="font-lato font-light text-body-large text-left mb-0 max-w-3xl lg:max-w-lg xl:max-w-2xl text-black dark:text-white">
            Sometimes, shopping should be as seamless as Oreos and milk&mdash;or in this case, bolts finding their perfect nuts and washers. But in the vast world of e-commerce, our fasteners category wasn't quite hitting the mark. It's an area we identified as having strong growth potential, so I came armed with a vision to make compatibility and convenience the name of the game.
        </p>
      </div>

      <!-- Tablet Screenshots -->
      <div class="ml-0 mt-8 lg:ml-6 lg:mt-0 flex items-center w-full lg:w-auto">
        <div class="flex flex-col md:flex-row gap-0 md:gap-1 justify-start w-full">
          <img 
            v-for="n in 2" 
            :key="n" 
            :src="`/Recs-${n}.png`" 
            :alt="`Better Recommendations screenshot ${n}`" 
            class="w-full md:w-[49%] lg:w-[420px] h-auto hero-drop-shadow rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript logic needed - using CSS clamp for responsive sizing
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