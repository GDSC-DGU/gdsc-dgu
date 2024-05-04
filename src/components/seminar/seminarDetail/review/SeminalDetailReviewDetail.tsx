import { SeminarReview } from '@/interfaces/seminar/seminarReview';
import React from 'react';

/**
 * @description
 * 세미나 상세 페이지 리뷰 디테일 컴포넌트
 * @component SeminarDetailReviewDetail
 * @returns {JSX.Element} SeminarDetailReviewDetail
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailReviewDetail = ({ data }: { data: SeminarReview }) => {

  return (
    <div className="mt-5 flex flex-col p-5 bg-mono_900 rounded-xl"> 
    <p className='B1 font-bold font-medium'>사람 이름</p>
    <p className='mt-3 B1 font-normal'>리뷰 내용</p>
  </div>
  );
};
export default SeminarDetailReviewDetail;
