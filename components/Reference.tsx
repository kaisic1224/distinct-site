import React, { VoidFunctionComponent } from "react";
import { motion, Transition } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { reference } from "./References";

const references: reference[] = [
  {
    user: {
      name: "james"
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis odio adipisci labore provident? Similique voluptate qui dolore eligendi laboriosam!"
  }
];

const Reference: VoidFunctionComponent = () => {
  const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 500,
    bounce: 0.5
  };
  return (
    <motion.article
      transition={spring}
      className='p-6 max-w-sm min-w-[20rem] bg-sky-300 rounded-md'
    >
      <div className='flex justify-between mb-2'>
        <span className='font-semibold'>{references[0].user.name}</span>
        <div className='flex gap-1'>
          <FaStar className='fill-yellow-500' />
          <FaStar className='fill-yellow-500' />
          <FaStar className='fill-yellow-500' />
          <FaStar className='fill-yellow-500' />
          <FaStar className='fill-yellow-500' />
        </div>
      </div>
      {references[0].review}
    </motion.article>
  );
};

const ReferenceHeader = ({ reference }: { reference: reference }) => {
  return (
    <div className='flex justify-between mb-2'>
      <span className='font-semibold'>{reference.user.name}</span>
      <div className='flex gap-1'>
        <FaStar className='fill-yellow-500' />
        <FaStar className='fill-yellow-500' />
        <FaStar className='fill-yellow-500' />
        <FaStar className='fill-yellow-500' />
        <FaStar className='fill-yellow-500' />
      </div>
    </div>
  );
};

export default Reference;
