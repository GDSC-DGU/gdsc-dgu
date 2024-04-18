import AboutGDSC from '@/components/home/aboutGDSC/AboutGDSC';
import AboutGDSCDGU from '@/components/home/aboutGDSCDGU/AboutGDSCDGU';
import Activity from '@/components/home/activity/Activity';
import HomeBanner from '@/components/home/banner/HomeBanner';
import StoriesFrom from '@/components/home/storiesFrom/StoriesFrom';
import React from 'react';

const HomePage = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* 배너 */}
      <HomeBanner />
      {/* GDSC 소개 */}
      <AboutGDSC />
      {/* GDSC DGU 소개 */}
      <AboutGDSCDGU />
      {/* 사진 자랑 */}
      <StoriesFrom />
      {/* 활동 소개 */}
      <Activity />
    </main>
  );
};

export default HomePage;
