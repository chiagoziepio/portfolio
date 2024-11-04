import "../ComponentsCss/Hero.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = ({ download }) => {
  return (
    <section className="hero" id="home">
      <div className="heroUpperPart">
        <h2>
          Hi I am <span className="name">CHRISTOPHER</span>
          <br /> A deligient and dedicated{" "}
          <span className="category">Frontend developer</span>
        </h2>
        <button onClick={download} className="cv">
          <FaCloudDownloadAlt size={20} className="download_icon" /> Resume
        </button>
      </div>
      <div className="hero_img">
        <div className="dev_icons firstpart">
          <img
            src="https://i.pinimg.com/236x/5b/fa/e3/5bfae33bcc5e5efda6aaef3a8c83a174.jpg"
            alt=""
            className="reactpics icons"
          />
          <img
            src="https://i.pinimg.com/236x/17/65/0d/17650db87fb5752364a9a4b6885290ac.jpg"
            className="icons"
            alt="css"
          />
          <img
            src="https://i.pinimg.com/564x/f4/46/01/f44601df7b163687fc463dbceedbd4f7.jpg"
            className="icons"
            alt="tw"
          />
        </div>
        <div className="main-container">
          <motion.img
            src="https://onedrive.live.com/embed?resid=D32039EB0B48BA39%21348&authkey=%21ANV0iQ2leK_3lfo&width=2320&height=3088"
            className="mainPics"
            alt="u"
            initial={{
              display: "none",
              y: 100,
            }}
            animate={{
              display: "block",
              y: 0,
            }}
            transition={{ duration: 2, delay: 1 }}
          />
        </div>
        <div className="dev_icons secondpart">
          <img
            src="https://i.pinimg.com/236x/1e/e5/c0/1ee5c08f80a1c61d66a37fa64c2d984c.jpg"
            className="icons"
            alt="js"
          />
          <img
            src="https://i.pinimg.com/236x/b1/75/54/b175549d8268dd656b92e3b56988bdf9.jpg"
            className="icons"
            alt="ht"
          />
          <img
            src="https://i.pinimg.com/236x/29/37/2a/29372aa493607af0848468d30223ccc6.jpg"
            className="icons"
            alt="bs"
          />
        </div>
      </div>
      <div className="HeroLowerpart">
        <h4>
          Ever since I started my journey in the tech world, i have developed
          the skill of Problem solving <br />I am also a lover of Knowledge and
          learning
        </h4>

        <a href="mailto:christopherpaddy2017@gmail.com" className="mail">
          <MdAttachEmail className="mail_icon" size={20} />
          mail me
        </a>
      </div>
    </section>
  );
};

export default Hero;
