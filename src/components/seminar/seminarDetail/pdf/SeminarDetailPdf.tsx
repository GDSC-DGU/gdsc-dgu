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
    <div className="w-full flex mt-20 gap-4 pl-4 py-5 bg-zinc-900 rounded-lg"> 
    <PinImg />
    <p>세미나 자료 보기</p>
  </div>
  );
};
export default SeminarDetailPdf;
