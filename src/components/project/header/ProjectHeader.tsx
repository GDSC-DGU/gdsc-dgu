/**
 * @description
 * 프로젝트 페이지 헤더 컴포넌트
 * @component ProjectHeader
 * @returns {JSX.Element} ProjectHeader
 * @since 2024.04.16
 */
/**
 * Renders the header component for the project section.
 * @returns The rendered header component.
 */

const ProjectHeader = () => {
  return (
    <section className="w-4/5 px-10 flex flex-col mx-auto my-10">
      <div className="px-3 pt-10 text-5xl leading-[3.5rem]">Project</div>
      <div className="px-3 pt-3 leading-[1.75rem]">GDSC DGU의 프로젝트</div>
      <div className="w-full pt-6 border-b border-white border-solid"></div>
    </section>
  );
};

export default ProjectHeader;
