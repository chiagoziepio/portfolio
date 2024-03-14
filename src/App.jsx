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
  const [isOpen, setIsopen] = useState(false);
  const thirdUrl = "https://drive.google.com/file/d/1Al4_eiuiPgtEJuR-bEe-DQG5xtcCSZbj/view?usp=sharing";
  const Handle_menuShow= ()=>{
    
    setIsopen(!isOpen)
    if(isOpen){
      document.body.style.overflow = "scroll"
    }else{
      document.body.style.overflow = "hidden"
    }
  }
  const download =  ()=>{

    
    fetch(thirdUrl).then(resp => resp.blob()).then(blob => {
        let fileURL = URL.createObjectURL(blob)
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "nduaguba chiagozie christopher dev cv.pdf";
        alink.click();
    }) 
    
}
  
  useEffect(()=>{
      setData(datas)
  },[])
  return(
    <div className='app'>
        <Header Handle_menuShow={Handle_menuShow}/>
        <Hero download={download}/>
        <Stack/>
        <Projects data={data}/>
        <Contact download={download}/>
        <MobileNav isOpen={isOpen} download={download} Handle_menuShow={Handle_menuShow}/>
        <Footer/>
    </div>
  )
  
}

export default App
