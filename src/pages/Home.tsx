// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  // ✅ Correct path for images in the public folder
  const hero = `${import.meta.env.BASE_URL}PhotoOfMe.jpg`;

  return (
    <section className="hero-full">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">Hello, I’m Umar!</h1>
          <p className="hero-subtitle">
            Software Engineer & Machine Learning Enthusiast — Based in Seattle
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn outline">
              Contact Me
            </Link>
            <Link to="/projects" className="btn primary">
              See My Work
            </Link>
          </div>
        </motion.div>

        {/* ✅ Hero photo from public folder */}
        <motion.img
  src={hero}
  alt="Umar Turdumambetov"
  className="hero-photo"
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
/>
      </div>
    </section>
  );
}