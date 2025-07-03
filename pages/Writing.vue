<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Writing Hero Section -->
    <WritingHeroSection />
    
    
    
    <!-- Previous Posts Section -->
    <div class="mt-12 max-w-[1100px]">
      <SectionHeading 
        align="justified"
        main-text="The Other Stuff"
        small-text="Previous"
        bg-text="What I Wrote"
        bg-text-left="left-[-17rem]"
        bg-text-top="-top-[60%] sm:-top-[10%] md:top-[10%] lg:top-[25%]"
        bg-text-size="text-[120px] sm:text-[150px] lg:text-[220px]"
      />
    </div>
    
    <div class="mt-16 lg:mt-8 max-w-[1600px]">
      <!-- Previous Blog Post -->
      <div class="relative flex flex-col lg:flex-row lg:items-center gap-4 max-w-[1200px]">
        
        <!-- Image Content (Left) -->
        <div class="flex-shrink-0 lg:w-[400px]">
          <img 
            :src="previousPost.image" 
            :alt="previousPost.title" 
            class="w-full h-auto hero-drop-shadow" 
          />
        </div>
        
        <!-- Text Content (Right) -->
        <div class="flex flex-col items-start flex-grow xl:max-w-lg">
          <h3 class="font-alumni font-bold text-[2rem] text-black dark:text-white mb-2 leading-[.9]">{{ previousPost.title }}</h3>
          <p class="font-lato font-light text-body text-left text-black dark:text-white mb-4">
            {{ previousPost.excerpt }}
          </p>
          
          <div class="flex justify-between items-center w-full">
            <span class="text-body text-[1rem] text-gray-600">{{ previousPost.date }}</span>
            <ReadMoreButton @click="navigateToPost(previousPost.route)" />
          </div>
        </div>

        <!-- Orange Bar -->
        <div class="absolute z-0 w-full max-w-[1000px]">
          <img src="/read-bar.svg" alt="Read Bar" class="absolute left-[60rem] -top-[30rem] w-[145px] lg:w-[175px] h-auto z-0 hidden xl:block" />
        </div>
      </div>
    </div>
    
    <!-- Unified Blog Grid for All Remaining Posts -->
    <div class="mt-16 lg:mt-24 max-w-[1600px]">
      <BlogGrid :posts="remainingPosts" />
    </div>
    
    <!-- Evergreen Section -->
    <div class="mt-16 lg:mt-24 max-w-[1600px]">
      <EvergreenFlourish />
      <div class="-mt-4">
        <EvergreenBlogPost />
      </div>
    </div>
    
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import WritingHeroSection from '../components/WritingHeroSection.vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import SectionHeading from '../components/SectionHeading.vue'
import BlogGrid from '../components/BlogGrid.vue'
import EvergreenFlourish from '../components/EvergreenFlourish.vue'
import EvergreenBlogPost from '../components/EvergreenBlogPost.vue'
import { getPreviousPost, getRemainingPosts } from '../data/blogPosts.js'

const router = useRouter()

// Get blog data
const previousPost = getPreviousPost()
const remainingPosts = getRemainingPosts()

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