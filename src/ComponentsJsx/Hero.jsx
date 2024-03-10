import React from 'react'
import '../ComponentsCss/Hero.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion'

const Hero = () => {
    const firstUrl = "https://onedrive.live.com/embed?resid=D32039EB0B48BA39%21342&authkey=!AOrdpzejnKoZj-I&em=2";
    const secondUrl = "https://1drv.ms/b/s!Ajm6SAvrOSDTglba_64T-kZOpOYc?e=tbmPuG"
    const download =  ()=>{
        /* const theLink = await fetch(secondUrl)
        const blob = await theLink.blob()
        console.log(blob); */

        fetch(firstUrl,{
            mode:"same-origin"
        }).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            })
            })
        /* const blob = new Blob(["checking out"],{type: "text/plain"})
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob)
        a.download = "nduaguba chiagozie developer cv.txt"
        a.click() */
    }
    //"https://onedrive.live.com/embed?resid=D32039EB0B48BA39%21342&authkey=!AOrdpzejnKoZj-I&em=2" https://1drv.ms/b/s!Ajm6SAvrOSDTglba_64T-kZOpOYc?e=tbmPuG
  return (
    <section className='hero' id='home'>
        <div className='heroUpperPart'>
            <h2>Hi I am <span className='name'>CHRISTOPHER</span><br /> A deligient and dedicated <span className='category'>Frontend developer</span></h2>
            <button onClick={download} className='cv' ><FaCloudDownloadAlt size={20}className='download_icon'/> Resume</button>
        </div>
        <div className="hero_img">
            <div className="dev_icons firstpart">
                <img src="img/react.jpg" alt="" className="reactpics icons" />
                <img src="img/CSS3.jpg" className='icons' alt="css" />
            </div>
            <div className="main-container">
            <motion.img src="img/heroImg.jpeg" className='mainPics' alt="u"
            initial={{
                display:"none",
                y:100
            }}
            animate={{
                display:"block",
                y:0
            }}
            transition={{duration:2 , delay:1}}
            />
            </div>
            <div className="dev_icons secondpart">
                <img src="img/js.jpg"className='icons'  alt="js" />
                <img src="img/html.jpg"className='icons'  alt="ht" />
                <img src="img/booststrap.jpg" className='icons' alt="bs" />
            </div>
        </div>
        <div className="HeroLowerpart">
            <h4>Ever since I started my journey in the tech world, i have developed the skill of Problem solving <br />I am also a lover of Knowledge and learning</h4>

        <a href="mailto:christopherpaddy2017@gmail.com" className='mail'><MdAttachEmail className='mail_icon' size={20}/>mail me</a>

        </div>
    </section>
  )
}

export default Hero