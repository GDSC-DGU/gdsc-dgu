import { ProjectData } from '@/interfaces/project/projectData';
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

const ProjectContent = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <section className="w-full pb-[7.5rem] mx-auto">
        <section>
          <div className="w-full flex flex-row justify-between items-center mb-8 px-2 pb-3 border-b border-solid border-mono_700">
            <div className="H4">Team</div>
            <button className="">
              <ToggleIcon />
            </button>
          </div>
          <div className="w-full grid min-[960px]:grid-cols-2 gap-8">
            {projectData?.team.length > 0 &&
              projectData.team.map((member) => (
                <ProjectMember key={member?.id} member={member} />
              ))}
          </div>
        </section>
        <section className="w-full mt-[5rem]">
          <div className="H6">노션 내용 크롤링</div>
          <div className="B1">{projectData?.content}</div>
        </section>
      </section>
    </section>
  );
};

export default ProjectContent;
