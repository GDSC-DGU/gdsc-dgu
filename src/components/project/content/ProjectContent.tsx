import ProjectMember from './ProjectMember';
import ToggleIcon from '@/svg/icons/project/toggleIcon.svg';

/**
 * @description
 * 프로젝트 상세 페이지 프로젝트 내용 컴포넌트
 * @component ProjectContent
 * @returns {JSX.Element} ProjectContent
 * @since 2024.04.16
 */
/**
 * Renders the prject content component for the project section.
 * @returns The rendered project content component.
 */

const ProjectContent = () => {
  return (
    <section className="w-4/5 px-10 pb-[7.5rem] mx-auto">
      <section>
        <div className="w-full flex flex-row justify-between items-center mb-8 px-2 pb-3 border-b border-solid border-[#3E4348]">
          <div className="text-[2.125rem] leading-[2.5rem]">Team</div>
          <button className="">
            <ToggleIcon />
          </button>
        </div>
        <div className="w-full grid min-[960px]:grid-cols-2 gap-8">
          <ProjectMember />
          <ProjectMember />
          <ProjectMember />
          <ProjectMember />
        </div>
      </section>
      <section className="mt-[5rem] leading-7">
        노션 내용 크롤링 <br /> CONG(콩) : 축하 아카이빙 서비스 <br /> CONG은 왜
        필요할까? <br />{' '}
      </section>
    </section>
  );
};

export default ProjectContent;
