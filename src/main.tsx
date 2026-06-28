import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Route as MishRoute } from './routes/mishraaf'

// Some route files export `component` as named export, others might export differently.
// Mishraaf route in this repo defines `component: MishraafPage` inside Route, so it's available at MishRoute.component

const MishComponent = (MishRoute as any)?.component ?? (() => <div style={{padding:20}}>Unable to load Mishraaf page component.</div>)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MishComponent />
  </React.StrictMode>
)
