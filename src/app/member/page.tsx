import React from 'react';
import MemberHeader from '@/components/member/header/MemberHeader';

import GenerationPage from '@/components/member/generation/GenerationPage';

export const metadata = {
  title: 'Member',
};

const MemberPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full pl-[1rem] pr-[1rem] sm:w-full md:w-100/125]lg:w-full xl:w-[75rem]">
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
