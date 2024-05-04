'use client';

import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import React, { useState } from 'react';
import BannerImg from '@/svg/seminar/seminar_banner.svg';

/**
 * @description
 * 세미나 상세 페이지 헤더 컴포넌트
 * @component SeminarDetailHeader
 * @returns {JSX.Element} SeminarDetailHeader
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailHeader = ({ data }: { data: SeminarThumnail }) => {
  const [categoryData, setCategoryData] = useState([data.type, `${data.flag}st`, data.topic]);

  return (
    <> 
    <div className="mt-10 px-3 flex gap-3" >
      {categoryData.map((category, index) => (
        <button
          className={`text-[0.75rem] font-medium py-2 px-3 border border-solid rounded-lg ${index === 0 ? "mono_white" :  "border-mono_500 text-mono_500"}`}
          key={index}
        >
          {category}
        </button>
      ))}
      </div>
    <p className="w-full px-3 pt-8 H3 font-normal">
      {data.title}
    </p>
    <p className="w-full px-3 pt-3 H6 font-medium">
    {data.description}
    </p>
  </>
  );
};
export default SeminarDetailHeader;
