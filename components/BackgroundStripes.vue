<template>
  <ClientOnly>
    <div class="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div class="absolute top-0 bottom-0" :style="stripeStyle(0)"></div>
      <div class="absolute top-0 bottom-0" :style="stripeStyle(1)"></div>
      <div class="absolute top-0 bottom-0" :style="stripeStyle(2)"></div>
      <div class="absolute top-0 bottom-0" :style="stripeStyle(3)"></div>
      <div class="absolute top-0 bottom-0" :style="stripeStyle(4)"></div>
      <div class="absolute top-0 bottom-0" :style="stripeStyle(5)"></div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const orange = '#F32929'
const black = '#100417'
const white = '#F7F4F3'

// Always use light mode - no dark mode detection
const getStripeColor = (idx: number) => {
  // 0: orange, 1: black, 2: orange, 3: orange, 4: black, 5: orange  
  if ([0, 2, 3, 5].includes(idx)) return orange
  if ([1, 4].includes(idx)) return black  // Always use black (light mode)
  return orange
}

const getStripeOpacity = () => 0.075  // Always use light mode opacity

const stripeStyle = (idx: number) => {
  // 6 stripes, 8vw margin left/right, so usable width = 100vw - 16vw
  // 5 spaces between 6 lines, so spacing = (usable width) / 5
  const margin = 8 // vw
  const usable = 100 - margin * 2
  const spacing = usable / 5
  return {
    left: `calc(${margin}vw + ${idx} * ${spacing}vw)`,
    width: '1px',
    height: '100%',
    background: getStripeColor(idx),
    opacity: getStripeOpacity(),
    zIndex: 0,
  }
}
</script> 