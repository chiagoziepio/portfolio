import React from 'react'
import { motion } from 'framer-motion'
import { BiMenuAltRight } from "react-icons/bi";
const Nav = ({Handle_menuShow}) => {
  return (
    <motion.nav
    className='lx_nav'
    initial={{
      display:"none",
      y:-20
     }}
     animate={{
       display:"block",
       y:0
     }}
     transition={{
       duraton:4,
       ease:"easeIn",
       delay:3
     }}
    >
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
      <div className="menu" onClick={Handle_menuShow}>
      <BiMenuAltRight className='menuBtn' size={40}/>
      </div>
    </motion.nav>
  )
}

export default Nav