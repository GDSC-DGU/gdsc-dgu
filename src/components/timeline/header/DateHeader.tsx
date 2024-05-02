/**
 * @description
 * 날짜 표시 헤더 컴포넌트
 * @component DateHeader
 * @returns {JSX.Element} DateHeader
 * @since 2024.04.17
 */
// components/DateHeader.tsx
import { DateHeaderProps } from "@/interfaces/timeline/timelineDate";
import React from 'react';
const DateHeader: React.FC<DateHeaderProps> = ({ date }) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="text-4xl mb-[0.75rem]">{date}</div>
      <hr className="border-t-[1px] border-[#3E4348] my-1" />
    </div>
  );
};

export default DateHeader;
