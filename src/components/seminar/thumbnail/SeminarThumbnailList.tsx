'use client';

import React, { useState } from 'react';
import SeminarThumbnail from "./SeminarThumbnail";
import { SEMINAR_DATA } from '@/constants/seminar/seminarData';

/**
 * @description
 * 세미나 페이지 세미나 리스트
 * @component SeminarThumbnailList
 * @returns {JSX.Element} SeminarThumbnailList
 * @since 2024.04.18
 */


/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */

const SeminarThumbnailList = ({ selectedCategory }: { selectedCategory: string }) => {      
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;  // 한 페이지당 표시할 항목 수
  
    // topic으로 데이터 필터링
  const filteredData = selectedCategory !== "all" ? SEMINAR_DATA.filter(seminar => seminar.topic === selectedCategory) : SEMINAR_DATA;

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  // 페이지 번호 계산
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(SEMINAR_DATA.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    // 페이지 변경 함수
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
  
    return (
        <div className="w-full mt-20">
          {/* 썸네일 레스트 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-20" style={{
          aspectRatio: 16/9,
        }}>
        {currentItems.map((seminar) => (
          <SeminarThumbnail
          key={seminar.id}
          data={seminar}
          />
        ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <div className="flex justify-center gap-4">
          {pageNumbers.map(number => (
            <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-2 py-1 text-xs border border-2 rounded-lg ${currentPage === number ? 'text-zinc-1000' : 'text-zinc-500 border-zinc-500'}`}
          >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  };
  export default SeminarThumbnailList;
  