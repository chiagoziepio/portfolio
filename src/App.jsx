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
  const linkUrl = "https://drive.google.com/uc?export=download&id=1Al4_eiuiPgtEJuR-bEe-DQG5xtcCSZbj"
  const Handle_menuShow= ()=>{
    
    setIsopen(!isOpen)
    if(!isOpen){
      document.body.classList.add("stop")
    }else{
      document.body.classList.remove("stop")
    }
  }
  const download =  ()=>{
    const a = document.createElement('a');
    document.body.appendChild(a)
    a.href = linkUrl
    a.download = "chiagozie_cv.pdf"
    a.click()
    document.body.removeChild(a)    
    /* fetch('http://localhost:3000/proxy').then(resp => resp.blob()).then(blob => {
        
        let alink = document.createElement("a");
        let fileURL = URL.createObjectURL(blob)
        alink.style.display= "none";
        alink.href = fileURL;
        alink.download = "nduaguba_chiagozie_dev_cv.pdf";
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink);
        window.URL.revokeObjectURL(fileURL);
    })  */
    
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
