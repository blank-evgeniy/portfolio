import { motion } from 'framer-motion';
import React from 'react';

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

interface RevealProps {
  children: JSX.Element | JSX.Element[];
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
