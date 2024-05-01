'use client';

import React, { useState } from 'react';
import SeminarToggleMenu from './SeminarToggleMenu';
import ChervonDownIcon from '@/svg/icons/common/chervon_down.svg';
import { OPEN_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';

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
    <button onClick={toggleMenuVisibility} className="flex B2 font-medium">
      목록 보기
      <ChervonDownIcon className={`self-center ${isMenuVisible ? 'rotate-180' : ''}`} />
    </button>
  </div>
  <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${!isMenuVisible && 'max-h-0'}`}>
  {isMenuVisible && (
    <div className="mt-5">
        {OPEN_SEMINAR_DATA.map((openSeminar) => (
             <SeminarToggleMenu 
             key={openSeminar.id}
             data={openSeminar}
             />
      ))}
    </div>
  )}
</div>
</div>
  );
};
export default SeminarToggle;
