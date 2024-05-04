import React from 'react';
import Image from 'next/image';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import TranslateImg from '@/svg/seminar/translate_img.png';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import SeminarDetailBannerInform from './SeminarDetailBannerInform';


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
const SeminarDetailBanner = ({ data }: { data: SeminarThumnail }) => {
  return (
    <div className="w-full mt-8 pb-6 flex desktop:flex-row tablet:flex-col flex-col flex-col gap-8">
      {/* 왼쪽 컨텐츠 */}
      <div className="desktop:min-w-[544px] tablet:w-full w-full aspect-w-16 aspect-h-9">
      <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
  >
        <Image
          src={data.seminar_image_url}
          alt={`${data.presenter_name}'s_seminarimage`}
          width={1600}
          height={900}
          quality={100}
          priority
        />
         </motion.section>
      </div>
    {/* 오른쪽 컨텐츠 */}
    <div className="flex desktop:items-end desktop:mt-0 tablet-mt-0 mt-8">
    <div className="flex flex-col gap-6 py-3 whitespace-nowrap">
        <div className='desktop:flex tablet:hidden hidden'>
    <Image
          src={TranslateImg.src}
          alt="translate_img"
          width={352}
          height={56}
          quality={100}
          priority
        />
        </div>
        <SeminarDetailBannerInform type='Date' data={data.date} speaker_data=''/>
        <SeminarDetailBannerInform type='Location' data={data.location} speaker_data=''/>
        <SeminarDetailBannerInform type='Speaker' data={data.presenter_name} speaker_data={data.presenter_role}/>
    </div>
    </div>
  </div>
  );
};
export default SeminarDetailBanner;
