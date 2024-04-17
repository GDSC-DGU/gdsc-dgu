const MemberGuideLine: React.FC<{ label: string; description: string }> = ({
  label,
  description,
}) => {
  return (
    <div className="flex">
      <p className="Sb1 w-20 flex-shrink-0">{label}</p>
      <p className="B1">{description}</p>
    </div>
  );
};

const PartCard: React.FC<{
  icon: string;
  part: string;
  description: string;
}> = ({ icon, part, description }) => {
  return (
    <div className="w-[352px] flex-shrink-0 p-8 bg-mono_black flex flex-col gap-10">
      <img className="w-6 h-6 bg-red-900" />
      <div className="text-[#ffffff] flex flex-col gap-3">
        <span className="H6">{part}</span>
        <p className="B1">{description}</p>
      </div>
    </div>
  );
};

const AboutGDSCDGU = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-mono_50">
      <section className="w-full  py-40 tablet:px-10 px-4 gap-16 flex flex-col text-mono_black">
        <div className="flex desktop:flex-row flex-col">
          {/* title */}
          <div className="mr-10">
            <div className="H3 inline-block">
              <span className="flex items-center gap-4">
                <span>GDSC in</span>
                <hr className="flex-grow border-black" />
              </span>

              <span className="inline-block whitespace-no-wrap">
                Dongguk University
              </span>
            </div>

            <div className="B1 pt-6">
              동국대학교의 GDSC는 자발적이고 주도적으로 학습하는 커뮤니티
              그룹입니다.
              <br />
              저희는 이론과 산업 간의 격차를 줄이는 연구를 하기 위해 모였습니다.
            </div>
          </div>
          {/* title */}

          {/* member */}
          <div className="flex flex-col">
            <p className="H6 h-[56px] flex items-center">Members</p>
            <MemberGuideLine
              label="Lead"
              description="모든 활동 총괄 및 총 책임을 맡습니다."
            />
            <MemberGuideLine
              label="Core"
              description="모든 맴버가 유기적으로 연결 될 수 있도록 연간 활동을 기획하고 진행을 돕습니다."
            />
            <MemberGuideLine
              label="General"
              description="적극적인 활동을 하며, 커뮤니티의 활성화에 큰 역할을 기여합니다."
            />
            <MemberGuideLine
              label="DevRel"
              description="질 높은 컨텐츠를 제공하기 위해 돕습니다."
            />
          </div>
          {/* member */}
        </div>

        <div>
          <div className="flex flex-col">
            {/* title */}
            <img className="w-6 h-6 bg-red-900 mb-8" />
            <p className="H4">모든 길은 로마로 흐른다</p>
            <p className="B1 pt-3">
              어떤 목표에 도달하는데는 많은 경로가 있습니다.
              <br />
              이와 같이, 하나의 파트에 국한 되지 않고 세가지 분야로 이루어져
              <br />
              서로의 지식과 경험을 공유하며 함께 성장해나가고자 합니다.
            </p>
          </div>
          {/* title */}

          {/* part */}
          <div className="mt-10 flex justify-between desktop:flex-row flex-col">
            <PartCard
              icon="web_app"
              part="Web / App"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
            <PartCard
              icon="web_app"
              part="Web / App"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
            <PartCard
              icon="web_app"
              part="Web / App"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
          </div>
          {/* part */}
        </div>
      </section>
    </div>
  );
};

export default AboutGDSCDGU;
