import ProjectHeader from '@/components/project/header/ProjectHeader';
import ProjectList from '@/components/project/list/ProjectList';
import React from 'react';

export const metadata = {
  title: 'Project',
};

const ProjectPage = () => {
  return (
    <main className="w-full px-10 pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 제목 ----------------------*/}
      {/* -----------------------------------------------*/}
      <ProjectHeader />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 리스트 ----------------*/}
      {/* -----------------------------------------------*/}
      <ProjectList />
    </main>
  );
};

export default ProjectPage;
