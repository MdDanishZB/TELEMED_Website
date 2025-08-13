import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax" id={type} ref={ref}>
      <motion.div
        className="background-image"
        style={{
          backgroundImage: `url(${type === "services" ? "tele-5.jpg" : "tele6.jpg"})`,
          width: type === "services" ? "100%" : "60%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "left",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          y: yBg,
        }}
      ></motion.div>
      <div className={`text-overlay ${type === "services" ? "services-text" : "about-us-text"}`} id="about-us">
        <motion.h1 style={{ y: yText, color: type === "services" ? 'black' : 'white' }}>
          {type === "services" ? "What We Do?" : "About Us"}
        </motion.h1>
        {type === "services" && (
          <motion.ul style={{ y: yText }}>
            <li>Chatbot Assistant</li>
            <li>Real-Time Notifications</li>
            <li>Appointment Scheduling</li>
          </motion.ul>
        )}
        {type === "about-us" && (
          <motion.div className="about-us-content" style={{ y: yText }}>
            We are a group of passionate students from RV College of Engineering (RVCE), dedicated to leveraging technology to revolutionize healthcare. Our mission is to bridge the gap between patients and healthcare providers by offering a seamless telemedicine platform. We aim to enhance the healthcare experience through innovative solutions such as chatbot assistance, real-time notifications and appointment scheduling.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Parallax;
