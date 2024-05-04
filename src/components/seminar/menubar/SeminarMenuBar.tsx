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
    <div className="mt-10 px-3 flex gap-3 items-center">
      {SEMINAR_CATEGORYS.map((category) => (
        <button
          key={category.value} 
          className={`text-[0.75rem] border py-2 px-3 border-solid rounded-lg ${
            selectedCategory === category.value ? 'mono_white' : 'border-mono_500 text-mono_500'
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
  