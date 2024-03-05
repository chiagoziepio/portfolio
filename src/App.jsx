import { useEffect, useState } from 'react'
import Header from './ComponentsJsx/Header'
import Hero from './ComponentsJsx/Hero'
import Stack from './ComponentsJsx/Stack'
import Projects from './ComponentsJsx/Projects'
import {datas} from './ComponentsJsx/ProjectData'
import Contact from './ComponentsJsx/Contact'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
      setData(datas)
  },[])
  return(
    <div className='app'>
        <Header/>
        <Hero/>
        <Stack/>
        <Projects data={data}/>
        <Contact/>
    </div>
  )
  
}

export default App
