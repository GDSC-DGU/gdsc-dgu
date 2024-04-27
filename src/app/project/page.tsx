import ProjectHeader from '@/components/project/header/ProjectHeader';
import ProjectList from '@/components/project/list/ProjectList';
import ProjectPagination from '@/components/project/pagination/ProjectPagination';
import React from 'react';

export const metadata = {
  title: 'Project',
};

const ProjectPage = () => {
  return (
    <main className="w-full flex flex-col items-center pb-[7.5rem]">
      {/* -----------------------------------------------*/}
      {/* -------------------- 제목 ----------------------*/}
      {/* -----------------------------------------------*/}
      <ProjectHeader />
      {/* -----------------------------------------------*/}
      {/* ------------------ 프로젝트 리스트 ----------------*/}
      {/* -----------------------------------------------*/}
      <ProjectList />
      {/* -----------------------------------------------*/}
      {/* ------------------ 페이지네이션 ------------------*/}
      {/* -----------------------------------------------*/}
      <ProjectPagination />
    </main>
  );
};

export default ProjectPage;
