<template>
  <section class="w-full z-10 pl-0 max-w-[1600px]">
    <!-- Side-by-side Content -->
    <div class="relative w-full flex flex-col lg:flex-row lg:items-center pl-0 z-20 pt-8 lg:pt-0 xl:-mt-12">
      <!-- Text Content -->
      <div class="flex flex-col items-start w-full lg:w-auto lg:max-w-4xl z-10">
        <p class="font-lato font-light text-body-large text-left max-w-3xl lg:max-w-xl text-black dark:text-white">
          For quite some time now, I've been exploring AI extensively both in my professional and personal projects. Testing, experimenting, pushing the limits, and finding where AI succeeds and where it breaks. This is a record of some of those learnings. Some of these are quite long, others aren't. But read them anyway.
        </p>
      </div>

      <!-- Portrait Image -->
      <div class="ml-0 mt-8 lg:ml-6 lg:mt-0 flex items-start w-full lg:w-auto max-w-2xl">
        <img 
          src="/ai-portrait.png" 
          alt="AI Lab Portrait" 
          class="w-full lg:w-[560px] h-auto hero-drop-shadow"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript logic needed
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

