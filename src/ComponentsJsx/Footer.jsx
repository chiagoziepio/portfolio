import React from 'react'
import '../ComponentsCss/Footer.css';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const year = new Date();
  return (
    <footer>
        <p>Paddy &copy; {year.getFullYear()}</p>
        <a href="https://github.com/chiagoziepio/portfolio"><FaGithub size={25} className='footer_icon'/>Checkout source code</a>
    </footer>
  )
}

export default Footer