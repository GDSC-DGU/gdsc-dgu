'use client';

import React from 'react';
import Image from 'next/image';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';
import TranslateImg from '@/images/seminar/translate_img.png';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import SeminarDetailBannerInform from './SeminarDetailBannerInform';
import { SeminarMember } from '@/interfaces/seminar/seminarMember';


/**
 * @description
 * 세미나 상세 페이지 배너 컴포넌트
 * @component SeminarDetailBanner
 * @returns {JSX.Element} SeminarDetailBanner
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailBanner = ({ seminar, member }: { seminar: SeminarThumbnail, member: SeminarMember }) => {
  return (
    <div className="w-full mt-8 pb-6 flex desktop:flex-row bigTablet:flex-row lg:flex-row tablet:flex-col md:flex-col flex-col gap-8">
      {/* 왼쪽 컨텐츠 */}
      <div className="desktop:min-w-[544px] bigTablet:mint-w-[544px] lg:mint-w-[544px] tablet:w-full md:w-full w-full aspect-w-16 aspect-h-9">
      <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
  >
     <div className='rounded-lg overflow-hidden'>
        <Image
          src={seminar.seminar_image_url}
          alt={`${seminar.title} image`}
          width={1600}
          height={900}
          quality={100}
        />
        </div>
         </motion.section>
      </div>
    {/* 오른쪽 컨텐츠 */}
    <div className="flex desktop:items-end bigTablet:items-end desktop:mt-0 lg:items-end bigTablet:mt-0 lg:mt-0 tablet:mt-8 md:mt-8 mt-8">
    <div className="flex flex-col gap-6 py-3 whitespace-nowrap">
        <div className='desktop:flex bigTablet:flex lg:flex tablet:hidden md:hidden hidden'>
    <Image
          src={TranslateImg.src}
          alt="translate_img"
          width={352}
          height={56}
          quality={100}
        />
        </div>
        <SeminarDetailBannerInform type='Date' data={seminar.date} speaker_data=''/>
        <SeminarDetailBannerInform type='Location' data={seminar.location} speaker_data=''/>
        <SeminarDetailBannerInform type='Speaker' data={member.name} speaker_data={member.role}/>
    </div>
    </div>
  </div>
  );
};
export default SeminarDetailBanner;
