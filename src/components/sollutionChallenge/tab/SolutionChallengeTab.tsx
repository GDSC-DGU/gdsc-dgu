import LightIcon from '@/svg/icons/solutionChallenge/lightIcon.svg';

/**
 * @description
 * 솔루션 챌린지 페이지 상단 탭 컴포넌트
 * @component SollutionChallengeTab
 * @returns {JSX.Element} SollutionChallengeTab
 * @since 2024.04.13
 */
/**
 * Renders the Tab component for the SollutionChallenge section.
 * @returns The rendered Tab component.
 */

const SolutionChallengeTab = () => {
  return (
    <section className="w-4/5 mx-auto px-10">
      <section className="w-full mt-8 mb-10 p-5 flex flex-row items-center gap-2 rounded-xl bg-[#1C1D1F]">
        <LightIcon className="scale-90" />
        <div>
          2024 Solution Challenge 에서 GDSC DGU의 2팀이 TOP100에 진출했습니다.
        </div>
      </section>
      <section className="pb-10 px-3 flex items-center gap-3">
        <button className="py-2 px-3 bg-transparent border border-white rounded-lg text-sm leading-4">
          2024
        </button>
        <button className="py-2 px-3 bg-transparent border border-[#73787E] text-[#73787E] rounded-lg text-sm leading-4">
          2023
        </button>
        <button className="py-2 px-3 bg-transparent border border-[#73787E] text-[#73787E] rounded-lg text-sm leading-4">
          2022
        </button>
        <button className="py-2 px-3 bg-transparent border border-[#73787E] text-[#73787E] rounded-lg text-sm leading-4">
          2021
        </button>
        <button className="py-2 px-3 bg-transparent border border-[#73787E] text-[#73787E] rounded-lg text-sm leading-4">
          2020
        </button>
      </section>
    </section>
  );
};

export default SolutionChallengeTab;
