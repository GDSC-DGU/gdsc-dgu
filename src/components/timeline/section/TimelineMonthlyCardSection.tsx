import React from 'react';
import TimelineCard from "../card/TimelineCard";
import { TimelineCardList } from "@/interfaces/timeline/timelineCardList";

/**
 * @description
 * 월별 타임라인 카드 리스트 섹션 컴포넌트
 * @component
 * @param {TimelineCardList} timelineData
 * @returns {JSX.Element}
 * @since 2024.04.18
 */

const TimelineMonthlyCardSection: React.FC<TimelineCardList> = ({ timelineData }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {timelineData.map((card) => (
        <TimelineCard
          key={card.id}
          id={card.id}
          cardImageUrl={card.cardImageUrl}
          date={card.date}
          title={card.title}
          detail={card.detail}
        />
      ))}
    </div>
  );
};

export default TimelineMonthlyCardSection;
