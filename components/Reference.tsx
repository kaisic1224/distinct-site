import React from "react";
import { motion } from "framer-motion";

const Reference = () => {
  return (
    <motion.article animate={{ x: 500, y: 50 }} className='inline-block'>
      reference
    </motion.article>
  );
};

export default Reference;
