'use client';

import { OpenSeminar } from '@/interfaces/seminar/openSeminar';
import React, { useState } from 'react';

/**
 * @description
 * 오픈 세미나 상세 페이지 헤더 컴포넌트
 * @component OpenSeminarDetailHeader
 * @returns {JSX.Element} OpenSeminarDetailHeader
 * @since 2024.05.01
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailHeader = ({ openSeminar }: { openSeminar: OpenSeminar }) => {
  const [categoryData, setCategoryData] = useState([openSeminar.type, `${openSeminar.flag}st`]);

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
    <p className="w-full px-3 pt-8 H3">
      {openSeminar.title}
    </p>
    <p className="w-full px-3 pt-3 H6">
    {openSeminar.description}
    </p>
  </>
  );
};
export default OpenSeminarDetailHeader;
