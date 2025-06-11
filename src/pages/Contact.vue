<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Contact Hero Section -->
    <ContactHeroSection />
    
    <!-- Contact Form Section -->
    <section class="w-full mt-16 mb-8 lg:mb-12">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-8">
        <!-- Left: Content -->
        <div class="flex-1 lg:max-w-xl">
          <h2 class="font-alumni font-bold text-[3rem] text-black dark:text-white">
            Send Me a Message
          </h2>
          <p class="text-black dark:text-white text-body">
            While I'm not actively looking for a new role, I'm always open to hearing about new opportunities for collaboration, UX Consulting work, or just a good conversation. If you're interested in working together, please reach out!
          </p>
        </div>

        <!-- Right: Form -->
        <div class="flex-1 lg:max-w-xl">
          <!-- Success Message (shown after submission) -->
          <div v-if="formSubmitted" class="py-4 px-4 border border-accent rounded-xl">
            <h3 class="font-alumni font-bold text-[2.5rem] text-accent mb-0">
              Got it!
            </h3>
            <p class="text-black dark:text-white text-body">
              Thanks for reaching out! I'll get back to you eventually. Unless this was a spam message and then I'll just delete it. But if you were a human, then I'll definitely get back to you very soon!
            </p>
          </div>

          <!-- Contact Form (hidden after submission) -->
          <form 
            v-if="!formSubmitted"
            @submit.prevent="submitForm"
            class="space-y-4"
          >
            <!-- Name Field -->
            <div>
              <label for="name" class="block font-lato font-bold text-black dark:text-white text-body mb-2">
                Name <span class="text-accent">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-lato text-body rounded-lg focus:border-2 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block font-lato font-bold text-black dark:text-white text-body mb-2">
                Email <span class="text-accent">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-lato text-body rounded-lg focus:border-2 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>

            <!-- Company Field (Optional) -->
            <div>
              <label for="company" class="block font-lato font-bold text-black dark:text-white text-body mb-2">
                Company
              </label>
              <input 
                type="text" 
                id="company" 
                v-model="formData.company"
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-lato text-body rounded-lg focus:border-2 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
                placeholder="Your company (optional)"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block font-lato font-bold text-black dark:text-white text-body mb-2">
                Message <span class="text-accent">*</span>
              </label>
              <textarea 
                id="message" 
                v-model="formData.message"
                required
                rows="5"
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-lato text-body rounded-lg focus:border-2 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors resize-vertical disabled:opacity-50"
                placeholder="Tell me about your project, question, or just say hello..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="onward-btn group border border-accent rounded-full h-12 w-12 overflow-hidden px-0 focus:outline-none bg-transparent relative flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                :aria-label="isSubmitting ? 'Sending...' : 'Send Message'"
                @mouseenter="!isSubmitting && (hovered = true)"
                @mouseleave="hovered = false"
                @focus="!isSubmitting && (hovered = true)"
                @blur="hovered = false"
              >
                <span
                  class="onward-text font-alumni font-bold text-md-header whitespace-nowrap text-white absolute inset-0 flex items-center justify-center"
                  :class="(hovered && !isSubmitting) ? 'opacity-100' : 'opacity-0'"
                  style="font-size: 2rem; letter-spacing: -1px; transition: opacity 200ms ease-out; will-change: opacity;"
                >{{ isSubmitting ? 'WAIT!' : 'GO!' }}</span>
                <span
                  :class="(hovered && !isSubmitting)
                    ? 'relative flex items-center ml-1 mr-4 w-12 h-12 opacity-0' 
                    : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center opacity-100'"
                  style="transition: opacity 200ms ease-out; will-change: opacity;"
                >
                  <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none" class="w-8 h-8 text-black dark:text-white">
                    <path d="M34.0607 13.0607C34.6464 12.4749 34.6464 11.5251 34.0607 10.9393L24.5147 1.3934C23.9289 0.807614 22.9792 0.807613 22.3934 1.3934C21.8076 1.97919 21.8076 2.92893 22.3934 3.51472L30.8787 12L22.3934 20.4853C21.8076 21.0711 21.8076 22.0208 22.3934 22.6066C22.9792 23.1924 23.9289 23.1924 24.5147 22.6066L34.0607 13.0607ZM-1.31134e-07 13.5L33 13.5L33 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="currentColor"/>
                  </svg>
                  <!-- Loading spinner -->
                  <div v-else class="animate-spin rounded-full h-6 w-6 border-2 border-black dark:border-white border-t-transparent"></div>
                </span>
              </button>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="text-accent text-body text-center">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </section>
    
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ContactHeroSection from '../components/ContactHeroSection.vue'
import OnwardButton from '../components/OnwardButton.vue'

const hovered = ref(false)
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const errorMessage = ref('')

const formData = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

async function submitForm() {
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    const response = await fetch('https://formspree.io/f/xwpbolqb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      formSubmitted.value = true
      // Reset form data
      Object.assign(formData, {
        name: '',
        email: '',
        company: '',
        message: ''
      })
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    errorMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
    hovered.value = false
  }
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