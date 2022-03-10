import { useState, useLayoutEffect, VoidFunctionComponent } from "react";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll
} from "framer-motion";
import Reference from "./Reference";

export interface reference {
  user: {
    name: string;
  };
  rating: number;
  review: string;
}

const References: VoidFunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const x = motionValue(scrollY);

  useLayoutEffect(() => {
    const changeScroll = () => {
      x.set(scrollY);
    };
    window.addEventListener("scroll", () => changeScroll());
    return () => {
      window.removeEventListener("scroll", () => changeScroll());
    };
  }, []);

  return (
    <section>
      <h2 className='text-center text-5xl font-bold'>Customer Sastisfaction</h2>
      <div className='overflow-x-clip mt-16'>
        <div className='flex gap-4'>
          <motion.div
            className='z-50 shadow-2xl'
            whileInView={{ scale: 1.1, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='z-30 ml-8 shadow-xl'
            whileInView={{ scale: 1, y: 50, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            whileInView={{ scale: 0.9, y: -50, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
        </div>
        <div className='flex gap-4'>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            whileInView={{ scale: 1, y: -15, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-8 z-10 shadow-xl'
            whileInView={{ scale: 0.9, y: 55, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-8 z-10 shadow-2xl'
            whileInView={{ scale: 1.05, y: -35, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
        </div>
        <div className='flex gap-4'>
          <motion.div
            className='-ml-8 z-10 shadow-xl'
            whileInView={{ scale: 0.8, y: 25, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='z-10 shadow-2xl'
            whileInView={{ scale: 0.9, y: 70, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
          >
            <Reference />
          </motion.div>
          <motion.div
            className='ml-20 z-10 shadow-2xl'
            whileInView={{ scale: 1.05, opacity: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            style={{ x }}
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
