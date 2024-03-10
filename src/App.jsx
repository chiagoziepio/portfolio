import { useEffect, useState } from 'react'
import Header from './ComponentsJsx/Header'
import Hero from './ComponentsJsx/Hero'
import Stack from './ComponentsJsx/Stack'
import Projects from './ComponentsJsx/Projects'
import {datas} from './ComponentsJsx/ProjectData'
import Contact from './ComponentsJsx/Contact'
import Footer from './ComponentsJsx/Footer'
import MobileNav from './ComponentsJsx/MobileNav'

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsopen] = useState(false)
  const Handle_menuShow= ()=>{
    setIsopen(!isOpen)
  }
  useEffect(()=>{
      setData(datas)
  },[])
  return(
    <div className='app'>
        <Header Handle_menuShow={Handle_menuShow}/>
        <Hero/>
        <Stack/>
        <Projects data={data}/>
        <Contact/>
        <MobileNav isOpen={isOpen}/>
        <Footer/>
    </div>
  )
  
}

export default App
