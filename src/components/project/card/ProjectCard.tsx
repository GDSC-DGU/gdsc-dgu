import ProjectImg from '@/images/project_img.png';
import Link from 'next/link';

/**
 * @description
 * 프로젝트 페이지 프로젝트 카드 컴포넌트
 * @component ProjectCard
 * @returns {JSX.Element} ProjectCard
 * @since 2024.04.16
 */
/**
 * Renders the card component for the project section.
 * @returns The rendered card component.
 */

const ProjectCard = () => {
  return (
    <section>
      <Link href="/project/1">
        <div
          className="w-full h-[12.375rem] rounded-md flex-col justify-center items-center cursor-pointer"
          style={{
            backgroundImage: `url(${ProjectImg.src})`,
            backgroundSize: 'cover', // Sets the background image to cover the div
            backgroundPosition: 'center', // Aligns the background image to the center
          }}
        ></div>
        <div className="w-full p-4 pt-3 rounded-b-md bg-[#1C1D1F]">
          <div className="pb-4 text-[1.25rem] leading-7">제목</div>
          <div className="pb-5 text-sm leading-6">
            서비스 소개! 두줄까지 적어주세요.
          </div>
          <div className="text-xs leading-[0.875rem] text-[#9FA4A8]">
            특이 사항
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProjectCard;
