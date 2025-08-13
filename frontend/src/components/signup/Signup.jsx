import React from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';
import { motion } from "framer-motion";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      age: event.target.elements.age.value,
      phoneNumber: event.target.elements.phoneNumber.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    console.log(formData);


  };

  return (
    <motion.div
      className="signup-container"
      style={{ backgroundImage: `url('tele8.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 style={{ fontSize: '36px' }}>Sign Up</h2>
        <motion.input
          type="text"
          name="name"
          placeholder="Name"
          required
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        />
        <motion.input
          type="number"
          name="age"
          placeholder="Age"
          required
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        />
        <motion.input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          required
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        />
        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          required
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontSize: '20px' }}
        >
          Submit
        </motion.button>
        <Link to="/login" style={{ fontSize: '20px' }}>Already have an account? Login</Link>
      </form>
    </motion.div>
  );
};

export default Signup;
