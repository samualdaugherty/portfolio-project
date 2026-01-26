<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- AI Lab Hero Section -->
    <AiLabHeroSection />
    
    <!-- Content Hero Section -->
    <div class="mt-8 lg:mt-4">
      <AiLabContentHero />
    </div>
    
    <!-- Intro Section with Bar -->
    <div class="relative w-full max-w-[1200px] mt-16">
      <AiLabIntroSection />
    </div>
    
    <!-- Section Heading: Pinned Posts -->
    <div class="mt-16 lg:mt-24 max-w-[1100px]">
      <SectionHeading 
        main-text="Updated and Relevant"
        main-text-mobile="Relevant"
        small-text="Pinned"
        bg-text="Pinned Forever"
        align="right"
        bgTextTop="top-[10%] sm:top-[40%] md:top-[55%] lg:top-[60%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-0 xl:left-0"
        bgTextSize="text-[100px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
      />
    </div>
    
    <!-- Pinned AI Lab Articles -->
    <div class="mt-12 content-stretch flex flex-col gap-11 items-start max-w-[1122px]">
      <AiLabFeaturedArticle 
        v-for="article in pinnedPosts" 
        :key="article.id"
        :article="article"
      />
    </div>
    
    <!-- Section Heading: Recent Projects -->
    <div class="mt-16 lg:mt-24 max-w-[1200px]">
      <SectionHeading 
        main-text="Projects and Experiments"
        main-text-mobile="Experiments"
        small-text="Recents"
        bg-text="The Latest"
        align="right"
        bgTextTop="top-[10%] sm:top-[40%] md:top-[55%] lg:top-[60%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-0 xl:left-0"
        bgTextSize="text-[100px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
      />
    </div>
    
    <!-- Recent AI Lab Articles -->
    <div class="mt-12 content-stretch flex flex-col gap-11 items-start max-w-[1600px]">
      <AiLabFeaturedArticle 
        v-for="article in recentPosts" 
        :key="article.id"
        :article="article"
        max-width-class="max-w-7xl"
      />
    </div>

    <!-- 3-column AI Lab Articles -->
    <div class="mt-16 lg:mt-24">
      <AiLabGrid :posts="gridPosts" />
    </div>
    
  </main>
</template>

<script setup>
// Components are auto-imported in Nuxt 3
import { getPinnedAiLabPosts, getRecentAiLabPosts, getGridAiLabPosts } from '../../data/aiLabPosts.js'

// Get pinned AI Lab posts
const pinnedPosts = getPinnedAiLabPosts()
// Get recent AI Lab posts
const recentPosts = getRecentAiLabPosts()
// Get AI Lab grid posts
const gridPosts = getGridAiLabPosts()
</script>

<style scoped>
</style>

