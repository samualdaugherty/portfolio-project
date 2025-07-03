<template>
  <section class="relative flex flex-col items-start mt-8 sm:mt-16 xl:mt-0 z-20">
    
    
    <!-- Mobile Layout (LG and below) -->
    <div class="flex flex-col w-full xl:hidden">
      <!-- Project Name and Arrow Button -->
      <div class="flex items-center w-full text-left justify-between sm:justify-start pl-0 xl:pl-[8rem]">
        <h2 class="font-alumni font-bold text-md-header sm:text-md-header-sm text-black dark:text-white mr-4 mb-[-8px]">
          <span class="sm:hidden">{{ shortTitle }}</span>
          <span class="hidden sm:inline">{{ title }}</span>
        </h2>
        <OnwardButton class="ml-2" :to="linkTo" />
      </div>
      
      <!-- Project Type -->
      <div class="mb-2 sm:mb-8 w-full text-left pl-0 xl:pl-[8rem]">
        <span class="font-alumni font-bold text-sm-header sm:text-sm-header-sm text-accent">{{ projectType }}</span>
      </div>

      <!-- Project Description -->
      <div class="mb-6 w-full text-left max-w-3xl pl-0 xl:pl-[8rem]">
        <p class="text-black dark:text-white text-body">{{ description }}</p>
      </div>

      <!-- Key Result -->
      <div class="mb-8 w-full text-left pl-0 xl:pl-[8rem]">
        <p class="text-black dark:text-white text-body">
          <strong>Key Result:</strong> {{ keyResult }}
        </p>
      </div>
      
      <!-- Screenshots with Rotated Label -->
      <div class="relative flex justify-start pl-4 xl:pl-[8rem]">
        <!-- Rotated Label -->
        <span 
          :class="getMobileLabelClasses()"
        >{{ labelText }}</span>
        
        <!-- Screenshots -->
        <div class="flex gap-2 md:gap-4 z-10">
          <router-link 
            v-for="n in imageCount" 
            :key="n" 
            :to="linkTo"
          >
            <img 
              :src="`/${imagePrefix}-${n}.${imagePrefix === 'wei' ? 'webp' : 'png'}`" 
              :alt="`${title} screenshot ${n}`" 
              :class="getImageClasses()"
            />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Desktop Layout (XL and above) -->
    <div class="hidden xl:block">
      <!-- Project Title and Type - Full Width on Top -->
      <div class="mb-8">
        <!-- Project Name and Arrow Button -->
        <div class="flex items-center w-full text-left -mb-2">
          <h2 class="font-alumni font-bold text-md-header-sm text-black dark:text-white mr-4">{{ title }}</h2>
          <OnwardButton class="ml-2" :to="linkTo" />
        </div>
        
        <!-- Project Type -->
        <div class="w-full text-left">
          <span class="font-alumni font-bold text-sm-header-sm text-accent">{{ projectType }}</span>
        </div>
      </div>

      <!-- Content and Screenshots Side by Side -->
      <div class="flex items-start gap-12 mb-8">
        <!-- Left Content -->
        <div class="flex flex-col flex-1 max-w-md">
          <!-- Project Description -->
          <div class="mb-6 w-full text-left">
            <p class="text-black dark:text-white text-body">{{ description }}</p>
          </div>

          <!-- Key Result -->
          <div class="w-full text-left">
            <p class="text-black dark:text-white text-body">
              <strong>Key Result:</strong> {{ keyResult }}
            </p>
          </div>
        </div>

        <!-- Right Screenshots -->
        <div :class="getScreenshotsContainerClasses()">
          <!-- Rotated Label -->
          <span 
            :class="getDesktopLabelClasses()"
          >{{ labelText }}</span>
          
          <!-- Screenshots -->
          <div class="flex gap-2 z-10">
            <router-link 
              v-for="n in imageCount" 
              :key="n" 
              :to="linkTo"
              class="block"
            >
              <img 
                :src="`/${imagePrefix}-${n}.${imagePrefix === 'wei' ? 'webp' : 'png'}`" 
                :alt="`${title} screenshot ${n}`" 
                :class="getDesktopImageClasses()"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OnwardButton from './OnwardButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  shortTitle: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keyResult: {
    type: String,
    required: true
  },
  labelText: {
    type: String,
    required: true
  },
  imageCount: {
    type: Number,
    required: true
  },
  imagePrefix: {
    type: String,
    required: true
  },
  // Mobile label positioning
  mobileLabelLeft: {
    type: String,
    default: 'left-[-68px] sm:left-[-98px] md:left-[-20px] xl:left-[12px]'
  },
  mobileLabelTop: {
    type: String,
    default: 'top-[55%]'
  },
  // Desktop label positioning
  desktopLabelLeft: {
    type: String,
    default: 'left-[-115px]'
  },
  desktopLabelTop: {
    type: String,
    default: 'top-[55%]'
  },
  // Link to case study page
  linkTo: {
    type: String,
    required: true
  }
})

function getImageClasses() {
  // Mobile/tablet layout classes
  if (props.imagePrefix === 'Recs' || props.imagePrefix === 'wei') {
    return 'h-auto sm:h-[360px] w-[324px] sm:w-auto hero-drop-shadow rounded-2xl max-w-3xl'
  }
  return 'w-[144px] sm:w-[180px] h-auto hero-drop-shadow rounded-2xl max-w-2xl'
}

function getDesktopImageClasses() {
  // Desktop layout classes - all images same height
  if (props.imagePrefix === 'Recs' || props.imagePrefix === 'wei') {
    return 'h-[300px] w-auto hero-drop-shadow rounded-2xl'
  }
  return 'w-[160px] h-auto hero-drop-shadow rounded-2xl'
}

function getScreenshotsContainerClasses() {
  // Container classes for tablet vs mobile screenshots
  if (props.imagePrefix === 'Recs' || props.imagePrefix === 'wei') {
    return 'relative flex-shrink-0 -translate-y-16 -mr-40'
  }
  return 'relative flex-shrink-0 -translate-y-16'
}

function getMobileLabelClasses() {
  // Mobile/tablet layout classes with dynamic positioning
  return `absolute ${props.mobileLabelLeft} ${props.mobileLabelTop} font-alumni font-bold text-md-header sm:text-md-header-sm text-black dark:text-white rotate-[-90deg] select-none pointer-events-none z-0`
}

function getDesktopLabelClasses() {
  // Desktop layout classes with dynamic positioning
  return `absolute ${props.desktopLabelLeft} ${props.desktopLabelTop} font-alumni font-bold text-md-header-sm text-black dark:text-white rotate-[-90deg] select-none pointer-events-none z-0`
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