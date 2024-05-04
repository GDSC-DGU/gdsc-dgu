import ProjectHeader from '@/components/project/header/ProjectHeader';
import ProjectDesktopList from '@/components/project/list/ProjectDesktopList';
import ProjectMobileList from '@/components/project/list/ProjectMobileList';
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
      {/* -------프로젝트 리스트 (페이지네이션) ----------------*/}
      {/* -----------------------------------------------*/}
      <section className="hidden desktop:block w-dvw">
        <ProjectDesktopList />
      </section>
      {/* -----------------------------------------------*/}
      {/* -------프로젝트 리스트 (무한 스크롤 ) ----------------*/}
      {/* -----------------------------------------------*/}
      <section className="block desktop:hidden">
        <ProjectMobileList />
      </section>
    </main>
  );
};

export default ProjectPage;
