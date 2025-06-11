<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Writing Hero Section -->
    <WritingHeroSection />
    
    <!-- Additional writing content sections can be added here as needed -->
    
  </main>
</template>

<script setup>
import WritingHeroSection from '../components/WritingHeroSection.vue'
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