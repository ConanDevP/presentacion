import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 items-start"
    >
      <div className="min-w-[100px] text-blue-400 font-semibold">{date}</div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;