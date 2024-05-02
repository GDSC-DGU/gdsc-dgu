import GithubIcon from '@/svg/icons/project/githubIcon.svg';
import YoutubeIcon from '@/svg/icons/project/youtubeIcon.svg';
import FileIcon from '@/svg/icons/project/fileIcon.svg';
import ProjectImg from '@/images/project_img.png';
import Image from 'next/image';

/**
 * @description
 * 프로젝트 상세 페이지 프로젝트 소개 컴포넌트
 * @component ProjectIntroduction
 * @returns {JSX.Element} ProjectIntroduction
 * @since 2024.04.16
 */
/**
 * Renders the prject introduction component for the project section.
 * @returns The rendered project introduction component.
 */

const ProjectIntroduction = () => {
  return (
    <section>
      <section className="w-4/5 mx-auto flex max-[960px]:flex-col justify-center gap-8 mt-20 px-10">
        <div
          className="flex-1 w-full min-h-[19.125rem] rounded-md flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${ProjectImg.src})`,
            backgroundSize: 'cover', // Sets the background image to cover the div
            backgroundPosition: 'center', // Aligns the background image to the center
          }}
        ></div>
        <div className="flex-1 flex flex-col justify-end my-3">
          <div className="flex flex-row gap-[0.625rem] pb-5">
            <GithubIcon />
            <FileIcon />
            <YoutubeIcon />
          </div>
          <div className="pb-4 text-5xl leading-[3.5rem]">서비스명</div>
          <div className="pb-4 text-xl leading-[1.9rem] font-medium">
            서비스의 캐치프라이즈, 컨셉을 잘 나타낼 수 있는 말을 간결하게
            적고자합니다.
          </div>
        </div>
      </section>
      <section className="w-full my-16 bg-[#1C1D1F]">
        <div className="w-4/5 mx-auto flex max-[960px]:flex-col justify-between items-center p-10">
          <div className="text-2xl">
            서비스가 어디서 시작됐는지, 서비스의 띠지
          </div>
          <div className="text-2xl">추가적인 성과</div>
        </div>
      </section>
    </section>
  );
};

export default ProjectIntroduction;
