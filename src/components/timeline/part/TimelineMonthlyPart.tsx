/**
 * @description
 * 각 월별로 그룹화된 타임라인 카드 리스트 섹션 컴포넌트
 * ex) 2024 January 하고, 해당 월 카드 리스트 렌더링
 * @component
 * @param {TimelineCardProps[]} timelineData 
 * @returns {JSX.Element} 
 * @since 2024.04.18
 */
import React from 'react';
import groupByMonthYear from "@/utils/timeline/groupByMonthYear";
import DateHeader from "../header/DateHeader";
import TimelineMonthlyCardSection from "../section/TimelineMonthlyCardSection";
import { TimelineCardProps } from "@/interfaces/timeline/timelineCard";

interface TimelineMonthlyPartProps {
  timelineData: TimelineCardProps[];
}

const TimelineMonthlyPart: React.FC<TimelineMonthlyPartProps> = ({ timelineData }) => {
  const groupedData = groupByMonthYear(timelineData);

  return (
    <>
      {Object.entries(groupedData).map(([date, cards]) => (
        <div key={date} className="w-4/5 mx-auto my-10">
          <DateHeader date={date} />
          <TimelineMonthlyCardSection timelineData={cards} />
        </div>
      ))}
    </>
  );
};

export default TimelineMonthlyPart;
