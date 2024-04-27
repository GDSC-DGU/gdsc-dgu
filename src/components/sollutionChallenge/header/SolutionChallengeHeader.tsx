import BannerImg from '@/images/solution_challenge_banner.png';
import BannerImg2 from '@/svg/icons/solutionChallenge/solution_challenge_banner2.svg';
import Link from 'next/link';

/**
 * @description
 * 솔루션 챌린지 페이지 헤더 컴포넌트
 * @component SollutionChallengeHeader
 * @returns {JSX.Element} SollutionChallengeHeader
 * @since 2024.04.13
 */
/**
 * Renders the header component for the SollutionChallenge section.
 * @returns The rendered header component.
 */

const SolutionChallengeHeader = () => {
  return (
    <header className="w-full flex flex-col relative">
      <div
        className="w-full flex-col justify-center items-center gap-2.5 inline-flex h-[31.25rem] desktop:h-[40rem] min-h-fit"
        style={{
          backgroundImage: `linear-gradient(180deg, #000000c6 74.83%, #666666c8 126.52%), url(${BannerImg.src})`,
          backgroundSize: 'cover', // Sets the background image to cover the div
          backgroundPosition: 'center', // Aligns the background image to the center
          backgroundBlendMode: 'multiply',
        }}
      >
        <article className="flex flex-col items-center">
          <BannerImg2 className="scale-95" />
          <div className="flex-col items-center flex">
            <Link href="https://developers.google.com/community/gdsc-solution-challenge?hl=ko">
              <button className="border mt-16 py-4 min-w-[12.5rem] border-white Btn">
                자세히 알아보기
              </button>
            </Link>
          </div>
        </article>
      </div>
    </header>
  );
};

export default SolutionChallengeHeader;
