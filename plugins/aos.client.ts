import { defineNuxtPlugin } from 'nuxt/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
      
      // Custom settings for subtle animations
      offset: 50, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      
      // Disable on mobile for better performance
      disable: 'mobile'
    })
  }
}) 