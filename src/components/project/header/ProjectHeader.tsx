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
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <div className="w-full flex flex-col mx-auto my-10">
        <div className="px-3 pt-10 H3">Project</div>
        <div className="px-3 pt-3 H6">GDSC DGU의 프로젝트</div>
        <div className="w-full pt-6 border-b border-white border-solid"></div>
      </div>
    </section>
  );
};

export default ProjectHeader;
