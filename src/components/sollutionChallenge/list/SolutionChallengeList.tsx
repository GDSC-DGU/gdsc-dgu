'use client';

import { useEffect, useState } from 'react';
import { ProjectData } from '@/interfaces/project/projectData';
import { PROJECTS } from '@/constants/project/projects';
import ProjectCard from '@/components/project/card/ProjectCard';
import SolutionChallengeTab from '@/components/sollutionChallenge/tab/SolutionChallengeTab';

/**
 * @description
 * 솔루션 챌린지 페이지 프로젝트 리스트 컴포넌트
 * @component SolutionChallengeList
 * @returns {JSX.Element} SolutionChallengeList
 * @since 2024.04.16
 */
/**
 * Renders the list component for the Solution Challenge section.
 * @returns The rendered list component.
 */

const SolutionChallengeList = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [projects, setProjects] = useState<ProjectData[]>([]);

  const changeSelectedYear = (year: string) => {
    setProjects(PROJECTS.filter((project) => project.date === year));
    setSelectedYear(year);
  };

  useEffect(() => {
    changeSelectedYear('2024');
  }, []);

  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      {/* -----------------------------------------------*/}
      {/* -------------------- 상단 탭 --------------------*/}
      {/* -----------------------------------------------*/}
      <SolutionChallengeTab
        selectedYear={selectedYear}
        changeSelectedYear={changeSelectedYear}
      />
      <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SolutionChallengeList;
