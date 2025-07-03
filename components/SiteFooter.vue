<template>
  <footer class="w-full bg-white dark:bg-black pt-24 pb-4 pl-4 md:pl-8 pr-4 md:pr-8">
    <div class="max-w-[1200px] flex flex-col items-start">
      <!-- Logo Row -->
      <div class="flex items-end mb-2">
        <img :src="isDarkMode ? '/nav-logo-dark.png' : '/nav-logo-light.png'" alt="Footer Logo" class="w-[176px] h-auto" />
      </div>
      <!-- Titles -->
      <div class="mb-1">
        <div class="font-lato font-light text-black dark:text-white text-[1.25rem] leading-tight">Lead Product &amp; UX Designer</div>
        <div class="font-lato font-light text-black dark:text-white text-[1.25rem] leading-tight">Dad, husband, artist, and late night snacker</div>
      </div>
      <!-- Links Row -->
      <div class="mt-4 mb-6 flex items-center gap-6">
        <span class="font-lato font-light text-black dark:text-white text-[1.25rem]">Find me online:</span>
        <a href="https://www.linkedin.com/in/samualdaugherty/" target="_blank" rel="noopener" class="font-lato font-bold text-[1.25rem] text-accent hover:underline">Linkedin</a>
        <router-link to="/contact" class="font-lato font-bold text-[1.25rem] text-accent hover:underline">Contact</router-link>
      </div>
      <!-- Copyright -->
      <div class="mt-2 font-lato text-black dark:text-white text-[0.95rem] opacity-60">
        © {{ year }} Coffee Fueled Rants – All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()
const year = new Date().getFullYear()
</script>

<style scoped>
.text-accent {
  color: #F32929;
}
</style> 