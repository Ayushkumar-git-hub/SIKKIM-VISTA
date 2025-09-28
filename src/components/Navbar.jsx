import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 1 }}
    >
      <div className="navbar-logo">Sikkim Vista</div>
      <ul className="navbar-links">
        {navLinks.map(link => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.15, color: "#4fc3f7" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}