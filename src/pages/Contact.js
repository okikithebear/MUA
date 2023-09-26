import React from 'react';
import WomanImg from '../img/contact/Image7.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const emailLink = 'mailto:mua@gmail.com';
  const whatsappLink = 'https://api.whatsapp.com/send?phone=123456789';
  const instagramLink = 'https://instagram.com/artist';

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-cemter lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1 lg:mx-4 mx-2'>Contact me</h1>
            <p className='mb-8 lg:mx-6 mx-4 text-lg font-semibold text-black'>
              I would love to bring your dream look to life, we can get started
              , send an email, text on whatsapp or click my instagram profile
              for more of my work.
            </p>

            <div className='flex flex-col gap-y-4 lg:mx-6 mx-4'>
              <div className='flex items-center gap-2 text-wine'>
                <FiMail />
                <span>Gmail:</span>
                <a href={emailLink} className='hover:text-black'>
                  mua@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-2 text-wine'>
                <FiPhone />
                <span>WhatsApp number:</span>
                <a
                  href='https://wa.me/2348060931452'
                  className='hover:text-black'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  08060931452
                </a>
              </div>
              <div className='flex items-center gap-2 text-wine'>
                <FiInstagram />
                <a
                  href='https://instagram.com/titibellz_mua?igshid=MzRlODBiNWFlZA=='
                  className=' hover:text-black'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Titi Bellz Mua
                </a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt=' woman' className='p-14 lg:p-20 ' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
