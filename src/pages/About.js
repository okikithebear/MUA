import React from 'react';
import WomanImg from '../img/about/Image8.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className=' py-8 md:py-24'
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='order-2'>
            <img
              src={WomanImg}
              alt='Woman'
              className='px-10 lg:p-14 w-full rounded-xl '
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='order-1 text-left 6'
          >
            <h2 className='md:text-3xl text-xl font-semibold mt-20 px-10 mb-2 lg:mb-4 text-primary'>
              About Me
            </h2>
            <p className='text-gray-600 mb-10 px-10 max-w-md'>
              I'm <b>Titi</b>, a dedicated makeup artist who's passionate about
              the art of transformation. With years of experience in the beauty
              industry, I specialize in enhancing your natural beauty and
              creating personalized looks that make you feel confident and
              glamorous. Whether it's for your special day, a photo shoot, or a
              night out, <b>I'm here to bring your makeup dreams to life</b>.
              <br />
              <br />
              My approach is all about celebrating your unique features while
              ensuring you look and feel your absolute best. Let's collaborate
              and create makeup magic together – I can't wait to be a part of
              your beauty journey.
            </p>
            <Link
              to={'/portfolio'}
              className='inline-block mx-10 px-4 py-2 bg-primary text-white  hover:bg-primary-dark transition duration-300 ease-in-out'
            >
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
