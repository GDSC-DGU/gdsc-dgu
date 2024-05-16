import SolutionChallengeHeader from '@/components/sollutionChallenge/header/SolutionChallengeHeader';
import SolutionChallengeList from '@/components/sollutionChallenge/list/SolutionChallengeList';
import { refactorProjectListData } from '@/hooks/project/notionProjectDataRefactor';
import React from 'react';

export const metadata = {
  title: 'SolutionChallenge',
};

const SolutionChallengePage = async () => {
  let solutionChallengeData = [];

  // 목록 데이터 불러오기
  const type = 'Solution Challenge';
  const solutionChallengeResponse = await fetch(
    `${process.env.SERVER_HOST}/api/project?type=${type}`,
  );
  const solutionChallengeList = await solutionChallengeResponse.json();
  solutionChallengeData = refactorProjectListData(
    solutionChallengeList?.data || [],
  );

  return (
    <main className="w-full flex flex-col items-center pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 ----------------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeHeader />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 리스트 ----------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeList solutionChallengeData={solutionChallengeData} />
    </main>
  );
};

export default SolutionChallengePage;
