import React, { useRef } from 'react'
import '../ComponentsCss/Stack.css'
import { motion, useInView } from 'framer-motion'

const Stack = () => {
    const ref = useRef()
 useInView(ref, { once:true })
 
  return (
    <section className='stack' id="stack">
        <motion.h2  ref={ref} className="sectionTitle"
        initial={{
            x:-300
        }}
        whileInView={{
            x:0
        }}
        transition={{
            duration:2,

        }}
        ><span className="firstLetter">M</span>y <span className="secLetter">S</span>tack</motion.h2>
        <div className="stackContainer">
            <div className='stackBx'>
                <img src="img/react.jpg" alt="" />
                <div className="progressBarBx">
                    <motion.div className="progressBar reactbar"
                        initial={{
                            width:0
                        }}
                        whileInView={{
                            width:"70%"
                        }}
                        transition={{
                            duration:2
                        }}
                    >70%</motion.div>
                </div>
            </div>
            <div className='stackBx'>
                <img src="img/js.jpg" alt="" />
                <div className="progressBarBx">
                    <motion.div className="progressBar jsbar"
                        initial={{
                            width:0
                        }}
                        whileInView={{
                            width:"50%"
                        }}
                        transition={{
                            duration:2
                        }}
                    >50%</motion.div>
                </div>
            </div>
            <div className='stackBx'>
                <img src="img/CSS3.jpg" alt="" />
                <div className="progressBarBx">
                    <motion.div className="progressBar cssbar"
                        initial={{
                            width:0
                        }}
                        whileInView={{
                            width:"60%"
                        }}
                        transition={{
                            duration:2
                        }}
                    >60%</motion.div>
                </div>
            </div>
            <div className='stackBx'>
                <img src="img/html.jpg" alt="" />
                <div className="progressBarBx">
                    <motion.div className="progressBar htmlbar"
                        initial={{
                            width:0
                        }}
                        whileInView={{
                            width:"80%"
                        }}
                        transition={{
                            duration:2
                        }}
                    >80%</motion.div>
                </div>
            </div>
            <div className='stackBx'>
                <img src="img/booststrap.jpg" alt="" />
                <div className="progressBarBx">
                    <motion.div className="progressBar bsbar"
                        initial={{
                            width:0
                        }}
                        whileInView={{
                            width:"90%"
                        }}
                        transition={{
                            duration:2
                        }}
                    >90%</motion.div>
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Stack