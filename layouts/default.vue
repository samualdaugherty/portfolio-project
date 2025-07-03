<script setup lang="ts">
// Components are auto-imported in Nuxt 3
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white z-10 relative overflow-x-hidden transition-colors duration-300">
    <BackgroundStripes />
    <Navigation />
    <slot />
    <SiteFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style> 