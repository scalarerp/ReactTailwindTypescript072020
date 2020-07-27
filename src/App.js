import React from 'react'
import Layout from './layout'

import Hero from './components/hero'

function App() {
  return (
    <>
      <div className="theme-light flex flex-col">
        <Layout />
        <Hero />
      </div>
    </>
  )
}

export default App
