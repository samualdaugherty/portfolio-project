import { defineNuxtPlugin } from 'nuxt/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    console.log('AOS Plugin: Initializing...')
    
    // Use default AOS settings for testing
    AOS.init({
      duration: 800,
      once: false, // Allow animations to happen multiple times
      offset: 50, // Smaller offset to trigger animations sooner
      mirror: false,
      anchorPlacement: 'top-bottom'
    })
    
    console.log('AOS Plugin: Initialized successfully')
    
    // Refresh AOS on page load to animate elements already in viewport
    setTimeout(() => {
      AOS.refresh()
      const aosElements = document.querySelectorAll('[data-aos]')
      console.log('AOS refreshed, elements found:', aosElements.length)
      
      // Log details about each element
      aosElements.forEach((el, index) => {
        const animation = el.getAttribute('data-aos')
        const delay = el.getAttribute('data-aos-delay')
        const duration = el.getAttribute('data-aos-duration')
        console.log(`Element ${index + 1}:`, {
          tag: el.tagName,
          class: el.className.split(' ')[0],
          animation,
          delay,
          duration
        })
      })
    }, 100)
    
    // Also refresh when page is fully loaded
    window.addEventListener('load', () => {
      AOS.refresh()
    })
  }
}) 