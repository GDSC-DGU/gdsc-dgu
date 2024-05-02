// src/app/timeline/page.tsx
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
    <main className="w-full px-10">
      <TimelineHeader />
      <section className="w-4/5 flex flex-col mx-auto my-10">
        <section className="w-full flex justify-start items-center gap-3">
          {['1st', '2nd', '3rd'].map(generation => (
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
    </main>
  );
};
