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
    <section className="w-4/5 px-10 grid xl:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default ProjectList;
