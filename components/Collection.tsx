import Image from "next/image";
import { motion } from "framer-motion";

const Collection = () => {
  return (
    <>
      <h2>Collection</h2>
      <div className='relative grid grid-cols-3 gap-4 px-8 mx-auto justify-items-center'>
        <motion.div className='overflow-hidden group'>
          <Image
            src={"/jordan1.jpg"}
            width={"400px"}
            height={"400px"}
            className='rounded-md group-hover:scale-110 transition-transform'
          />
        </motion.div>
        <motion.div className='overflow-hidden group'>
          <Image
            src={"/jordan2.jpg"}
            width={"400px"}
            height={"400px"}
            className='rounded-md group-hover:scale-110 transition-transform'
          />
        </motion.div>
        <motion.div className='overflow-hidden group'>
          <Image
            src={"/nike.jpg"}
            width={"400px"}
            height={"400px"}
            className='rounded-md group-hover:scale-110 transition-transform'
          />
        </motion.div>
      </div>
    </>
  );
};

export default Collection;
