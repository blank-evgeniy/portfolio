import { motion } from 'framer-motion';

const emojiAnimation = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    rotate: 0,
  },
  hover: {
    rotate: [0, 15, -10, 15, 0],
    transition: {
      duration: 2,
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
    },
  },
  tap: {
    scale: 1.2,
  },
};

const Emoji = () => {
  return (
    <motion.img
      variants={emojiAnimation}
      initial='hidden'
      whileInView='visible'
      viewport={{
        margin: '-150px',
      }}
      whileHover='hover'
      whileTap='tap'
      className='ml-auto object-contain pb-4 hover:cursor-pointer'
      src='./myEmoji.png'
    ></motion.img>
  );
};

export default Emoji;
