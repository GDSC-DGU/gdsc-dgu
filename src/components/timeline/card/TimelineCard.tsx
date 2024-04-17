// components/TimelineCard.tsx
import React from 'react';
import Image from 'next/image';
import { TimelineCardProps } from "@/interfaces/timeline/timelineCard";

const TimelineCard: React.FC<TimelineCardProps> = ({ id, cardImageUrl, date, title, detail }) => {
  return (
    <section className="w-1/2 max-w-[51%] overflow-hidden rounded-lg shadow-md relative mb-4 px-2">
      <div className="w-full aspect-w-16 aspect-h-9">
        <Image
          src={cardImageUrl}
          alt={title}
          layout='responsive'
          width={1600}
          height={900}
          objectFit='cover'
          quality={100}
        />
        <div className="absolute bottom-10 left-0 p-4">
          <h3 className="text-xs text-white">{date}</h3>
          <h3 className="text-sm text-white">{title}</h3>
        </div>
      </div>
      <p className="text-sm">{detail}</p>
    </section>
  );
};

export default TimelineCard;
