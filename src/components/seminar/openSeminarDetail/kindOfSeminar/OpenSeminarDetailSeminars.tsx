'use client';

import React from 'react';
import OpenSeminarsDetailBox from './OpenSeminarsDetailBox';
import { OpenSeminar, OpenSeminarDetailSeminar } from '@/interfaces/seminar/openSeminar';
import Link from 'next/link';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import { motion } from 'framer-motion';
import { SeminarMember } from '@/interfaces/seminar/seminarMember';

/**
 * @description
 * 오픈 세미나 상세 페이지 세미나 종류 컴포넌트
 * @component OpenSeminarDetailSeminars
 * @returns {JSX.Element} OpenSeminarDetailSeminars
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailSeminars = ({ detailSeminars }: { detailSeminars:OpenSeminarDetailSeminar[] }) => {

  return (
    <div className="w-full mt-10 pt-6 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 px-2 pb-4">
      Seminars
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
    <div className='mt-5 flex grid desktop:grid-cols-2 bigTablet:grid-cols-2 lg:grid-cols-2 tablet:grid-cols-1 md:grid-cols-1 gap-8'>
    {detailSeminars.map((seminar) => (
       <motion.section
       key={seminar.id}
       initial={{ y: 20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.2 }}
       viewport={{ once: true, amount: 0.9 }}
       variants={seminarCardVariants}
       style={{ transformOrigin: '10% 60%' }}
       className="w-full"
     >
          <motion.section
          viewport={{ once: true, amount: 0.9 }}
          variants={seminarCardVariants}
          style={{ transformOrigin: '10% 60%' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.8 }}
        >
      <Link
      href={`/seminar/${seminar.id}`}
    >
    <OpenSeminarsDetailBox
      key={`${seminar.id}_seminar`} 
      seminar={seminar}
    />
    </Link>
    </motion.section>
    </motion.section>
  ))}
  </div>
  </div>
  );
};
export default OpenSeminarDetailSeminars;
