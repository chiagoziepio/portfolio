import Logo from './Logo'
import Nav from './Nav'
import { motion } from 'framer-motion'
import '../ComponentsCss/Header.css'
const Header = () => {
  return (
    <motion.header
    initial={{
      y:-20
    }}
    animate={{
      y:0
    }}
    
    >
        <Logo/>
        <Nav/>
    </motion.header>
  )
}

export default Header