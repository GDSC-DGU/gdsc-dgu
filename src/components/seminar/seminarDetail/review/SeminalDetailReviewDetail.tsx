import { SeminarReview } from '@/interfaces/seminar/seminarReview';
import React from 'react';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';

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
const SeminarDetailReviewDetail = ({ review }: { review: SeminarReview }) => {

  return (
    <div className="mt-5 flex flex-col p-5 bg-mono_900 rounded-xl"> 
    <p className='B1 pointer-events-none'>{review.author}</p>
    <motion.section
          viewport={{ once: true, amount: 0.9 }}
          variants={seminarCardVariants}
          style={{ transformOrigin: '10% 60%' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.8 }}
        >
    <p className='mt-3 B1 pointer-events-none'>{review.content}</p>
    </motion.section>
  </div>
  );
};
export default SeminarDetailReviewDetail;
