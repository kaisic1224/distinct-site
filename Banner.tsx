import { motion } from "framer-motion";
import { VoidFunctionComponent } from "react";

const Banner: VoidFunctionComponent = () => {
  return (
    <section className='h-screen px-8'>
      <div>
        <div className='overflow-hidden'>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-[8.75rem] text-right uppercase font-extrabold'
          >
            d1st1nct_kicks
          </motion.h1>
          <div className='overflow-hidden'>
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className='text-6xl text-right uppercase font-extrabold italic
              bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-100'
              //  may also use skewed shape here
            >
              Be different
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
