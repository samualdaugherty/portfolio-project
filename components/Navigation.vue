<template>
  <nav class="w-full relative z-50">
    <div class="w-full max-w-[1600px] flex justify-between items-end pl-4 md:pl-8 pr-4 md:pr-8">
      <router-link to="/" class="flex items-center">
        <img :src="isDarkMode ? '/nav-logo-dark.png' : '/nav-logo-light.png'" alt="Logo" class="w-[176px] h-auto" />
      </router-link>
      
      <!-- Desktop Navigation (LG and up) -->
      <div class="hidden lg:flex items-center gap-8 mb-1">
        <router-link to="/about" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="relative font-alumni font-bold text-nav-link text-black dark:text-white hover:text-black dark:hover:text-white">
            <span v-if="route.path === '/about'" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]" style="width:135%;height:140%;display:block;">
              <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
            </span>
            <span class="relative z-10">ABOUT</span>
          </a>
        </router-link>
        <router-link to="/work" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="relative font-alumni font-bold text-nav-link text-black dark:text-white hover:text-black dark:hover:text-white">
            <span v-if="isSectionActive('/work')" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]" style="width:135%;height:140%;display:block;">
              <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
            </span>
            <span class="relative z-10">WORK</span>
          </a>
        </router-link>
        <router-link to="/ai-lab" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="relative font-alumni font-bold text-nav-link text-black dark:text-white hover:text-black dark:hover:text-white">
            <span v-if="isSectionActive('/ai-lab')" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]" style="width:135%;height:140%;display:block;">
              <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
            </span>
            <span class="relative z-10">A<span class="text-accent">i</span> LAB</span>
          </a>
        </router-link>
        <router-link to="/writing" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="relative font-alumni font-bold text-nav-link text-black dark:text-white hover:text-black dark:hover:text-white">
            <span v-if="isSectionActive('/writing')" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]" style="width:135%;height:140%;display:block;">
              <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
            </span>
            <span class="relative z-10">WRITING</span>
          </a>
        </router-link>
        <router-link to="/contact" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="relative font-alumni font-bold text-nav-link text-black dark:text-white hover:text-black dark:hover:text-white">
            <span v-if="route.path === '/contact'" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]" style="width:135%;height:140%;display:block;">
              <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
            </span>
            <span class="relative z-10">CONTACT</span>
          </a>
        </router-link>
        <button
          class="w-9 h-9 relative theme-toggle group focus:outline-none focus-visible:outline-none outline-none ring-0"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <!-- Light Mode SVGs -->
          <span v-if="!isDarkMode" class="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.121 26.838C27.9066 28.2088 25.2957 29 22.5 29C14.4919 29 8 22.5081 8 14.5C8 10.4046 9.69784 6.70577 12.428 4.06897C6.90277 6.2809 3 11.6847 3 18C3 26.2842 9.71573 33 18 33C22.9798 33 27.3928 30.5733 30.121 26.838Z" fill="#100417"/>
            </svg>
          </span>
          <span v-if="!isDarkMode" class="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 29C21.2841 29 27.9999 22.2843 27.9999 14C27.9999 10.4186 26.7447 7.13029 24.6503 4.55106C29.5982 7.00243 33 12.1039 33 18C33 26.2843 26.2843 33 18 33C13.2972 33 9.09983 30.8358 6.34961 27.4489C8.35379 28.4419 10.6117 29 12.9999 29Z" fill="#F32929"/>
            </svg>
          </span>
          <!-- Dark Mode SVGs -->
          <span v-if="isDarkMode" class="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <circle cx="18" cy="18" r="6" fill="#F7F4F3"/>
              <rect x="17" y="5" width="2" height="6" rx="1" fill="#F7F4F3"/>
              <rect x="17" y="25" width="2" height="6" rx="1" fill="#F7F4F3"/>
              <rect x="31" y="17" width="2" height="6" rx="1" transform="rotate(90 31 17)" fill="#F7F4F3"/>
              <rect x="11" y="17" width="2" height="6" rx="1" transform="rotate(90 11 17)" fill="#F7F4F3"/>
              <rect x="26.4868" y="8.09863" width="2" height="6.00264" rx="1" transform="rotate(45 26.4868 8.09863)" fill="#F7F4F3"/>
              <rect x="12.3433" y="22.2426" width="2" height="6.00489" rx="1" transform="rotate(45 12.3433 22.2426)" fill="#F7F4F3"/>
              <rect x="27.9014" y="26.4875" width="2" height="6.00312" rx="1" transform="rotate(135 27.9014 26.4875)" fill="#F7F4F3"/>
              <rect x="13.7573" y="12.3431" width="2" height="5.99883" rx="1" transform="rotate(135 13.7573 12.3431)" fill="#F7F4F3"/>
            </svg>
          </span>
          <span v-if="isDarkMode" class="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <circle cx="18" cy="18" r="6" fill="#F32929"/>
              <rect x="32" y="17" width="2" height="8" rx="1" transform="rotate(90 32 17)" fill="#F32929"/>
              <rect x="11" y="17" width="2" height="8" rx="1" transform="rotate(90 11 17)" fill="#F32929"/>
              <rect x="19" y="33" width="2" height="8" rx="1" transform="rotate(-180 19 33)" fill="#F32929"/>
              <rect x="19" y="11.0001" width="2" height="8" rx="1" transform="rotate(-180 19 11.0001)" fill="#F32929"/>
              <rect x="29.3174" y="27.9028" width="2" height="8.00453" rx="1" transform="rotate(135 29.3174 27.9028)" fill="#F32929"/>
              <rect x="13.7573" y="12.3433" width="2" height="7.99696" rx="1" transform="rotate(135 13.7573 12.3433)" fill="#F32929"/>
              <rect x="8.10303" y="29.311" width="2" height="7.9963" rx="1" transform="rotate(-135 8.10303 29.311)" fill="#F32929"/>
              <rect x="23.6572" y="13.7574" width="2" height="8" rx="1" transform="rotate(-135 23.6572 13.7574)" fill="#F32929"/>
            </svg>
          </span>
        </button>
      </div>

      <!-- Mobile Navigation (MD and below) -->
      <div class="flex lg:hidden items-center gap-4 mb-1">
        <!-- Dark Mode Toggle -->
        <button
          class="w-9 h-9 relative theme-toggle group focus:outline-none focus-visible:outline-none outline-none ring-0"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <!-- Light Mode SVGs -->
          <span v-if="!isDarkMode" class="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.121 26.838C27.9066 28.2088 25.2957 29 22.5 29C14.4919 29 8 22.5081 8 14.5C8 10.4046 9.69784 6.70577 12.428 4.06897C6.90277 6.2809 3 11.6847 3 18C3 26.2842 9.71573 33 18 33C22.9798 33 27.3928 30.5733 30.121 26.838Z" fill="#100417"/>
            </svg>
          </span>
          <span v-if="!isDarkMode" class="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 29C21.2841 29 27.9999 22.2843 27.9999 14C27.9999 10.4186 26.7447 7.13029 24.6503 4.55106C29.5982 7.00243 33 12.1039 33 18C33 26.2843 26.2843 33 18 33C13.2972 33 9.09983 30.8358 6.34961 27.4489C8.35379 28.4419 10.6117 29 12.9999 29Z" fill="#F32929"/>
            </svg>
          </span>
          <!-- Dark Mode SVGs -->
          <span v-if="isDarkMode" class="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <circle cx="18" cy="18" r="6" fill="#F7F4F3"/>
              <rect x="17" y="5" width="2" height="6" rx="1" fill="#F7F4F3"/>
              <rect x="17" y="25" width="2" height="6" rx="1" fill="#F7F4F3"/>
              <rect x="31" y="17" width="2" height="6" rx="1" transform="rotate(90 31 17)" fill="#F7F4F3"/>
              <rect x="11" y="17" width="2" height="6" rx="1" transform="rotate(90 11 17)" fill="#F7F4F3"/>
              <rect x="26.4868" y="8.09863" width="2" height="6.00264" rx="1" transform="rotate(45 26.4868 8.09863)" fill="#F7F4F3"/>
              <rect x="12.3433" y="22.2426" width="2" height="6.00489" rx="1" transform="rotate(45 12.3433 22.2426)" fill="#F7F4F3"/>
              <rect x="27.9014" y="26.4875" width="2" height="6.00312" rx="1" transform="rotate(135 27.9014 26.4875)" fill="#F7F4F3"/>
              <rect x="13.7573" y="12.3431" width="2" height="5.99883" rx="1" transform="rotate(135 13.7573 12.3431)" fill="#F7F4F3"/>
            </svg>
          </span>
          <span v-if="isDarkMode" class="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F32929"/>
              <circle cx="18" cy="18" r="6" fill="#F32929"/>
              <rect x="32" y="17" width="2" height="8" rx="1" transform="rotate(90 32 17)" fill="#F32929"/>
              <rect x="11" y="17" width="2" height="8" rx="1" transform="rotate(90 11 17)" fill="#F32929"/>
              <rect x="19" y="33" width="2" height="8" rx="1" transform="rotate(-180 19 33)" fill="#F32929"/>
              <rect x="19" y="11.0001" width="2" height="8" rx="1" transform="rotate(-180 19 11.0001)" fill="#F32929"/>
              <rect x="29.3174" y="27.9028" width="2" height="8.00453" rx="1" transform="rotate(135 29.3174 27.9028)" fill="#F32929"/>
              <rect x="13.7573" y="12.3433" width="2" height="7.99696" rx="1" transform="rotate(135 13.7573 12.3433)" fill="#F32929"/>
              <rect x="8.10303" y="29.311" width="2" height="7.9963" rx="1" transform="rotate(-135 8.10303 29.311)" fill="#F32929"/>
              <rect x="23.6572" y="13.7574" width="2" height="8" rx="1" transform="rotate(-135 23.6572 13.7574)" fill="#F32929"/>
            </svg>
          </span>
        </button>

        <!-- Hamburger Menu Button -->
        <button
          class="w-8 h-8 relative focus:outline-none focus-visible:outline-none outline-none ring-0 group z-50"
          :class="{ 'invisible': isMobileMenuOpen }"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <!-- Hamburger Icon -->
          <div class="flex flex-col justify-center items-end w-full h-full space-y-1">
            <div class="bg-black dark:bg-white w-6 h-1 transition-all duration-300 group-hover:w-6"></div>
            <div class="bg-black dark:bg-white w-6 h-1 transition-all duration-300 group-hover:w-7.5"></div>
            <div class="bg-accent w-7.5 h-1 transition-all duration-300 group-hover:w-6"></div>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in-out"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed inset-0 z-40 lg:hidden bg-white dark:bg-black transition-colors duration-300"
      >
        <!-- Logo in mobile menu -->
        <div class="absolute top-0 left-8 z-50">
          <router-link to="/" class="flex items-center" @click="closeMobileMenu">
            <img :src="isDarkMode ? '/nav-logo-dark.png' : '/nav-logo-light.png'" alt="Logo" class="w-[176px] h-auto" />
          </router-link>
        </div>

        <!-- Fixed Close Button -->
        <div class="fixed top-8 right-8 z-50">
          <button
            class="w-8 h-8 relative focus:outline-none focus-visible:outline-none outline-none ring-0 group"
            aria-label="Close menu"
            @click="closeMobileMenu"
          >
            <div class="flex justify-center items-center w-full h-full relative">
              <div class="relative w-6 h-6">
                <div class="absolute top-1/2 left-1/2 w-6 h-1 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black dark:bg-white"></div>
                <div class="absolute top-1/2 left-1/2 w-6 h-1 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black dark:bg-white"></div>
              </div>
            </div>
          </button>
        </div>

        <div class="flex flex-col px-4 pt-32 h-full">
          <router-link 
            to="/about" 
            custom 
            v-slot="{ href, navigate }"
            @click="closeMobileMenu"
          >
            <a 
              :href="href" 
              @click="navigate" 
              class="relative font-alumni font-bold py-4 mobile-nav-link text-black dark:text-white"
            >
              <span v-if="route.path === '/about'" class="absolute -left-6 -top-2 z-[0]" style="width:18rem;height:8rem;display:block;">
                <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
              </span>
              <span class="relative z-10">ABOUT</span>
            </a>
          </router-link>
          
          <router-link 
            to="/work" 
            custom 
            v-slot="{ href, navigate }"
            @click="closeMobileMenu"
          >
            <a 
              :href="href" 
              @click="navigate" 
              class="relative font-alumni font-bold py-4 mobile-nav-link text-black dark:text-white"
            >
              <span v-if="isSectionActive('/work')" class="absolute -left-6 -top-2 z-[0]" style="width:18rem;height:8rem;display:block;">
                <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
              </span>
              <span class="relative z-10">WORK</span>
            </a>
          </router-link>
          
          <router-link 
            to="/ai-lab" 
            custom 
            v-slot="{ href, navigate }"
            @click="closeMobileMenu"
          >
            <a 
              :href="href" 
              @click="navigate" 
              class="relative font-alumni font-bold py-4 mobile-nav-link text-black dark:text-white"
            >
              <span v-if="isSectionActive('/ai-lab')" class="absolute -left-6 -top-2 z-[0]" style="width:18rem;height:8rem;display:block;">
                <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
              </span>
              <span class="relative z-10">A<span class="text-accent">i</span> LAB</span>
            </a>
          </router-link>
          
          <router-link 
            to="/writing" 
            custom 
            v-slot="{ href, navigate }"
            @click="closeMobileMenu"
          >
            <a 
              :href="href" 
              @click="navigate" 
              class="relative font-alumni font-bold py-4 mobile-nav-link text-black dark:text-white"
            >
              <span v-if="isSectionActive('/writing')" class="absolute -left-6 -top-2 z-[0]" style="width:22rem;height:8rem;display:block;">
                <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
              </span>
              <span class="relative z-10">WRITING</span>
            </a>
          </router-link>
          
          <router-link 
            to="/contact" 
            custom 
            v-slot="{ href, navigate }"
            @click="closeMobileMenu"
          >
            <a 
              :href="href" 
              @click="navigate" 
              class="relative font-alumni font-bold py-4 mobile-nav-link text-black dark:text-white"
            >
              <span v-if="route.path === '/contact'" class="absolute -left-6 -top-2 z-[0]" style="width:22rem;height:8rem;display:block;">
                <img src="/nav-circle.svg" alt="active" class="w-full h-full" />
              </span>
              <span class="relative z-10">CONTACT</span>
            </a>
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const { isDarkMode, toggleTheme } = useTheme()

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function isSectionActive(prefix: string) {
  return route.path === prefix || route.path.startsWith(`${prefix}/`)
}
</script>

<style scoped>
.theme-toggle span {
  pointer-events: none;
}
.theme-toggle:focus, .theme-toggle:active, .theme-toggle:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

/* Custom width for hover effect */
.w-7\.5 {
  width: 1.875rem; /* 30px */
}

/* Mobile navigation links styling */
.mobile-nav-link {
  font-size: 8rem;
  line-height: 5rem;
  letter-spacing: -6px;
}
</style> 