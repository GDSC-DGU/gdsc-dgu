'use client';

import React from 'react';
import PinImg from '@/svg/seminar/pin.svg';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';

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
const SeminarDetailPdf = ({seminar}:{seminar:SeminarThumbnail}) => {

  return (
    <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
    className="mt-10 p-5 bg-mono_900 rounded-xl"
  >
    {seminar.pdf_url === "" ? (
      <p className="B1">
      자료가 없습니다.
    </p>
    ):(
      <motion.section
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.8 }}
      viewport={{ once: true, amount: 0.9 }}
      variants={seminarCardVariants}
      style={{ transformOrigin: '10% 60%' }}
      className="flex gap-2 cursor-pointer"
    >
      <PinImg />
      <a href={seminar.pdf_url} download={`${seminar.title}_${seminar.date}`} className="B1">
      세미나 자료 보기
    </a>
    </motion.section>
    )}
  </motion.section>
  );
};
export default SeminarDetailPdf;
