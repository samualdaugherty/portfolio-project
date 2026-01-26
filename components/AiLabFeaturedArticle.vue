<template>
  <div :class="['content-stretch flex flex-col lg:flex-row gap-4 items-start lg:items-center relative w-full', maxWidthClass]">
    <!-- Featured Image (Left) -->
    <div class="flex-shrink-0 w-full lg:w-[440px] relative">
      <router-link :to="article.route" class="block">
        <img 
          :src="article.image" 
          :alt="article.title" 
          class="w-full h-auto featured-shadow" 
        />
      </router-link>
      <span
        v-if="article.experiment"
        class="absolute top-2 left-2 bg-accent text-white font-lato font-bold text-[0.875rem] leading-[1.5] tracking-[0.28px] px-3 py-1 rounded-full"
      >
        Experiment
      </span>
    </div>
    
    <!-- Content (Right) -->
    <div class="flex-1 flex flex-col gap-2 items-start">
      <!-- Title and Button -->
      <div class="content-stretch flex gap-4 items-center w-full">
        <h3 class="font-alumni font-bold text-[2.5rem] md:text-[3rem] leading-[1.17] text-black dark:text-white tracking-[-0.96px]">
          <router-link :to="article.route" class="hover:underline hover:decoration-accent decoration-accent underline-offset-4">
            {{ article.title }}
          </router-link>
        </h3>
        <OnwardButton :to="article.route" />
      </div>
      
      <!-- Excerpt -->
      <p class="font-lato font-light text-[1.25rem] leading-[1.4] text-black dark:text-white">
        {{ article.excerpt }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  },
  maxWidthClass: {
    type: String,
    default: 'max-w-[952px]'
  }
})
</script>

<style scoped>
.featured-shadow {
  filter: drop-shadow(15.999px 32.249px 75px rgba(0,0,0,0.15))
          drop-shadow(10.37px 20.902px 43.924px rgba(0,0,0,0.11))
          drop-shadow(6.163px 12.422px 23.889px rgba(0,0,0,0.09))
          drop-shadow(3.2px 6.45px 12.188px rgba(0,0,0,0.08))
          drop-shadow(1.304px 2.628px 6.111px rgba(0,0,0,0.06))
          drop-shadow(0.296px 0.597px 2.951px rgba(0,0,0,0.04));
}
</style>
