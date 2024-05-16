import NotFoundPage from '@/app/not-found';
import ProjectContent from '@/components/project/content/ProjectContent';
import ProjectIntroduction from '@/components/project/introduction/ProjectIntroduction';
import {
  refactorMemberListData,
  refactorProjectData,
} from '@/hooks/project/notionProjectDataRefactor';
import React from 'react';

const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  // 프로젝트 데이터 불러오기
  const projectResponse = await fetch(
    `${process.env.SERVER_HOST}/api/project/all`,
  );
  const projectList = await projectResponse.json();

  const findProjectData = projectList?.data.find(
    (project: any) => project.id === params.id,
  )!;

  if (!findProjectData) {
    // 찾을 수 없는 프로젝트인 경우!
    return <NotFoundPage />;
  }

  // 멤버 데이터 불러오기
  const memberResponse = await fetch(
    `${process.env.SERVER_HOST}/api/member/projectMember`,
  );

  const memberList = await memberResponse.json();

  const projectData = refactorProjectData(
    findProjectData,
    refactorMemberListData(memberList?.data || []),
  );

  return (
    <main className="w-full flex flex-col items-center pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 프로젝트 소개 ---------------*/}
      {/* -----------------------------------------------*/}
      <ProjectIntroduction projectData={projectData} />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 내용  ----------------*/}
      {/* -----------------------------------------------*/}
      <ProjectContent projectData={projectData} />
    </main>
  );
};

export default ProjectDetailPage;
