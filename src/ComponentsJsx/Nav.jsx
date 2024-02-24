import React from 'react'
import { motion } from 'framer-motion'
const Nav = () => {
  return (
    <motion.nav
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
        <a href="#stacks">
          <li>Stacks</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact me</li>
        </a>
      </ul>
    </motion.nav>
  )
}

export default Nav