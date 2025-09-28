import React from "react";
import { motion } from "framer-motion";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Welcome to Sikkim Vista
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover the beauty, culture, and adventure of Sikkim through stunning visuals and engaging stories.
        </motion.p>
        <motion.a
          href="/gallery"
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: "#43a047", color: "#fff" }}
        >
          Explore Gallery
        </motion.a>
      </motion.section>

      <motion.section
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/nature.jpg" alt="Nature" />
          <h2>Nature</h2>
          <p>Explore breathtaking landscapes and hidden gems of Sikkim.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/culture.jpg" alt="Culture" />
          <h2>Culture</h2>
          <p>Experience the rich heritage and vibrant traditions.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/adventure.jpg" alt="Adventure" />
          <h2>Adventure</h2>
          <p>Join adventures from trekking to river rafting and more.</p>
        </motion.div>
      </motion.section>
    </div>
  );
}