import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Batching from './Batching.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Batching />
  </StrictMode>,
)
