import React from 'react';
import SeminarDetailReviewDetail from './SeminalDetailReviewDetail';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import { SeminarReview } from '@/interfaces/seminar/seminarReview';

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
const SeminarDetailReview = ({ data }: { data: SeminarReview[] }) => {

  return (
    <div className="w-full flex mt-10 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 px-2 py-3 pointer-events-none">
      Review
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
    {data.map((review) => (
       <motion.section
       key={review.id}
       initial={{ y: 20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
       viewport={{ once: true, amount: 0.9 }}
       variants={seminarCardVariants}
       style={{ transformOrigin: '10% 60%' }}
     >
        <SeminarDetailReviewDetail 
        key={`${review.id}_review`} 
        data={review}/>
         </motion.section>
        ))}
  </div>
  );
};
export default SeminarDetailReview;
