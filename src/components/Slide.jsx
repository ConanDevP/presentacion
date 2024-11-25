import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, className = '' }) => {
  return (
    <section className={`h-screen flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Slide;