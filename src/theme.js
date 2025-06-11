import { ref, watch } from 'vue'

export const isDark = ref(false)

watch(isDark, (val) => {
  const html = document.documentElement
  if (val) html.classList.add('dark')
  else html.classList.remove('dark')
}) 