import ProfileImg from '@/images/project_img.png';

/**
 * @description
 * 프로젝트 상세 페이지 프로젝트 멤버 컴포넌트
 * @component ProjectMember
 * @returns {JSX.Element} ProjectMember
 * @since 2024.04.18
 */
/**
 * Renders the project Member component for the project section.
 * @returns The rendered project Member component.
 */

import Image from 'next/image';

const ProjectMember = () => {
  return (
    <section className="w-full p-4 bg-mono_900 flex flex-row items-center gap-4 rounded">
      <Image
        src={ProfileImg}
        alt="profile"
        className="w-[4rem] h-[4rem] rounded-lg"
      />
      <div className="flex flex-col leading-7">
        <div className="flex flex-row gap-2">
          <div className="Sh1">성이름</div>
          <div className="B1 text-mono_200">part role</div>
        </div>
        <div className="B1">세미나 이름</div>
      </div>
    </section>
  );
};

export default ProjectMember;
