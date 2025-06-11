<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import BackgroundStripes from './components/BackgroundStripes.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white z-10 relative overflow-x-hidden">
    <BackgroundStripes />
    <Navigation />
    <router-view />
    <SiteFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
