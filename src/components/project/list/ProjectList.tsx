import ProjectCard from '../card/ProjectCard';

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
  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectList;
