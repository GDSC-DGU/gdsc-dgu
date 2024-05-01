import { OpenDetailSeminar, OpenSeminar } from '@/interfaces/seminar/openSeminar';
import Image from 'next/image';
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
const OpenSeminarsDetailBox = ({ data }: { data: OpenDetailSeminar }) => {

  return (
    <div className="w-full flex flex-row p-4 bg-mono_900 rounded gap-4"> 
    <div className='rounded overflow-hidden'>
      <Image
          src={data.presenter_image_url}
          alt="translate_img"
          width={64}
          height={64}
          quality={100}
          priority
        />
        </div>
        <div className='flex flex-col justify-center'>
        <div className="B1 font-medium flex gap-2">
            {data.presenter} <p className="B1 font-normal text-mono_200">{data.presenter_role}</p>
        </div>
        <p className='className="B1 font-normal'>{data.seminar_title}</p>
        </div>
  </div>
  );
};
export default OpenSeminarsDetailBox;
