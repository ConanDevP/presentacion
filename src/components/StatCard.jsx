import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ value, suffix = '', prefix = '', text }) => {
  return (
    <div className="text-center p-6 bg-gray-800/50 rounded-lg">
      <CountUp
        end={value}
        prefix={prefix}
        suffix={suffix}
        className="text-5xl font-bold text-blue-400"
        duration={2.5}
      />
      <p className="mt-4 text-gray-300">{text}</p>
    </div>
  );
};

export default StatCard;