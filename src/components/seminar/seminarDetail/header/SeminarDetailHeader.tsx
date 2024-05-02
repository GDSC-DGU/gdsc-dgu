'use client';

import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import React, { useState } from 'react';

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
    <div className="w-full flex-col justify-center gap-[1rem] inline-flex min-h-fit relative"> 
    <div className="flex gap-2" >
      {categoryData.map((category, index) => (
        <button
          className="border border-1 py-2 px-3 border-2 border-solid text-xs font-normal rounded-lg border-zinc-1000"
          key={index}
        >
          {category}
        </button>
      ))}
      </div>
    <p className="mt-10 text-5xl font-normal leading-[3rem] tracking-wide">
      {data.title}
    </p>
    <p className="text-md font-normal leading-[3rem] tracking-wide">
    {data.description}
    </p>
  </div>
  );
};
export default SeminarDetailHeader;
