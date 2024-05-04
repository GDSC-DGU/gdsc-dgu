'use client';

import { useState } from 'react';
import ProjectCard from '../card/ProjectCard';
import { ProjectData } from '@/interfaces/project/projectData';
import { PROJECTS } from '@/constants/project/projects';

/**
 * @description
 * 프로젝트 페이지 프로젝트 리스트 컴포넌트 (태블릿, 모바일 크기에서 무한 스크롤 적용)
 * @component ProjectMobileList
 * @returns {JSX.Element} ProjectMobileList
 * @since 2024.04.16
 */
/**
 * Renders the list component for the project section.
 * @returns The rendered list component.
 */

const ProjectMobileList = () => {
  const [projects, setProjects] = useState<ProjectData[]>(PROJECTS);

  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectMobileList;
