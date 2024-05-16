import React from 'react';
import groupByMonthYear from "@/utils/timeline/groupByMonthYear";
import DateHeader from "../header/DateHeader";
import TimelineMonthlyCardSection from "../section/TimelineMonthlyCardSection";
import { TimelineCardProps } from "@/interfaces/timeline/timelineCard";

/**
 * 각 월별로 그룹화된 타임라인 카드 리스트 섹션 컴포넌트
 * ex) 2024 January 하고, 해당 월 카드 리스트 렌더링
 * @component
 * @param {TimelineCardProps[]} timelineData 
 * @returns {JSX.Element} 
 * @since 2024.04.18
 */

interface TimelineMonthlyPartProps {
  timelineData: TimelineCardProps[];
}

const TimelineMonthlyPart: React.FC<TimelineMonthlyPartProps> = ({ timelineData }) => {
  const groupedData = groupByMonthYear(timelineData);

  return (
    <>
      {Object.entries(groupedData).map(([date, cards]) => (
        <div key={date} className="mx-auto my-10 animate-fadeIn">
                  <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
          <DateHeader date={date} />
          <hr className="border-t-[1px] border-mono_700 my-1" />
          <TimelineMonthlyCardSection timelineData={cards} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TimelineMonthlyPart;
