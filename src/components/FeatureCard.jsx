import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-800/50 rounded-lg"
    >
      {Icon && <Icon className="h-8 w-8 text-blue-400 mb-4" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;