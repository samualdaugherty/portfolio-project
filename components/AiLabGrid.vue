<template>
  <div class="ai-lab-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 max-w-[1600px]">
    <article
      v-for="post in posts"
      :key="post.id"
      class="flex flex-col"
    >
      <div class="mb-4 relative">
        <router-link :to="post.route" class="block">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-auto object-cover hero-drop-shadow"
          />
        </router-link>
        <span
          v-if="post.experiment"
          class="absolute top-2 left-2 bg-accent text-white font-lato font-bold text-[0.875rem] leading-[1.5] tracking-[0.28px] px-3 py-1 rounded-full"
        >
          Experiment
        </span>
      </div>
      <div class="flex flex-col flex-grow">
        <h3 class="font-alumni font-bold text-[2.25rem] text-black dark:text-white mb-2 leading-[1.1]">
          <router-link :to="post.route" class="hover:underline hover:decoration-accent decoration-accent underline-offset-4">
            {{ post.title }}
          </router-link>
        </h3>
        <p class="font-lato font-light text-body text-left text-black dark:text-white">
          {{ post.excerpt }}
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
interface AiLabPost {
  id: string
  title: string
  excerpt: string
  image: string
  route: string
  experiment?: boolean
}

defineProps<{
  posts: AiLabPost[]
}>()
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
