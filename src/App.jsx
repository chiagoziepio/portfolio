import { useEffect, useState } from 'react'
import Header from './ComponentsJsx/Header'
import Hero from './ComponentsJsx/Hero'
import Stack from './ComponentsJsx/Stack'
import Projects from './ComponentsJsx/Projects'
import {datas} from './ComponentsJsx/ProjectData'

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
    </div>
  )
  
}

export default App
