import ProjectCard from '../card/ProjectCard';

/**
 * @description
 * 프로젝트 페이지 프로젝트 페이지네이션 컴포넌트
 * @component ProjectPagination
 * @returns {JSX.Element} ProjectPagination
 * @since 2024.04.16
 */
/**
 * Renders the pagination component for the project section.
 * @returns The rendered pagination component.
 */

const ProjectPagination = () => {
  return (
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
  );
};

export default ProjectPagination;
