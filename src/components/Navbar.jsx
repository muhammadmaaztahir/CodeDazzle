import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavItem = ({ children }) => (
  <motion.li
    className="relative px-4 py-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href="#" className="text-white font-semibold">
      {children}
    </a>
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
  </motion.li>
)

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" absolute w-full z-10 p-4">
      <div className="container mx-auto pe-10 flex justify-between items-center pt-4">
        <Link to="/" className="text-white text-2xl font-bold w-44">
          <img src={Logo} alt="" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden  md:flex space-x-6 text-white">
          <Link to='/about-us'>About Us</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/services'>Services</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/careers'>Careers</Link>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 6h16M4 12h16M4 18h16" },
                open: { d: "M6 18L18 6M6 6l12 12" }
              }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        className="fixed inset-y-0 bg-white right-0 w-64  shadow-lg md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-8 space-y-4">
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="text-gray-800 font-semibold">Home</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about-us" className="text-gray-800 font-semibold">About Us</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio" className="text-gray-800 font-semibold">Portfolio</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="text-gray-800 font-semibold">Services</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/gallery" className="text-gray-800 font-semibold">Gallery</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/careers" className="text-gray-800 font-semibold">Careers</Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}

export default UniqueNavbar