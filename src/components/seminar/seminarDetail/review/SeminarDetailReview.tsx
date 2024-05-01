import { SEMINAR_REVIEW } from '@/constants/seminar/seminarReviewData';
import React from 'react';
import SeminarDetailReviewDetail from './SeminalDetailReviewDetail';

/**
 * @description
 * 세미나 상세 페이지 리뷰 컴포넌트
 * @component SeminarDetailReview
 * @returns {JSX.Element} SeminarDetailReivew
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailReview = () => {

  return (
    <div className="w-full flex mt-10 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 font-normal px-2 py-3">
      Review
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
    {SEMINAR_REVIEW.map((review) => (
        <SeminarDetailReviewDetail 
        key={`${review.id}_review`} 
        data={review}/>
        ))}
  </div>
  );
};
export default SeminarDetailReview;
