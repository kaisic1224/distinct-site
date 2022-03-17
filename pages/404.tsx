import React from "react";
import { VoidFunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

const custom404: VoidFunctionComponent = () => {
  return (
    <>
      <Head>
        <title>404 | Page not Found</title>
      </Head>
      <div className='fixed inset-0 z-[9999] overflow-y-hidden bg-white grid place-items-center min-h-[calc(100vh-4rem)]'>
        <div className='flex flex-col gap-4 items-center'>
          <motion.div initial={{ x: 300 }} animate={{ x: 0 }}>
            <span className='text-7xl'>404 | Page not found</span>
            <p className='text-center mt-9 font-medium'>
              Uh oh, we couldn't find the page you're looking for.
            </p>
          </motion.div>
          <motion.button
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            type='button'
            className='bg-sky-200 text-blue-800 rounded-full border-transparent border-4  hover:text-white hover:border-sky-100 mt-4'
          >
            <Link href='/'>
              <a className='p-[1em] font-bold inline-block'>Return Home</a>
            </Link>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default custom404;

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true
  };
};
