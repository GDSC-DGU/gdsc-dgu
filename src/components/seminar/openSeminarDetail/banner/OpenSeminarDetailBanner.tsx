'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import TranslateImg from '@/images/seminar/presenter/presenter_profile_img.png';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';
import SeminarDetailBannerInform from '../../seminarDetail/banner/SeminarDetailBannerInform';


/**
 * @description
 * 오픈 세미나 상세 페이지 배너 컴포넌트
 * @component OpenSeminarDetailBanner
 * @returns {JSX.Element} OpenSeminarDetailBanner
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailBanner = ({ openSeminar }: { openSeminar: OpenSeminar }) => {
  return (
    <div className="w-full mt-8 flex desktop:flex-row bigTablet:flex-row lg:flex-row tablet:flex-col md:flex-col flex-col gap-8">
      {/* 왼쪽 컨텐츠 */}
      <div className="desktop:min-w-[544px] bigTablet:min-w-[544px] lg:min-w-[544px] tablet:w-full w-full aspect-w-16 aspect-h-9">
      <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
  >
        <Image
          src={openSeminar.image_url}
          alt={`${openSeminar.date}'s open_seminarimage`}
          width={1600}
          height={900}
          quality={100}
          priority
          rel="preload"
        />
        </motion.section>
      </div>
    {/* 오른쪽 컨텐츠 */}
    <div className="flex desktop:items-end bigTablet:items-end desktop:mt-0 bigTablet:mt-0 tablet:mt-8 mt-8">
    <div className="w-full flex flex-col gap-6 py-3 whitespace-nowrap">
        <div className='desktop:flex bigTablet:flex tablet:hidden hidden'>
    <Image
          src={TranslateImg.src}
          alt="translate_img"
          width={352}
          height={56}
          quality={100}
        />
        </div>
        <SeminarDetailBannerInform type='Date' data={openSeminar.date} speaker_data=''/>
        <SeminarDetailBannerInform type='Location' data={openSeminar.location} speaker_data=''/>
        <div>
        <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
  >
          <motion.button
           key={openSeminar.id}
           whileHover={{ scale: openSeminar.status ? 1.05 : 1.0 }}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.2 }}
           className={`w-full rounded py-4 text-[0.75rem] font-medium ${openSeminar.status === false ? "text-mono_500 border border-mono_500 pointer-events-none" : "text-mono_black bg-white"}`}
         >
        {openSeminar.status === false ? '모집 기간이 아니에요.' : '모집 신청하기'}
      </motion.button>
      </motion.section>
        </div>
    </div>
    </div>
  </div>
  );
};
export default OpenSeminarDetailBanner;
