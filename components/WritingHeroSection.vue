<template>
  <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
    <!-- Page Title with Responsive Background Text -->
    <div class="relative w-full -mb-4 z-10">
      
      <!-- Orange Outlined Background Text (SVG) -->
      <svg
        class="absolute z-0 select-none pointer-events-none left-0 -top-1/2 sm:top-[5%] lg:top-1/2 translate-x-[-5vw] text-[clamp(8.5rem,27.5vw,22.5rem)] tracking-[-2px] md:tracking-[-5px]"
        width="1200"
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
          Story Telling
        </text>
      </svg>

      <!-- Main Page Title (Responsive) -->
      <h1 
        class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,24vw,18rem)] tracking-[-2px] md:tracking-[-5px]"
        style="line-height: 72%;"
      >
        Story Telling
      </h1>
    </div>
      
    <LatestFlourish />
      
    <!-- Side-by-side Content -->
    <div class="relative w-full flex flex-col lg:flex-row lg:items-center pl-0 z-20 pt-8 lg:pt-0 xl:mt-4 max-w-[1200px]">
      <!-- Text Content -->
      <div class="flex flex-col items-start w-full max-w-3xl lg:max-w-lg xl:max-w-xl z-10">
        <h2 class="font-alumni font-bold text-[3rem] text-black dark:text-white mb-2 leading-[.9]">
          <router-link :to="latestPost.route" class="hover:underline hover:decoration-accent decoration-accent underline-offset-4">
            {{ latestPost.title }}
          </router-link>
        </h2>
        <p class="font-lato font-light text-body text-left text-black dark:text-white">
          {{ latestPost.excerpt }}
        </p>
        
        <div class="flex justify-between items-center w-full mt-4">
          <span class="text-body text-[1rem] text-gray-600">{{ latestPost.date }}</span>
          <ReadMoreButton @click="navigateToPost(latestPost.route)" />
        </div>
      </div>

      <!-- Writing Image -->
      <div class="ml-0 mt-8 lg:ml-6 lg:mt-0 flex items-start w-full lg:w-auto lg:max-w-2xl">
        <router-link :to="latestPost.route" class="block w-full">
          <img 
            :src="latestPost.image" 
            :alt="latestPost.title" 
            class="w-full lg:w-[560px] h-auto hero-drop-shadow rounded-lg" 
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import LatestFlourish from './LatestFlourish.vue'
import ReadMoreButton from './ReadMoreButton.vue'
import { getLatestPost } from '../data/blogPosts.js'

const router = useRouter()

// Get the latest blog post
const latestPost = getLatestPost()

const navigateToPost = (route) => {
  router.push(route)
}
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