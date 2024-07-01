import { useRef } from "react";

import "./tips.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const HealthTips = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="health-tips"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Your Health, Our Priority
          <br /> Discover the best tips for a healthier life.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Health</motion.b> Tips
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray" }}
        >
          <img src="ayur.jpg" alt="Healthcare at Home" />
          <h2>Healthcare at Home</h2>
          <p>
            Learn how to take care of your health from the comfort of your home
            with our expert tips and advice.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray" }}
        >
          <img src="tele.jpg" alt="How We Can Help" />
          <h2>How We Can Help</h2>
          <p>
            Discover the various services we offer to assist you in maintaining
            your health and well-being.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray" }}
        >
          <img src="daily.jpg" alt="Daily Tips" />
          <h2>Daily Tips</h2>
          <p>
            Get daily tips and tricks to improve your health and lead a healthier
            lifestyle.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HealthTips;
