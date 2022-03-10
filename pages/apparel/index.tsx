import React, { useEffect } from "react";
import Item from "../../components/Item";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

export interface itemInterface {
  price: number;
  name: string;
  availability: boolean;
}

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apparel - d1st1nct_kicks</title>
      </Head>

      <main className='px-8'>
        <h1 className='text-3xl text-center uppercase font-bold'>Apparel</h1>
        <motion.div layout className='grid grid-cols-3 auto-cols-fr gap-4'>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href={`/apparel/t-shirts`}>
                <a>
                  <Item />
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href={`/apparel/t-shirts`}>
                <a>
                  <Item />
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href={`/apparel/t-shirts`}>
                <a>
                  <Item />
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href={`/apparel/t-shirts`}>
                <a>
                  <Item />
                </a>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
    </>
  );
};

// may need to fetch some dynamic contents

export default index;
