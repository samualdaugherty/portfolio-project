import { ref, computed, watch, onMounted } from 'vue'

// Global theme state that persists across all component instances
const globalThemeState = ref(false)

export const useTheme = () => {
  // Initialize theme on mount
  onMounted(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      globalThemeState.value = true
      document.documentElement.classList.add('dark')
    } else {
      globalThemeState.value = false
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleTheme = () => {
    globalThemeState.value = !globalThemeState.value
    
    if (globalThemeState.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Create computed properties that are reactive to theme changes
  const isDarkMode = computed(() => globalThemeState.value)
  const isDark = computed(() => globalThemeState.value)

  return {
    isDarkMode,
    isDark,
    toggleTheme
  }
} 