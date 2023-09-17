import React from 'react';
import Image1 from '../img/portfolio/Image4.jpg';
import Image2 from '../img/portfolio/Image5.jpg';
import Image3 from '../img/portfolio/Image6.jpg';
import Image4 from '../img/portfolio/Image3.jpg';
import Image5 from '../img/portfolio/image9.jpg';
import Image6 from '../img/portfolio/Image1.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

import { Link } from 'react-router-dom';
const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className=' flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start lg:w-1/2'
          >
            <h1 className='h1 mt-8 text-left px-10'>Portfolio</h1>
            <p className='mb-10 max-w-[600px] text-left px-10'>
              Welcome to my portfolio! I'm <b>Titi</b>, a passionate makeup
              artist with years of experience in the beauty industry. My mission
              is to enhance your natural beauty and create personalized looks
              that leave you feeling confident and glamorous. Whether it's for
              your special day, a memorable photoshoot, or a night out on the
              town, I'm here to bring your makeup dreams to life. My approach
              revolves around celebrating your unique features while ensuring
              you look and feel your absolute best. Let's collaborate and create
              makeup magic together – I can't wait to be a part of your beauty
              journey.
            </p>

            <Link to={'/contact'} className='btn mb-[30px] mx-10'>
              Hire me
            </Link>
          </motion.div>
          <div className='lg:w-1/2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image1}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image2}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image3}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image4}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image5}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                src={Image6}
                alt='pic'
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
