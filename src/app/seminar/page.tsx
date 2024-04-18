'use client';

import SeminarHeader from '@/components/seminar/header/SeminarHeader';
import SeminarMenuBar from '@/components/seminar/menubar/SeminarMenuBar';
import SeminarThumbnailList from '@/components/seminar/thumbnail/SeminarThumbnailList';
import SeminarToggle from '@/components/seminar/toggle/SeminarToggle';
import React, { useState } from 'react';

const SeminarPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return <div className="w-4/5 px-10 my-20 mx-auto">
{/* header */}
<SeminarHeader />

{/* toggle */}
<SeminarToggle />

{/* select button */}
<SeminarMenuBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

{/* seminar list */}
<SeminarThumbnailList selectedCategory={selectedCategory} />
  </div>;
};

export default SeminarPage;
