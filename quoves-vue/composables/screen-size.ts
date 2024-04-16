import { onMounted, onUnmounted, ref } from 'vue'

export function useScreenSize() {
  const screenSize = ref('')

  const updateScreenSize = () => {
    const width = window.innerWidth
    if (width >= 1280)
      screenSize.value = 'lg'
    else if (width >= 768)
      screenSize.value = 'md'
    else if (width >= 375)
      screenSize.value = 'sm'
    else
      screenSize.value = 'xs'
  }

  onMounted(() => {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })

  return screenSize
}
