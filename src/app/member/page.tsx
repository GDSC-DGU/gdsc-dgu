import React from 'react';
import MemberHeader from '@/components/member/header/MemberHeader';

import GenerationPage from '@/components/member/generation/GenerationPage';

export const metadata = {
  title: 'Member',
};

const MemberPage = () => {
  return (
    <main className="pl-[1rem] pr-[1rem] flex flex-col items-center justify-center w-full xl:w-[75rem] xl:w-full lg:w-full md:w-full/125 sm:w-full">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 --------------------*/}
      {/* -----------------------------------------------*/}
      <MemberHeader />
      {/* -----------------------------------------------*/}
      {/* ----------- 타임라인 및 GDSC세대별 페이지-------------*/}
      {/* -----------------------------------------------*/}
      <GenerationPage />
    </main>
  );
};

export default MemberPage;
