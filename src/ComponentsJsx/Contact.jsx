import React from 'react'
import '../ComponentsCss/Contact.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

const Contact = ({download}) => {
  return (
    <section className='contact' id='contact'>
        <motion.h2 
        initial={{
            x:400
        }}
        whileInView={{
            x:0
        }}
        transition={{
            duration:2
        }}
        className="sectionTitle"><span className="firstLetter">C</span>ontact</motion.h2>
        <div className="linksBx">
                
                    <a href="https://twitter.com/paddy_chi?s=90" className='link'><FaXTwitter size={25} className='link_icon'/>Paddy</a>
                    <a href="https://github.com/chiagoziepio" className='link'><FaGithub size={25} className='link_icon'/>Git Profile</a>
                
                
                    <a href="tel:+2348167344653" className='link'><FaPhoneVolume size={25} className='link_icon'/>Call me</a>
                    <button className='link'><FaCloudDownloadAlt size={25}className='link_icon'/> Resume</button>
                    <a href="mailto:christopherpaddy2017@gmail.com" className='link'><MdAttachEmail className='link_icon' size={25}/>mail me</a>
                
        </div>
        
    </section>
  )
}

export default Contact