'use client';

import React, { useState } from 'react';
import SeminarToggleMenu from './SeminarToggleMenu';
import ChervonDownIcon from '@/svg/icons/common/chervon_down.svg';
import { OPEN_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toggleVariants } from '@/constants/seminar/seminarToggleVariants';

/**
 * @description
 * 세미나 페이지 오픈 세미나 토클 버튼
 * @component SeminarToggle
 * @returns {JSX.Element} SeminarToggle
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */

const SeminarToggle = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false); // 오픈 세미나 목록 토클 버튼
    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
      };

  return (
<div className="flex-col">
  <div className="mt-5 flex justify-end">
  <motion.button
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.2 }}
           onClick={toggleMenuVisibility} 
           className="flex B2 font-medium"
         >
      목록 보기
      <ChervonDownIcon className={`self-center ${isMenuVisible ? 'rotate-180' : 'rotate-0'}`} />
    </motion.button>
  </div>
  <motion.section
        initial="closed"
        animate={isMenuVisible ? "opened" : "closed"}
        variants={toggleVariants}
        className={isMenuVisible ? "" : "overflow-hidden"}
      >
    <div className="mt-5">
        {OPEN_SEMINAR_DATA.map((seminar) => (
               <Link
               href={`/seminar/open/${seminar.id}`}
             >
             <SeminarToggleMenu 
             key={seminar.id}
             data={seminar}
             />
             </Link>
      ))}
    </div>
  </motion.section>
</div>
  );
};
export default SeminarToggle;
