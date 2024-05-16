import ProjectHeader from '@/components/project/header/ProjectHeader';
import ProjectDesktopList from '@/components/project/list/ProjectDesktopList';
import ProjectMobileList from '@/components/project/list/ProjectMobileList';
import { refactorProjectListData } from '@/hooks/project/notionProjectDataRefactor';
import React from 'react';

export const metadata = {
  title: 'Project',
};

export const dynamic = "force-dynamic";

const ProjectPage = async () => {
  let projectData = [];

  // 목록 데이터 불러오기
  const type = 'WITHU';
  const projectResponse = await fetch(
    `${process.env.SERVER_HOST}/api/project?type=${type}`,
  );
  const projectList = await projectResponse.json();
  projectData = refactorProjectListData(projectList?.data || []);

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
        <ProjectDesktopList projectData={projectData} />
      </section>
      {/* -----------------------------------------------*/}
      {/* -------프로젝트 리스트 (무한 스크롤 ) ----------------*/}
      {/* -----------------------------------------------*/}
      <section className="block desktop:hidden">
        <ProjectMobileList projectData={projectData} />
      </section>
    </main>
  );
};

export default ProjectPage;
