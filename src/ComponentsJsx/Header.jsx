import Logo from './Logo'
import Nav from './Nav'
import { motion } from 'framer-motion'
import '../ComponentsCss/Header.css'
const Header = ({Handle_menuShow}) => {
  return (
    <motion.header
    
    >
        <Logo/>
        <Nav Handle_menuShow={Handle_menuShow}/>
    </motion.header>
  )
}

export default Header