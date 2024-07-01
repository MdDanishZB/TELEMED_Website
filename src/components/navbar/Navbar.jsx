import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          className="welcome-text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome Ji 🙏🙏
        </motion.span>
        <div className="navigation-links">
          <Link to="about-us" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
            About Us
          </Link>
          <Link to="Signup" smooth={true} duration={500} className="nav-link">
            Become Our Member
          </Link>
          <Link to="services" smooth={true} duration={500} className="nav-link">
            Services
          </Link>
          <Link to="HealthTips" smooth={true} duration={500} className="nav-link">
            Health Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
