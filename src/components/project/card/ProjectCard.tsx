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
        <div className="w-full p-4 pt-3 rounded-b-md bg-mono_900">
          <div className="pb-1 H6">제목</div>
          <div className="B2 h-[3.2rem] text-overflow-custom">
            서비스 소개! 두줄까지 적어주세요. 서비스 소개! 두줄까지 적어주세요.
            서비스 소개! 두줄까지 적어주세요. 서비스 소개! 두줄까지 적어주세요.
            서비스 소개! 두줄까지 적어주세요.
          </div>
          <div className="pt-5 Cap text-mono_400">특이 사항</div>
        </div>
      </Link>
    </section>
  );
};

export default ProjectCard;
