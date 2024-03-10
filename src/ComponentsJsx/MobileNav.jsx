import React from 'react'
import { motion } from 'framer-motion'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import '../ComponentsCss/MobileNav.css'

const MobileNav = ({isOpen}) => {
  return (
    <>
    {isOpen &&
        <motion.div className='mobileNav'
         initial={{
            width:0
         }}
         animate={{
            width:"95vw"
         }}
         transition={{
            duration:1,
            
         }}
        >
            <nav className='altNav'>
                <ul>
                <a href="#home">
                <li>Home</li>
                </a>
                <a href="#stack">
                <li>Stack</li>
                </a>
                <a href="#projects">
                <li>Projects</li>
                </a>
                <a href="#contact">
                <li>Contact me</li>
                </a>
                </ul>
            </nav>
            <div className="cv_mail">
                <button className='cv' ><FaCloudDownloadAlt size={20}className='download_icon'/> Resume</button>
                <a href="mailto:christopherpaddy2017@gmail.com" className='mail'><MdAttachEmail className='mail_icon' size={20}/>mail me</a>
            </div>
        </motion.div>
        
    }
    </>
    
    
  )
}

export default MobileNav