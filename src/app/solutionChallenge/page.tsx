import ProjectList from '@/components/project/list/ProjectList';
import SolutionChallengeHeader from '@/components/sollutionChallenge/header/SolutionChallengeHeader';
import SolutionChallengeTab from '@/components/sollutionChallenge/tab/SolutionChallengeTab';
import React from 'react';

export const metadata = {
  title: 'SolutionChallenge',
};

const SolutionChallengePage = () => {
  return (
    <main className="w-full px-10 pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 ----------------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeHeader />
      {/* -----------------------------------------------*/}
      {/* -------------------- 상단 탭 --------------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeTab />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 리스트 ----------------*/}
      {/* -----------------------------------------------*/}
      <ProjectList />
    </main>
  );
};

export default SolutionChallengePage;
