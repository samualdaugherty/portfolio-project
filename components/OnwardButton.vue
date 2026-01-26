<template>
  <router-link
    :to="to"
    class="onward-btn group border border-accent rounded-full h-12 w-12 overflow-hidden px-0 focus:outline-none bg-transparent relative flex items-center justify-center no-underline"
    aria-label="Onward"
  >
    <span
      class="onward-text font-alumni font-bold text-md-header whitespace-nowrap text-white absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus:opacity-100"
      style="font-size: 2rem; letter-spacing: -1px; will-change: opacity;"
    >GO!</span>
    <span
      class="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-200 ease-out group-hover:opacity-0 group-focus:opacity-0"
      style="will-change: opacity;"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none" class="w-8 h-8 text-black dark:text-white">
        <path d="M34.0607 13.0607C34.6464 12.4749 34.6464 11.5251 34.0607 10.9393L24.5147 1.3934C23.9289 0.807614 22.9792 0.807613 22.3934 1.3934C21.8076 1.97919 21.8076 2.92893 22.3934 3.51472L30.8787 12L22.3934 20.4853C21.8076 21.0711 21.8076 22.0208 22.3934 22.6066C22.9792 23.1924 23.9289 23.1924 24.5147 22.6066L34.0607 13.0607ZM-1.31134e-07 13.5L33 13.5L33 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="currentColor"/>
      </svg>
    </span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<style scoped>
.onward-btn {
  width: 48px;
  height: 48px;
  border-width: 1px;
  border-style: solid;
  border-color: #F32929;
  background: transparent;
  transition: background-color 200ms ease-out, border-color 200ms ease-out;
  will-change: background-color;
}
.onward-btn:focus {
  outline: none;
}
.onward-btn:hover,
.onward-btn:focus,
.onward-btn:active,
.onward-btn:focus-visible {
  background-color: #F32929;
  border-color: #F32929;
}
</style> 