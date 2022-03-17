import React, { VoidFunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Item: VoidFunctionComponent = () => {
  return (
    <motion.div
      layoutId='main-img'
      className='transition-shadow hover:shadow-lg'
    >
      <Image src='/art.jpg' width={245} height={206} />
    </motion.div>
  );
};

export default Item;
