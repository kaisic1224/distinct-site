import React, { useEffect } from "react";
import Item from "../../components/Item";
import { motion, AnimatePresence, Transition } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apparel - d1st1nct_kicks</title>
      </Head>

      <main className='px-8'>
        <h1 className='text-3xl text-center uppercase font-bold'>Apparel</h1>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='grid grid-cols-3 auto-cols-fr gap-4'
        >
          <AnimatePresence>
            <Link href={`/apparel/1`}>
              <a>
                <Item />
              </a>
            </Link>
          </AnimatePresence>
        </motion.div>
      </main>
    </>
  );
};

export default index;
