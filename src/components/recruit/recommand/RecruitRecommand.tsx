/**
 * @description
 * 모집 페이지 헤더 컴포넌트
 * @component RecruitHeader
 * @returns {JSX.Element} RecruitHeader
 * @since 2024.04.12
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const RecruitRecommand = () => {
  return (
    <section className="w-full py-16 bg-mono_900 flex-col items-center justify-center gap-10 flex">
      {/* title */}
      <div className="max-md:w-4/5 flex-col items-center justify-center gap-10 flex">
        <div className="justify-center gap-2 inline-flex H5 max-md:H6">
          <p>같이해서 가치를 만들고 세상에 스며들다</p>
        </div>
        {/* body */}
        <div className="flex-col gap-5 flex">
          <div className="tracking-tight">
            <p className="Sh1">
              혼자만의 성장이 아닌, 언제든 사람들과 만나 서로의 이야기를
              공유하고자 커뮤니티를 만들었습니다.
            </p>
          </div>
          <div className="text-center B1">
            <p>
              공유를 통해 같이 성장하며, 사회의 문제점을 해결하기 위한 공간을
              지향합니다.
              <br />
              우리는 단순한 개발실력 향상과 프로젝트 진행이 아닌,
              <br />
              모두가 함께 열정적으로 지식을 공유하며 더 많은 사람들과 함께
              성장하고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitRecommand;
