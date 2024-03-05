import React from 'react'
import '../ComponentsCss/Hero.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero' id='home'>
        <div className='heroUpperPart'>
            <h2>Hi am <span className='name'>CHRISTOPHER</span><br /> A deligient and dedicated <span className='category'>Frontend developer</span></h2>
            <a href='#' className='cv'><FaCloudDownloadAlt size={20}className='download_icon'/> Resume</a>
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