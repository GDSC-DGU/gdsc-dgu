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
    <section className="w-full flex flex-col items-center">
      <section className="w-full max-w-[1200px] tablet:px-10 px-4">
        <div className="w-full mx-auto flex desktop:flex-row flex-col justify-center items-center gap-8 mt-20">
          <Image
            className="desktop:max-w-[34rem] w-full rounded-md"
            src={ProjectImg}
            alt="프로젝트 프로필"
          />
          <div className="flex flex-col justify-end my-3">
            <div className="flex flex-row gap-[0.625rem] pb-5">
              <GithubIcon />
              <FileIcon />
              <YoutubeIcon />
            </div>
            <div className="pb-4 H3">서비스명</div>
            <div className="pb-4 H6">
              서비스의 캐치프라이즈, 컨셉을 잘 나타낼 수 있는 말을 간결하게
              적고자합니다.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center my-16 bg-mono_900">
        <div className="w-full max-w-[1200px] tablet:px-10 px-4 flex desktop:flex-row flex-col justify-between items-center py-10">
          <div className="H5">서비스가 어디서 시작됐는지, 서비스의 띠지</div>
          <div className="H5">추가적인 성과</div>
        </div>
      </section>
    </section>
  );
};

export default ProjectIntroduction;
