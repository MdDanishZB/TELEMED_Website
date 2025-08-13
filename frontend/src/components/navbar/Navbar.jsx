// import React from 'react';

// import {Link} from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Chat from '../chatbot/chat';
// import './navbar.scss';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <motion.span
//           className="welcome-text"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome Ji 🙏🙏
//         </motion.span>
//         <div className="navigation-links">
//           <Link to="about-us" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
//             About Us
//           </Link>
//           <Link to="Signup" smooth={true} duration={500} className="nav-link">
//             Become Our Member
//           </Link>
//           <Link to="services" smooth={true} duration={500} className="nav-link">
//             Services
//           </Link>
//           <Link to="HealthTips" smooth={true} duration={500} className="nav-link">
//             Health Tips
//           </Link>
//           <Link to={<Chat />} smooth={true} duration={500} className="nav-link">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Chat from '../chatbot/chat';
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
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/signup">Become Our Member</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/health-tips">Health Tips</NavLink>
          <NavLink to="/chatbot">Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
