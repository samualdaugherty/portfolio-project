<template>
  <div class="relative w-full flex flex-col lg:flex-row lg:items-center pl-0 z-20 pt-8 lg:pt-0 max-w-[1200px]">
    <!-- Image Content (Left) -->
    <div class="mr-0 mb-8 lg:mr-6 lg:mb-0 flex items-start w-full lg:w-auto lg:max-w-2xl">
      <img 
        :src="evergreenPost.image" 
        :alt="evergreenPost.title" 
        class="w-full lg:w-[560px] h-auto hero-drop-shadow rounded-lg" 
      />
    </div>

    <!-- Text Content (Right) -->
    <div class="flex flex-col items-start w-full max-w-3xl lg:max-w-lg xl:max-w-xl z-10">
      <h2 class="font-alumni font-bold text-[2rem] text-black dark:text-white mb-2 leading-[.9]">{{ evergreenPost.title }}</h2>
      <p class="font-lato font-light text-body text-left text-black dark:text-white">
        {{ evergreenPost.excerpt }}
      </p>
      
      <div class="flex justify-between items-center w-full mt-4">
        <span class="text-body text-[1rem] text-gray-600 dark:text-gray-400">{{ evergreenPost.date }}</span>
        <ReadMoreButton @click="navigateToPost(evergreenPost.route)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ReadMoreButton from './ReadMoreButton.vue'
import { getEvergreenPost } from '../data/blogPosts.js'

const router = useRouter()

// Get the evergreen blog post
const evergreenPost = getEvergreenPost()

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