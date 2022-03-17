import { useLayoutEffect, VoidFunctionComponent } from "react";
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

const header = {
  show: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

const letters = {
  hidden: {
    y: 100
  },
  show: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.65
    }
  }
};

const customerLetters = ["C", "u", "s", "t", "o", "m", "e", "r"];
const satisfactionLetters = [
  { _lId: "S", k: 1 },
  { _lId: "a", k: 2 },
  { _lId: "t", k: 3 },
  { _lId: "i", k: 4 },
  { _lId: "s", k: 5 },
  { _lId: "f", k: 6 },
  { _lId: "a", k: 7 },
  { _lId: "c", k: 8 },
  { _lId: "t", k: 9 },
  { _lId: "i", k: 10 },
  { _lId: "o", k: 11 },
  { _lId: "n", k: 12 }
];

const References: VoidFunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const x = motionValue(0);

  useLayoutEffect(() => {
    const changeScroll = () => {};
    window.addEventListener("scroll", () => changeScroll());
    return () => {
      window.removeEventListener("scroll", () => changeScroll());
    };
  }, []);

  return (
    <section>
      <div className='text-6xl font-medium text-slate-800 px-8'>
        <motion.div
          layout
          variants={header}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex justify-start overflow-hidden relative'
        >
          {customerLetters.map((letter) => {
            return (
              <motion.span
                layout
                key={letter}
                className='cursor-default'
                variants={letters}
                whileHover={{
                  color: "rgb(186 230 253)",
                  transition: {
                    duration: 0.1
                  }
                }}
                style={{ transformPerspective: "100px" }}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.div
          variants={header}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex justify-start overflow-hidden mt-2 ml-28 relative'
        >
          {satisfactionLetters.map((letter) => {
            return (
              <motion.span
                key={letter.k}
                layout
                className='cursor-default'
                variants={letters}
                whileHover={{
                  color: "rgb(186 230 253)",
                  transition: {
                    duration: 0.1
                  }
                }}
              >
                {letter._lId}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
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
