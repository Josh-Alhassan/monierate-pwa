import { registerSW as registerVitePWA } from 'virtual:pwa-register'

export function registerSW() {
  // Only register in production or if explicitly testing PWA functionality
  if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_PWA) {
    const updateSW = registerVitePWA({
      onNeedRefresh() {
        // Handle PWA update notification
        const shouldUpdate = window.confirm(
          'New content available. Reload to update?'
        )
        if (shouldUpdate) {
          updateSW(true)
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline')
      }
    })
  }
}