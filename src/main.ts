import './app.css'
import App from './App.svelte'
import { registerSW } from './pwa/registerSW'

// Register service worker for PWA functionality
registerSW()

const app = new App({
  target: document.getElementById('app')!
})

export default app