import { VoidFunctionComponent } from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: VoidFunctionComponent = () => {
  const vars = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.4
      }
    }
  };
  const links = {
    hidden: {
      opacity: 0,
      y: 24
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  const header = {
    hidden: {
      opacity: 0,
      y: 25
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15
      }
    }
  };
  const divider = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    show: {
      transformOrigin: "left",
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.15
      }
    }
  };

  return (
    <motion.footer
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='mx-auto px-8 bg-sky-300 py-6'
    >
      <motion.h2
        variants={header}
        className='text-center text-4xl uppercase font-bold xl:tracking-widest xs:mb-2 md:mb-0 text-black'
      >
        Stay connected
      </motion.h2>
      <div
        className='flex relative
      xs:justify-center
      md:justify-end'
      >
        <motion.span
          variants={divider}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: "25px" }}
          className='absolute md:w-5/6 h-[2px] bg-gray-800 left-0 top-4'
        />
        <motion.div
          variants={vars}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: "25px 0px 0px 0px" }}
          className='flex gap-2'
        >
          <motion.a
            variants={links}
            target='_blank'
            rel='noopener'
            href='https://www.instagram.com/d1st1nct_kicks/'
          >
            <FaInstagram className='w-8 h-8 cursor-pointer hover:fill-white' />
          </motion.a>
          <motion.a
            variants={links}
            target='_blank'
            rel='noopener'
            href='https://www.instagram.com/d1st1nct_kicks/'
          >
            <FaFacebookSquare className='w-8 h-8 cursor-pointer hover:fill-white' />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
