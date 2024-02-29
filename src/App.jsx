import { useState } from 'react'
import Header from './ComponentsJsx/Header'
import Hero from './ComponentsJsx/Hero'
import Stack from './ComponentsJsx/Stack'
import Projects from './ComponentsJsx/Projects'
function App() {
  return(
    <div className='app'>
        <Header/>
        <Hero/>
        <Stack/>
        <Projects/>
    </div>
  )
  
}

export default App
