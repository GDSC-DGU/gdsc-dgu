const NumberAbout: React.FC<{ label: string; number: string }> = ({
  label,
  number,
}) => {
  return (
    <div className="flex flex-col">
      <p className="Cap pb-1">{label}</p>
      <p className="H5">{number} +</p>
    </div>
  );
};

const AboutGDSC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="w-full max-w-[1200px] tablet:px-10 px-4 py-40 flex flex-wrap flex-col gap-6 tablet:flex-row">
        {/* 텍스트 */}
        <div className="flex flex-col mr-8 ">
          <p className="H3 pb-6">
            Google Developer
            <br />
            Student Clubs
          </p>

          <p className="B1 pb-8">
            개발과 Google 기술에 관심있는 대학생 커뮤니티 그룹입니다.
            <br />
            Google Developers 에서 제공하는 프로그램으로
            <br />
            GDSC의 학생들은 peer-to-peer 학습 환경에서 역량을 키우고
            <br />
            공동체와 지역사회를 위한 솔루션 구축을 목표로 합니다.
            <br />
          </p>

          <div className="H6 flex gap-1 items-center">
            GDSC 소개 바로가기 <div className="w-6 h-6 bg-red-900"></div>
          </div>

          <div className="flex gap-10 pt-6">
            <NumberAbout label={'Student Developer'} number={'1,600,00'} />
            <NumberAbout label={'Offiline Event'} number={'20,000'} />
          </div>
        </div>

        {/* 이미지 */}
        <div className="desktop:flex-grow desktop:h-[378px] bg-red-100 desktop:w-auto w-full">
          <div className="desktop:block hidden bg-cover h-full w-full bg-[url('/images/main/aboutGDSC_map.png')]" />
          <img
            className="desktop:hidden block object-contain w-full"
            src="/images/main/aboutGDSC_map.png"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutGDSC;
