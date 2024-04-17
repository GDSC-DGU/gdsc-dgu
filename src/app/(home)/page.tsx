import AboutGDSC from '@/components/home/aboutGDSC/AboutGDSC';
import HomeBanner from '@/components/home/banner/HomeBanner';
import React from 'react';

const HomePage = () => {
  return (
    <main className="w-full">
      {/* 배너 */}
      <HomeBanner />
      <AboutGDSC />
    </main>
  );
};

export default HomePage;
