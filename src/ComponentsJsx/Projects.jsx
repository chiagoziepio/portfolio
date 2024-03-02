import React from 'react'
import '../ComponentsCss/Projects.css'
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
const Projects = ({data}) => {
  return (
    <section className='projects' id='projects'>
      <h2 className="sectionTitle"><span className="firstLetter">P</span>rojects</h2>
      <div className="container">
        {data.map(dat=>(
          <motion.div className="projectBx"
            initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1
            }}
            transition={{
              duration:1,
              ease:"easeIn"
            }}
          >
            <img src={dat.img} alt="" className='project_img' />
            <p className="project_detail">{dat.des}</p>
            {dat.instruction ? <span>Use any username and password to access the restricted route</span>: ""}
            <div className="projectLinks">
              <a href={dat.livePage} className='live'><MdLiveTv size={25}/> live page</a>
              <a href={dat.githubLink} className='git' ><FaGithub size={25}/> Source Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section >
  )
}

export default Projects