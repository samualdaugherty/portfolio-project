<template>
  <section class="relative w-full flex flex-col lg:flex-row-reverse justify-start lg:justify-end items-left pt-16 sm:pt-24 z-10 pl-0 md:pl-4">
    <div class="flex flex-col items-start w-full lg:w-auto">
      <h1 class="font-alumni font-bold text-xl-header sm:text-xl-header-sm mb-8 text-left text-black dark:text-white">
        A Quick<br />TL;DR
      </h1>
      <p class="font-lato font-light text-body-large text-left mb-8 max-w-3xl lg:max-w-lg text-black dark:text-white">
        I have almost a decade of experience working both as a "team-of-one" and leading teams large and small. I have worked on "tiny iterations," complete revamps, UX Strategy, and refining team and organizational processes &amp; operations.
      </p>
    </div>
    <div class="mr-0 mt-0 md:mt-8 lg:mr-6 lg:mt-0 flex items-center w-full lg:w-auto max-w-2xl">
      <img 
        :src="isLargeScreen ? '/Portrait.webp' : '/Portrait-landscape.webp'" 
        alt="Samual Portrait" 
        class="w-full lg:w-[360px] h-auto hero-drop-shadow" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isLargeScreen = ref(true)

function updateImageSource() {
  isLargeScreen.value = window.innerWidth >= 1024 // LG breakpoint
}

onMounted(() => {
  updateImageSource()
  window.addEventListener('resize', updateImageSource)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateImageSource)
})
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