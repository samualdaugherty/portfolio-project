<template>
  <div :class="['relative w-full z-10', align === 'right' ? 'pr-4 sm:pr-8' : (align === 'justified' ? 'px-0' : 'pl-0 md:pl-8'), noPadding ? '' : 'md:pt-8 lg:pt-8']" data-aos="slide-up-blur-fast" data-aos-duration="600" data-aos-delay="100">
    <!-- Outlined Background Text -->
    <svg
      class="absolute z-0 select-none pointer-events-none"
      :class="[
        align === 'right' ? '-right-80 lg:right-[0]' : (align === 'justified' ? 'left-0' : 'left-0'),
        bgTextTop || (align === 'right' ? 'top-[40%] lg:top-1/2' : (align === 'justified' ? 'top-[40%] lg:top-1/2' : 'top-[40%] lg:top-1/2')),
        bgTextLeft
      ]"
      :width="bgTextWidth"
      :height="bgTextHeight"
      :style="align === 'right' 
        ? 'overflow: visible; --tw-translate-y: -24%; transform: translate(var(--tw-translate-x), var(--tw-translate-y));'
        : (align === 'justified' 
          ? 'overflow: visible; --tw-translate-y: 0%; --tw-translate-x: 25%; transform: translate(var(--tw-translate-x), var(--tw-translate-y));'
          : 'overflow: visible; --tw-translate-y: 0%; --tw-translate-x: 25%; transform: translate(var(--tw-translate-x), var(--tw-translate-y));')"
    >
      <text
        x="0"
        y="100"
        font-family="Alumni Sans, sans-serif"
        font-weight="700"
        :class="bgTextSize || `text-[${bgTextFontSize}]`"
        fill="none"
        :stroke="orange"
        stroke-width="1"
        :opacity="0.25"
        style="letter-spacing: -5px; text-transform: uppercase;"
      >
        {{ bgText || 'Recent Projects' }}
      </text>
    </svg>

    <!-- Main Heading Content -->
    <div :class="['flex items-center w-full relative z-10', align === 'right' ? 'justify-end' : (align === 'justified' ? 'justify-between' : 'sm:ml-2 md:ml-4')]">
      <template v-if="align === 'right'">
        <!-- Right-aligned: MainText > Line > SmallText -->
        <span class="font-alumni font-bold text-[2.5rem] sm:text-[4rem] lg:text-lg-header text-black dark:text-white section-shadow relative mr-2 md:mr-4 flex-shrink-0">
          <template v-if="scribble && (mainText || '').includes('Bit')">
            <span class="relative inline-block">
              <template v-for="(part, idx) in splitBit(mainText)" :key="idx">
                <span v-if="part === 'Bit'" class="relative inline-block">
                  Bit
                  <img src="/scribble.svg" alt="scribble" class="absolute -left-2 top-1/2 -translate-y-1/2 w-full pointer-events-none select-none" style="z-index:2; width: 130%; height: 115%; max-width: 130%; max-height: 115%;" />
                </span>
                <span v-else>{{ part }}</span>
              </template>
            </span>
          </template>
          <template v-else>
            <span class="sm:hidden">{{ mainTextMobile || mainText || 'Recent Projects' }}</span>
            <span class="hidden sm:inline">{{ mainText || 'Recent Projects' }}</span>
          </template>
        </span>
        <span class="block h-px bg-black dark:bg-white min-w-[20px]" :class="isMobile ? 'flex-grow' : 'flex-shrink-0'" :style="isMobile ? {} : { width: lineWidth }"></span>
        <span class="font-alumni font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-sm-header text-black dark:text-white ml-2 md:ml-4 flex-shrink-0">
          <span class="sm:hidden">{{ smallTextMobile || smallText || 'Work' }}</span>
          <span class="hidden sm:inline">{{ smallText || 'Work' }}</span>
        </span>
      </template>
      <template v-else-if="align === 'justified'">
        <!-- Justified: MainText + BgText > [SPACE-BETWEEN] > Line + SmallText -->
        <div class="relative">
          <span class="font-alumni font-bold text-[2.5rem] sm:text-[4rem] lg:text-lg-header text-black dark:text-white section-shadow flex-shrink-0">
            <template v-if="scribble && (mainText || '').includes('Bit')">
              <span class="relative inline-block">
                <template v-for="(part, idx) in splitBit(mainText)" :key="idx">
                  <span v-if="part === 'Bit'" class="relative inline-block">
                    Bit
                    <img src="/scribble.svg" alt="scribble" class="absolute -left-2 top-1/2 -translate-y-1/2 w-full pointer-events-none select-none" style="z-index:2; width: 130%; height: 115%; max-width: 130%; max-height: 115%;" />
                  </span>
                  <span v-else>{{ part }}</span>
                </template>
              </span>
            </template>
            <template v-else>
              <span class="sm:hidden">{{ mainTextMobile || mainText || 'Recent Projects' }}</span>
              <span class="hidden sm:inline">{{ mainText || 'Recent Projects' }}</span>
            </template>
          </span>
        </div>
        <div class="flex items-center">
          <span class="block h-px bg-black dark:bg-white min-w-[20px]" :class="isMobile ? 'flex-grow' : 'flex-shrink-0'" :style="isMobile ? {} : { width: lineWidth }"></span>
          <span class="font-alumni font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-sm-header text-black dark:text-white ml-2 md:ml-4 flex-shrink-0">
            <span class="sm:hidden">{{ smallTextMobile || smallText || 'Work' }}</span>
            <span class="hidden sm:inline">{{ smallText || 'Work' }}</span>
          </span>
        </div>
      </template>
      <template v-else>
        <!-- Left-aligned: SmallText > Line > MainText -->
        <span class="font-alumni font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-sm-header text-black dark:text-white mr-2 md:mr-4 sm:ml-2 md:ml-4 flex-shrink-0">
          <span class="sm:hidden">{{ smallTextMobile || smallText || 'Work' }}</span>
          <span class="hidden sm:inline">{{ smallText || 'Work' }}</span>
        </span>
        <span class="block h-px bg-black dark:bg-white min-w-[20px]" :class="isMobile ? 'flex-grow' : 'flex-shrink-0'" :style="isMobile ? {} : { width: lineWidth }"></span>
        <span class="font-alumni font-bold text-[2.5rem] sm:text-[4rem] lg:text-lg-header text-black dark:text-white ml-2 md:ml-4 section-shadow relative flex-shrink-0">
          <template v-if="scribble && (mainText || '').includes('Bit')">
            <span class="relative inline-block">
              <template v-for="(part, idx) in splitBit(mainText)" :key="idx">
                <span v-if="part === 'Bit'" class="relative inline-block">
                  Bit
                  <img src="/scribble.svg" alt="scribble" class="absolute -left-2 top-1/2 -translate-y-1/2 w-full pointer-events-none select-none" style="z-index:2; width: 130%; height: 115%; max-width: 130%; max-height: 115%;" />
                </span>
                <span v-else>{{ part }}</span>
              </template>
            </span>
          </template>
          <template v-else>
            <span class="sm:hidden">{{ mainTextMobile || mainText || 'Recent Projects' }}</span>
            <span class="hidden sm:inline">{{ mainText || 'Recent Projects' }}</span>
          </template>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  mainText: String,
  smallText: String,
  bgText: String,
  align: {
    type: String,
    default: 'left',
  },
  scribble: Boolean,
  noPadding: Boolean,
  // Responsive text overrides for mobile
  mainTextMobile: String,
  smallTextMobile: String,
  // Background text positioning
  bgTextLeft: {
    type: String,
    default: ''
  },
  bgTextTop: {
    type: String,
    default: ''
  },
  // Background text size override
  bgTextSize: {
    type: String,
    default: ''
  }
})

