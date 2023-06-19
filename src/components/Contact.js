import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-14 pb-28 p-14 items-center'>
            <div className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            >My Phone number:  <span className='text-xl text-accent font-medium mb-2 tracking-wide'>+7 776 203 64 43</span></div>
            <div className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            >My Email:  <span className='text-xl text-accent font-medium mb-2 tracking-wide'>neo.anyway@gmail.com</span></div>
            <button className='btn btn-lg'>See YOU soon!</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
