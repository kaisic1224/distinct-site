import Image from "next/image";
import { motion } from "framer-motion";

const Collection = () => {
  return (
    <>
      <div className='relative grid grid-cols-3 gap-4 px-8 mx-auto justify-items-center'>
        <motion.div
          className='overflow-hidden group'
          whileHover={{ borderRadius: 20 }}
          style={{ borderRadius: 60 }}
        >
          <Image
            src={"/jordan1.jpg"}
            width={"400px"}
            height={"400px"}
            className='group-hover:scale-110 transition-transform'
          />
        </motion.div>
        <motion.div
          className='overflow-hidden group'
          whileHover={{ borderRadius: 20 }}
          style={{ borderRadius: 60 }}
        >
          <Image
            src={"/jordan2.jpg"}
            width={"400px"}
            height={"400px"}
            className='group-hover:scale-110 transition-transform'
          />
        </motion.div>
        <motion.div
          className='overflow-hidden group'
          whileHover={{ borderRadius: 20 }}
          style={{ borderRadius: 60 }}
        >
          <Image
            src={"/nike.jpg"}
            width={"400px"}
            height={"400px"}
            className='group-hover:scale-110 transition-transform'
          />
          {/* work on navbar logo into apepar icons */}
        </motion.div>
      </div>
    </>
  );
};

export default Collection;