const orange = '#F32929'
const lineWidth = ref('180px')
const bgTextWidth = 900
const bgTextHeight = 220
const bgTextFontSize = ref('150px')
const isMobile = ref(false)

function updateLineWidth() {
  // Responsive: 150px to 200px depending on viewport width
  const vw = window.innerWidth
  isMobile.value = vw < 768 // MD breakpoint
  
  if (vw < 900) lineWidth.value = '100px'
  else if (vw < 1200) lineWidth.value = '150px'
  else if (vw < 1600) lineWidth.value = '180px'
  else lineWidth.value = '200px'
}

function updateBgTextSize() {
  // Responsive background text: 150px for mobile, 220px for LG+
  const vw = window.innerWidth
  if (vw < 1024) bgTextFontSize.value = '150px' // Default mobile size
  else bgTextFontSize.value = '220px' // LG+ size
}

function updateResponsiveElements() {
  updateLineWidth()
  updateBgTextSize()
}

function splitBit(text?: string) {
  if (!text) return []
  return text.split(/(Bit)/g)
}

onMounted(() => {
  updateResponsiveElements()
  window.addEventListener('resize', updateResponsiveElements)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateResponsiveElements)
})
</script>

<style scoped>
.section-shadow {
  filter: drop-shadow(0px 8px 32px rgba(16, 4, 23, 0.35));
}
</style>

<style>
body {
  overflow-x: hidden;
}
</style> 