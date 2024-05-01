'use client';

import { SEMINAR_CATEGORYS } from '@/constants/seminar/seminarCategory';
import React, { useState } from 'react';

/**
 * @description
 * 세미나 페이지 오픈 세미나 토클 메뉴
 * @component SeminarMenuBar
 * @returns {JSX.Element} SeminarMenuBar
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarMenuBar = ({
  selectedCategory,
  setSelectedCategory,
}: { selectedCategory: string; setSelectedCategory: (value: string) => void }) => {

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <div className="mt-14 w-full flex gap-3.5 items-center">
      {SEMINAR_CATEGORYS.map((category) => (
        <button
          key={category.value} 
          className={`border border-1 py-2 px-3 border-2 border-solid text-sm font-normal rounded-lg ${
            selectedCategory === category.value ? 'border-zinc-1000' : 'border-zinc-500 text-zinc-500'
          }`}
          onClick={() => handleCategoryChange(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

  export default SeminarMenuBar;
  