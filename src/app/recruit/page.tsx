import RecruitFaq from '@/components/recruit/faq/RecruitFaq';
import RecruitHeader from '@/components/recruit/header/RecruitHeader';
import RecruitRecommand from '@/components/recruit/recommand/RecruitRecommand';
import RecruitSchedule from '@/components/recruit/schedule/RecruitSchedule';

import RecruitTarget from '@/components/recruit/target/RecruitTarget';
import React from 'react';

export const metadata = {
  title: 'Recruit',
};

const RecruitPage = () => {
  return (
    <main className="w-full">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 --------------------*/}
      {/* -----------------------------------------------*/}
      <RecruitHeader />
      {/* -----------------------------------------------*/}
      {/* -------------------- 인재상 -------------------*/}
      {/* -----------------------------------------------*/}
      {/* <RecruitRecommand /> */}
      {/* -----------------------------------------------*/}
      {/* -------------------- 모집상 -------------------*/}
      {/* -----------------------------------------------*/}
      {/* <RecruitTarget /> */}
      {/* -----------------------------------------------*/}
      {/* -------------------- 스케쥴 -------------------*/}
      {/* -----------------------------------------------*/}
      {/* <RecruitSchedule /> */}
      {/* -----------------------------------------------*/}
      {/* -------------------- FAQ ---------------------*/}
      {/* -----------------------------------------------*/}
      {/* <RecruitFaq /> */}
    </main>
  );
};

export default RecruitPage;
