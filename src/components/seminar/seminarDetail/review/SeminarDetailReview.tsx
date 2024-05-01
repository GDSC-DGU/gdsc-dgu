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
    <div className="mt-20 w-full flex-col justify-center gap-[1rem] inline-flex min-h-fit relative"> 
    <p className="text-5xl font-normal leading-[3rem] tracking-wide">
      Review
    </p>
    <p className="w-full border border-solid text-zinc-500 h-0"/>
    {SEMINAR_REVIEW.map((review) => (
        <SeminarDetailReviewDetail 
        key={`${review.id}_review`} 
        data={review}/>
        ))}
  </div>
  );
};
export default SeminarDetailReview;
