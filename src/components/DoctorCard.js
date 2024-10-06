import React from 'react';
import { motion } from 'framer-motion';

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialty}</p>
      </div>
    </motion.div>
  );
};

export default DoctorCard;