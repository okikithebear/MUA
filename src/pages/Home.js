import React from 'react';
import WomanImg from '../img/home/Image1.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative '>
        <div className='flex flex-col lg:flex-row h-full  items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className=' lg:mt-10 flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={WomanImg}
              alt='woman image'
              className='lg:px-14'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='flex-1 pt-60 pb-14 lg:mt-20 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              glamarous <br /> makeup artist
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Ibadan, OYO
            </p>
            <Link to={'/contact'} className='btn '>
              hire me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
