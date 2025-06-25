<template>
  <div class="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
    <article 
      v-for="post in posts" 
      :key="post.id"
      class="blog-card flex flex-col"
    >
      <!-- Image -->
      <div class="mb-4">
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-48 object-cover hero-drop-shadow"
        />
      </div>
      
      <!-- Content -->
      <div class="flex flex-col flex-grow">
        <!-- Title -->
        <h3 class="font-alumni font-bold text-[2rem] text-black dark:text-white mb-2 leading-[.9]">
          {{ post.title }}
        </h3>
        
        <!-- Excerpt -->
        <p class="font-lato font-light text-body text-left text-black dark:text-white mb-4 flex-grow">
          {{ post.excerpt }}
        </p>
        
        <!-- Date and Read More Button -->
        <div class="flex justify-between items-center mt-auto">
          <span class="text-body text-[1rem] text-gray-600 dark:text-gray-400">
            {{ post.date }}
          </span>
          <ReadMoreButton @click="navigateToPost(post.route)" />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ReadMoreButton from './ReadMoreButton.vue'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  route: string
}

defineProps<{
  posts: BlogPost[]
}>()

const router = useRouter()

const navigateToPost = (route: string) => {
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