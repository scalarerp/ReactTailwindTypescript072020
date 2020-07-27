import React from 'react'
import Layout from './layout'

function App() {
  return (
    <>
      {/* overflow-y-auto para fixar o header*/}
      <div className="theme-light h-screen ">
        <Layout />
      </div>
    </>
  )
}

export default App
