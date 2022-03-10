import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Loader = () => {
  const balls = {
    hidden: {
      opacity: 0,
      y: -50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        bounce: 0.4,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0.25,
        duration: 1.5,
        ease: "easeIn"
      }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
        when: "afterChildren"
      }
    }
  };
  return (
    <div className='inset-0 fixed z-[9999] grid place-items-center pointer-events-none bg-white'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='relative flex gap-3'
      >
        <motion.div variants={balls}>
          <FaCircle className='fill-sky-400' />
        </motion.div>
        <motion.div variants={balls}>
          <FaCircle className='fill-sky-400' />
        </motion.div>
        <motion.div variants={balls}>
          <FaCircle className='fill-sky-400' />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Loader;
