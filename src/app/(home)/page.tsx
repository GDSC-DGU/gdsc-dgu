import AboutGDSC from '@/components/home/aboutGDSC/AboutGDSC';
import AboutGDSCDGU from '@/components/home/aboutGDSCDGU/AboutGDSCDGU';
import HomeBanner from '@/components/home/banner/HomeBanner';
import React from 'react';

const HomePage = () => {
  return (
    <main className="w-full">
      {/* 배너 */}
      <HomeBanner />
      {/* GDSC 소개 */}
      <AboutGDSC />
      {/* GDSC DGU 소개 */}
      <AboutGDSCDGU />
    </main>
  );
};

export default HomePage;
