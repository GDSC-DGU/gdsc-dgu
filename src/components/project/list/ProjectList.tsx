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
    <section>
      <section className="w-4/5 grid xl:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <section className="w-full pt-[3.75rem] flex justify-center items-center gap-3">
        <button className="w-5 h-5 bg-transparent border border-white rounded text-sm leading-4">
          1
        </button>
        <button className="w-5 h-5 bg-transparent border border-[#73787E] text-[#73787E] rounded text-sm leading-4">
          2
        </button>
        <button className="w-5 h-5 bg-transparent border border-[#73787E] text-[#73787E] rounded text-sm leading-4">
          3
        </button>
        <button className="w-5 h-5 bg-transparent border border-[#73787E] text-[#73787E] rounded text-sm leading-4">
          4
        </button>
      </section>
    </section>
  );
};

export default ProjectList;
