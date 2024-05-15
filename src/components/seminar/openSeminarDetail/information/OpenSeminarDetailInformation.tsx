'use client'

import React from 'react';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

/**
 * @description
 * 오픈 세미나 정보 컴포넌트
 * @component OpenSeminarDetailInformation
 * @returns {JSX.Element} OpenSeminarDetailInformation
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailInformation = ({ information }: { information:any }) => {

  return (
    <div className="w-full flex mt-10 pt-6 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 px-2 pb-4">
      Information
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
   <div className='text-[1rem] font-normal mt-8 text-mono_white'>
   <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.9 }}
          variants={seminarCardVariants}
          style={{ transformOrigin: '10% 60%' }}
          className="w-full"
        >
          <ReactMarkdown>{information?.data?.parent}</ReactMarkdown>
        </motion.section>
   </div>
  </div>
  );
};
export default OpenSeminarDetailInformation;
