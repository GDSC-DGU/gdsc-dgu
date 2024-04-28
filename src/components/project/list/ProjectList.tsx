'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '../card/ProjectCard';
import { ProjectData } from '@/interfaces/project/projectData';
import { PROJECTS } from '@/constants/project/projects';
import ProjectPagination from '../pagination/ProjectPagination';

/**
 * @description
 * 프로젝트 페이지 프로젝트 리스트 컴포넌트
 * @component ProjectList
 * @returns {JSX.Element} ProjectList
 * @since 2024.04.16
 */
/**
 * Renders the list component for the project section.
 * @returns The rendered list component.
 */

const ProjectList = () => {
  // const [selectedYear, SetSelectedYear] = useState<string>("2024"); 이거는 세미나에 넣기!
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const itemsPerPage = 6;

  const pageNum = [];
  for (let i = 1; i <= Math.ceil(PROJECTS.length / itemsPerPage); i++) {
    pageNum.push(i);
  }

  const changeCurrentPage = (page: number) => {
    // 페이지 갱신
    const startItemIndex = (page - 1) * itemsPerPage;
    const endItemIndex = startItemIndex + itemsPerPage;
    setProjects(PROJECTS.slice(startItemIndex, endItemIndex));
    setCurrentPage(page);
    console.log(page, startItemIndex, endItemIndex);
  };

  useEffect(() => {
    changeCurrentPage(1);
  }, []);

  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* -----------------------------------------------*/}
      {/* ------------------ 페이지네이션 ------------------*/}
      {/* -----------------------------------------------*/}
      <ProjectPagination
        pageNum={pageNum}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </section>
  );
};

export default ProjectList;
