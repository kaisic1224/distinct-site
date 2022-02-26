import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPage } from "next";

const Item: NextPage = () => {
  return (
    <motion.div className='transition-shadow hover:shadow-lg'>
      <Image src='/art.jpg' width={245} height={206} />
    </motion.div>
  );
};

export default Item;
