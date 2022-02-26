import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Reference from "./Reference";
import styles from "../styles/references.module.css";

export interface reference {
  user: {
    name: string;
  };
  rating: number;
  review: string;
}

const References = () => {
  const [offset, setOffset] = useState(0);
  const scroll = () => {
    setOffset(window.scrollY);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => scroll());
    return () => {
      window.removeEventListener("scroll", () => scroll());
    };
  }, []);

  return (
    <section>
      <h2 className='text-center text-5xl'>Customer Sastisfaction</h2>
      <div className={`${styles.refContainer} mt-16`}>
        <div className='flex gap-4'>
          <motion.div
            className='z-50 shadow-2xl'
            animate={{ scale: 1.1, x: offset * 2, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='z-30 ml-8 shadow-xl'
            animate={{ x: -offset / 4, y: 50, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            animate={{ scale: 0.9, x: offset / 6, y: -50, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
        </div>
        <div className='flex gap-4'>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            animate={{ x: offset / 6, y: -15, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-8 z-10 shadow-xl'
            animate={{ scale: 0.9, x: offset / 4, y: 55, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-8 z-10 shadow-2xl'
            animate={{ scale: 1.05, x: -offset / 5, y: -35, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
        </div>
        <div className='flex gap-4'>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            animate={{ scale: 0.8, x: offset, y: 25, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='z-10 shadow-2xl'
            animate={{ scale: 0.9, x: offset / 2, y: 70, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-20 z-10 shadow-2xl'
            animate={{ scale: 1.05, x: -offset * 0.75, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Reference />
          </motion.div>
        </div>
      </div>
      <div className='pb-[50rem]'></div> {/* foreground elem */}
    </section>
  );
};

export default References;
