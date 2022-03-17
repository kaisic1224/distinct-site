import React, { useState, VoidFunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const logo = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.75
    }
  }
};

const paths = [
  ["Contact", "/contact"],
  ["Apparel", "/apparel"],
  ["Register", "/signup"]
];

const Navbar: VoidFunctionComponent = () => {
  const rPath = useRouter().pathname;
  const [loader, setLoader] = useState(true);
  return (
    <motion.nav
      layout
      className='flex justify-between text-lg px-8 mx-auto h-16 items-center relative'
    >
      <div className='relative'>
        <Link href='/'>
          <a
            className={`flex items-center relative font-medium hover:text-blue-400 ${
              rPath === "/" ? "text-blue-400" : ""
            }`}
          >
            <motion.div
              variants={logo}
              className='z-50 absolute'
              initial='hidden'
              animate='show'
            >
              <Image src='/logo.jpg' width={50} height={50} />
            </motion.div>
            <span className='pl-14'>d1st1nct_kicks</span>
            {loader && (
              <motion.span
                className='w-full h-full z-10 absolute bg-white'
                initial={{ x: 50 }}
                animate={{ x: "100%" }}
                transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
                onAnimationComplete={() => setLoader(false)}
              />
            )}
          </a>
        </Link>
        {/* {rPath === "/" && (
          <motion.div
            className='h-px bg-sky-400 w-full absolute -bottom-2 z-50'
            layoutId='underline'
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.55 }}
          />
        )} */}
      </div>
      <ul className='flex gap-4'>
        {paths.map((path) => {
          return (
            <li className='relative' key={path[1]}>
              <Link href={path[1]}>
                <a
                  className={`font-medium hover:text-blue-400 ${
                    rPath === path[1] && "text-blue-400"
                  }`}
                >
                  {path[0]}
                </a>
              </Link>
              {rPath === path[1] && (
                <motion.div
                  className='h-px bg-sky-400 w-full absolute -bottom-2'
                  layoutId='underline'
                />
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
