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

const SolutionChallengeTab = ({
  selectedYear,
  changeSelectedYear,
}: {
  selectedYear: string;
  changeSelectedYear: (year: string) => void;
}) => {
  const yearData: string[] = ['2024', '2023', '2022', '2021', '2020'];

  return (
    <section>
      <section className="w-full mt-8 mb-10 p-5 flex flex-row items-center gap-2 rounded-xl bg-mono_900">
        <LightIcon className="scale-90" />
        <div className="B1">
          2024 Solution Challenge 에서 GDSC DGU의 2팀이 TOP100에 진출했습니다.
        </div>
      </section>
      <section className="w-full pb-10 px-3 flex items-center gap-3">
        {yearData.map((year) =>
          year === selectedYear ? (
            <button
              key={year}
              className="py-2 px-3 bg-transparent border border-white rounded-lg Btn"
            >
              {year}
            </button>
          ) : (
            <button
              key={year}
              onClick={() => changeSelectedYear(year)}
              className="py-2 px-3 bg-transparent border border-mono_500 text-mono_500 rounded-lg Btn"
            >
              {year}
            </button>
          ),
        )}
      </section>
    </section>
  );
};

export default SolutionChallengeTab;
