import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ProgressProvider } from './ProgressContext.tsx';
import BadgeNotifier from './BadgeNotifier';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ProgressProvider> 
     <BadgeNotifier />
      <App />
     </ProgressProvider> 
  </StrictMode>,
)


