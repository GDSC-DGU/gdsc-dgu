import React from 'react';
import MemberHeader from '@/components/member/header/MemberHeader'
import TimeLine from '@/components/member/timeline/TimeLine'
import LeadIntro from '@/components/member/introduce/LeadIntro';
import MemberIntro from '@/components/member/introduce/MemberIntro';

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
      {/* -------------------- 타임라인 --------------------*/}
      {/* -----------------------------------------------*/}
    <TimeLine />
      {/* -----------------------------------------------*/}
      {/* -------------------- 리드 소개 --------------------*/}
      {/* -----------------------------------------------*/}
    <LeadIntro />
      {/* -----------------------------------------------*/}
      {/* -------------------- DevRel --------------------*/}
      {/* -----------------------------------------------*/}
    <MemberIntro />






</main>



  );
};

export default MemberPage;
