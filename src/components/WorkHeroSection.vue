<template>
  <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
    <!-- Page Title with Responsive Background Text -->
    <div class="relative w-full -mb-4 z-10">
      
      <!-- Orange Outlined Background Text (SVG) -->
      <svg
        class="absolute z-0 select-none pointer-events-none left-0 -top-1/2 sm:top-[5%] lg:top-1/2 translate-x-[-5vw] text-[clamp(8.5rem,22.5vw,22.5rem)]"
        width="1200"
        height="300"
        style="overflow: visible;"
      >
        <text
          x="0"
          y="100"
          font-family="Alumni Sans, sans-serif"
          font-weight="700"
          style="letter-spacing: -5px; text-transform: uppercase;"
          fill="none"
          stroke="#F32929"
          stroke-width="1"
          opacity="0.25"
        >
          Look At My Stuff
        </text>
      </svg>

      <!-- Main Page Title (Responsive) -->
      <h1 
        class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,18vw,18rem)]"
        style="line-height: 72%; letter-spacing: -5px;"
      >
        Look At My Stuff
      </h1>
    </div>

    <!-- Side-by-side Content -->
    <div class="relative w-full flex flex-col lg:flex-row items-center pl-0 z-20 pt-16 lg:pt-0">
      <!-- Text Content -->
      <div class="flex flex-col items-start w-full lg:w-auto lg:max-w-2xl z-10">
        <p class="font-lato font-light text-body-large text-left mb-8 max-w-3xl lg:max-w-lg text-black dark:text-white">
          I am an experienced Product Designer based out of Peoria, IL., USA, with almost a decade of experience leading teams in the world of Insurance, FinTech, and e&#8209;Commerce.
        </p>
        <p class="font-lato font-light text-body-large text-left max-w-3xl lg:max-w-lg text-black dark:text-white">
          If you're a Hiring Manager, <router-link to="/tldr" class="font-bold no-underline text-black dark:text-white">click here for the tl;dr.</router-link>
        </p>
      </div>

      <!-- Portrait Image -->
      <div class="ml-0 mt-8 lg:ml-6 lg:mt-0 flex items-center w-full lg:w-auto max-w-2xl">
        <img 
          src="/Work-Portrait.webp" 
          alt="Samual Work Portrait" 
          class="w-full lg:w-[560px] h-auto hero-drop-shadow" 
        />
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