'use client';
import React, { useState } from 'react';
import TimelineHeader from "@/components/timeline/header/TimelineHeader";
import GenerationButton from "@/components/timeline/button/GenerationButton";
import TimelineMonthlyPart from "@/components/timeline/part/TimelineMonthlyPart";
import TIMELINE_CARDS_INFO from "@/constants/timeline/timelineCardInfo";

export default function TimelinePage() {
  const [activeGeneration, setActiveGeneration] = useState<string>('1st');

  const handleButtonClick = (generation: string): void => {
    setActiveGeneration(generation);
  };

  return (
    <main className="flex justify-center">
      <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4">
        <TimelineHeader />
        <section className="mx-auto my-10">
          <section className="flex justify-start items-center gap-3">
            {['1st', '2st', '3st'].map(generation => (
              <GenerationButton
                key={generation}
                label={generation}
                isActive={activeGeneration === generation}
                onClick={() => handleButtonClick(generation)}
              />
            ))}
          </section>
        </section>
        <TimelineMonthlyPart timelineData={TIMELINE_CARDS_INFO[activeGeneration]} />
      </div>
    </main>
  );
};
