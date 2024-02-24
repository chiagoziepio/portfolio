import React from 'react'
import { motion } from 'framer-motion'
const Logo = () => {
  return (
    <motion.h2 className='logo'
    initial={{
     display:"none",
     y:-20
    }}
    animate={{
      display:"block",
      y:0
    }}
    transition={{
      duraton:5,
      ease:"easeIn",
      delay:2
    }}
    >PADDY</motion.h2>
  )
}

export default Logo