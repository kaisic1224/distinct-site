import React, { useEffect } from "react";
import Item from "../../components/Item";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <Navbar />
      <main className='px-8'>
        <h1 className='text-3xl text-center uppercase font-bold'>Merch</h1>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='grid grid-cols-3 auto-cols-fr'
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </motion.div>
      </main>
    </>
  );
};

export default index;
