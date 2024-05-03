'use client';

import SeminarHeader from '@/components/seminar/header/SeminarHeader';
import SeminarMenuBar from '@/components/seminar/menubar/SeminarMenuBar';
import SeminarThumbnailList from '@/components/seminar/thumbnail/SeminarThumbnailList';
import SeminarToggle from '@/components/seminar/toggle/SeminarToggle';
import React, { useState } from 'react';

const SeminarPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
{/* header */}
<SeminarHeader />

{/* toggle */}
<SeminarToggle />

{/* select button */}
<SeminarMenuBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

{/* seminar list */}
<SeminarThumbnailList selectedCategory={selectedCategory} />
<div className="h-[7.5rem]"></div>
  </div>
  </div>
  </section>;
};

export default SeminarPage;
