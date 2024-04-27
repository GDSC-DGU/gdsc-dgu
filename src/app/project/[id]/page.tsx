import ProjectContent from '@/components/project/content/ProjectContent';
import ProjectIntroduction from '@/components/project/introduction/ProjectIntroduction';
import React from 'react';

export const metadata = {
  title: 'Project Detail',
};

const ProjectDetailPage = () => {
  return (
    <main className="w-full flex flex-col items-center pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 프로젝트 소개 ---------------*/}
      {/* -----------------------------------------------*/}
      <ProjectIntroduction />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 내용  ----------------*/}
      {/* -----------------------------------------------*/}
      <ProjectContent />
    </main>
  );
};

export default ProjectDetailPage;
