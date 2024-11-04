import { useRef } from "react";
import "../ComponentsCss/Stack.css";
import { motion, useInView } from "framer-motion";

const Stack = () => {
  const ref = useRef();
  useInView(ref, { once: true });

  return (
    <section className="stack" id="stack">
      <motion.h2
        ref={ref}
        className="sectionTitle"
        initial={{
          x: -300,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 2,
        }}
      >
        <span className="firstLetter">M</span>y{" "}
        <span className="secLetter">S</span>tack
      </motion.h2>
      <div className="stackContainer">
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/236x/5b/fa/e3/5bfae33bcc5e5efda6aaef3a8c83a174.jpg"
            alt=""
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar reactbar"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "70%",
              }}
              transition={{
                duration: 2,
              }}
            >
              70%
            </motion.div>
          </div>
        </div>
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/236x/1e/e5/c0/1ee5c08f80a1c61d66a37fa64c2d984c.jpg"
            alt=""
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar jsbar"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "50%",
              }}
              transition={{
                duration: 2,
              }}
            >
              50%
            </motion.div>
          </div>
        </div>
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/236x/17/65/0d/17650db87fb5752364a9a4b6885290ac.jpg"
            alt=""
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar cssbar"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "60%",
              }}
              transition={{
                duration: 2,
              }}
            >
              60%
            </motion.div>
          </div>
        </div>
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/236x/b1/75/54/b175549d8268dd656b92e3b56988bdf9.jpg"
            alt=""
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar htmlbar"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "80%",
              }}
              transition={{
                duration: 2,
              }}
            >
              80%
            </motion.div>
          </div>
        </div>
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/236x/29/37/2a/29372aa493607af0848468d30223ccc6.jpg"
            alt=""
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar bsbar"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "90%",
              }}
              transition={{
                duration: 2,
              }}
            >
              90%
            </motion.div>
          </div>
        </div>
        <div className="stackBx">
          <img
            src="https://i.pinimg.com/564x/f4/46/01/f44601df7b163687fc463dbceedbd4f7.jpg"
            alt="tw"
          />
          <div className="progressBarBx">
            <motion.div
              className="progressBar tw"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "90%",
              }}
              transition={{
                duration: 2,
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                height: "20px",
                borderRadius: "16px",
                background: "#020636",
              }}
            >
              90%
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
