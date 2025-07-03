// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Compatibility date
  compatibilityDate: '2025-07-03',
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Module configurations
  css: ['~/assets/styles/tailwind.css'],

  // TypeScript Configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // App Configuration
  app: {
    head: {
      title: 'Sam Daugherty - Product Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon-light.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
        }
      ]
    }
  },

  // Runtime Configuration
  runtimeConfig: {
    public: {
      baseUrl: 'https://sambuilt.it'
    }
  },

  // Rendering Configuration
  ssr: true,
  
  // Router Configuration - to match current scroll behavior
  router: {
    options: {
      scrollBehaviorType: 'auto'
    }
  },

  // Build Configuration
  build: {
    transpile: []
  },

  // Development Configuration
  devServer: {
    port: 3000
  }
}) 