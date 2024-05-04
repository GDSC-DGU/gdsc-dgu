import { DateHeaderProps } from "@/interfaces/timeline/timelineDate";
import React from 'react';

/**
 * @description
 * 날짜 표시 헤더 컴포넌트
 * @component DateHeader
 * @returns {JSX.Element} DateHeader
 * @since 2024.04.17
 */

const DateHeader: React.FC<DateHeaderProps> = ({ date }) => {
  return (
    <div className="w-full flex flex-col justify-center px-2">
      <div className="H4">{date}</div>
    </div>
  );
};

export default DateHeader;
