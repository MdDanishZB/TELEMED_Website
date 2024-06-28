import Sidebar from "./Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Amrit Raj
        </motion.span>
        <div className="social">
          <a href="https://leetcode.com/u/user9393ZG/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://www.codechef.com/users/hacker_ar02">
            <img src="/codechef.png" alt="" />
          </a>
          <a href="https://github.com/amroodh">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/amrit-raj-3693051ba/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
