import React from 'react';
import PinImg from '@/svg/seminar/pin.svg';

/**
 * @description
 * 세미나 상세 페이지 pdf 다운로드 컴포넌트
 * @component SeminarDetailPdf
 * @returns {JSX.Element} SeminarDetailPdf
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailPdf = () => {

  return (
    <div className="flex mt-10 p-5 gap-2 flex bg-mono_900 rounded-xl"> 
    <PinImg />
    <p className='B1 font-normal'>세미나 자료 보기</p>
  </div>
  );
};
export default SeminarDetailPdf;
