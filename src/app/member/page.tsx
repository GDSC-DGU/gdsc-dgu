import React from 'react';
import MemberHeader from '@/components/member/header/MemberHeader';

import GenerationPage from '@/components/member/generation/GenerationPage';

export const metadata = {
  title: 'Member',
};

const MemberPage = () => {
  return (
    <main className="w-4/5 px-10 flex flex-col items-center justify-center">
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
