// components/TimeLineCardListView.tsx
import React from 'react';
import TimelineCard from "../card/TimelineCard";
import { TimelineCardList } from "@/interfaces/timeline/timelineCardList";

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
