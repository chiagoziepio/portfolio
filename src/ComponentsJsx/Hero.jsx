import React from 'react'
import '../ComponentsCss/Hero.css'

const Hero = () => {
  return (
    <section className='hero' id='home'>
        <div className='heroUpperPart'>
            <h2>Hi am <span className='name'>CHRISTOPHER</span><br /> A deligient and dedicated <span className='category'>Frontend developer</span></h2>
            <a href='#' className='cv'> Resume</a>
        </div>
        <div className="hero_img">
            <div className="dev_icons firstpart">
                <img src="img/react.jpg" alt="" className="reactpics icons" />
                <img src="img/CSS3.jpg" className='icons' alt="css" />
            </div>
            <img src="img/heroImg.jpeg" className='mainPics' alt="u" />
            <div className="dev_icons secondpart">
                <img src="img/js.jpg"className='icons'  alt="js" />
                <img src="img/html.jpg"className='icons'  alt="ht" />
                <img src="img/booststrap.jpg" className='icons' alt="bs" />
            </div>
        </div>
        <div className="HeroLowerpart">
            <h4>Ever since I started my journey in the tech world, i have developed the skill of Problem solving <br />I am also a lover of Knowledge and learning</h4>

        <a href="mailto:christopherpaddy2017@gmail.com">mail me</a>

        </div>
    </section>
  )
}

export default Hero