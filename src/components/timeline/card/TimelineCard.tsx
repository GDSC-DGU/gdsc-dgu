// components/TimelineCard.tsx
import React from 'react';
import Image from 'next/image';
import { TimelineCardProps } from "@/interfaces/timeline/timelineCard";

const TimelineCard: React.FC<TimelineCardProps> = ({ id, cardImageUrl, date, title, detail }) => {
  return (
    <section className="w-full md:w-1/2 max-w-[100%] md:max-w-[50%] overflow-hidden rounded-lg shadow-md relative mb-4">
      <div className="w-full aspect-w-16 aspect-h-9">
        <Image
          src={cardImageUrl}
          alt={title}
          width={1600}
          height={900}
          quality={100}
        />
        <div className="relative bottom-20 left-5">
          <h3 className="B2">{date}</h3>
          <h3 className="B2">{title}</h3>
        </div>
      </div>
      <p className="B2 relative left-5">{detail}</p>
    </section>
  );
};

export default TimelineCard;
