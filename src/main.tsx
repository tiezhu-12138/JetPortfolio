import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/ibm-plex-mono/400.css'
import 'lenis/dist/lenis.css'
import './styles/global.css'
import App from './App'

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
