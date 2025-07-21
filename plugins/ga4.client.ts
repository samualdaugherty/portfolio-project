import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Load GA4 script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N91D97KHET'
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || []
      function gtag(...args: any[]) {(window as any).dataLayer.push(args)}
      gtag('js', new Date())
      gtag('config', 'G-N91D97KHET')
    }
    document.head.appendChild(script)
  }
}) 