'use client';

import ProjectContent from '@/components/project/content/ProjectContent';
import ProjectIntroduction from '@/components/project/introduction/ProjectIntroduction';
import { PROJECTS } from '@/constants/project/projects';
import { ProjectData } from '@/interfaces/project/projectData';
import React from 'react';

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const projectData: ProjectData = PROJECTS.find(
    (project) => project.id === Number(params.id),
  )!;

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
