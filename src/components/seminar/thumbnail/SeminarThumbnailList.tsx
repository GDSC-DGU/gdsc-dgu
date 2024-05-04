'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SeminarThumbnail from "./SeminarThumbnail";
import { SEMINAR_DATA } from '@/constants/seminar/seminarData';
import Link from 'next/link'

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
  const router = useRouter();   
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
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    // 세미나 리스트 페이지네이션 함수
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
      // /seminar/${seminar.id}/page
    };
  
  
    return (
        <div className="mt-10">
          {/* 썸네일 리스트 */}

          {/* desktop인 경우 */}
        <div className="desktop:grid tablet:hidden hidden desktop:grid-cols-3 gap-x-8 gap-y-10">
        {currentItems.map((seminar) => (
          <Link
          href={`/seminar/${seminar.id}`}
          key={seminar.id}
        >
          <SeminarThumbnail
          key={seminar.id}
          data={seminar}
          />
          </Link>
        ))}
        </div>

         {/*tablet, mobile인 경우 */}
        <div className="desktop:hidden grid tablet:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
        {SEMINAR_DATA.map((seminar) => (
          <Link
          href={`/seminar/${seminar.id}`}
          key={seminar.id}
        >
          <SeminarThumbnail
          key={seminar.id}
          data={seminar}
          />
          </Link>
        ))}
        </div>
        {/* 페이지네이션 버튼 */}

         {/* desktop인 경우에만 보이기 */}
        <div className="pt-10 mt-5 desktop:flex tablet:hidden hidden justify-center gap-3">
          {pageNumbers.map(number => (
            <button
            key={number}
            onClick={() => paginate(number)}
            className={`text-[0.75rem] font-medium w-5 y-5 justify-center items-center text-center border rounded ${currentPage === number ? 'text-mono_white border-mono_white' : 'text-mono_500 border-mono_500'}`}
          >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  };
  export default SeminarThumbnailList;
  