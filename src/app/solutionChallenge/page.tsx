import ProjectList from '@/components/project/list/ProjectList';
import SolutionChallengeHeader from '@/components/sollutionChallenge/header/SolutionChallengeHeader';
import SolutionChallengeList from '@/components/sollutionChallenge/list/SolutionChallengeList';
import SolutionChallengeTab from '@/components/sollutionChallenge/tab/SolutionChallengeTab';
import React from 'react';

export const metadata = {
  title: 'SolutionChallenge',
};

const SolutionChallengePage = () => {
  return (
    <main className="w-full flex flex-col items-center pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 ----------------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeHeader />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 리스트 ----------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeList />
    </main>
  );
};

export default SolutionChallengePage;
