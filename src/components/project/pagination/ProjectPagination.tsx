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
    <section className="w-full px-10 pt-[3.75rem] flex justify-center items-center gap-3">
      <button className="w-5 h-5 bg-transparent border border-white rounded Btn">
        1
      </button>
      <button className="w-5 h-5 bg-transparent border border-mono_500 text-mono_500 rounded Btn">
        2
      </button>
      <button className="w-5 h-5 bg-transparent border border-mono_500 text-mono_500 rounded Btn">
        3
      </button>
      <button className="w-5 h-5 bg-transparent border border-mono_500 text-mono_500 rounded Btn">
        4
      </button>
    </section>
  );
};

export default ProjectPagination;
