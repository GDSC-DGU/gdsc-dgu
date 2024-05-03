import { PARTI_INTRODUCE } from '@/constants/recruit/partIntroduce';
import RecruitPartRow from '@/components/recruit/part/RecruitPartRow';
import RecruitTargetRowText from '@/components/recruit/target/RecruitTargetRowText';

const RecruitTarget = () => {
  return (
    <section className="w-4/5 flex flex-col  mx-auto my-32">
      <section className="flex justify-between max-md:flex-col">
        <div className="pb-8 flex-col justify-start">
          {/* 모집 타겟div */}
          <div className="flex flex-col gap-6 self-start justify-start">
            <p className="H3">
              Recruitment
              <br />
              Target
            </p>
            <p className="B1">
              아래 3가지 모두 해당 되는 분이라면, 누구든 지원 가능해요!
              <br />
              이런 분들과 함께 하고 싶어요!
            </p>
          </div>
        </div>
        {/* 지원 자격 div */}
        <div className="flex-col justify-start items-start inline-flex gap-7">
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="H6">지원 자격</div>
          </div>
          <div className="leading-7 flex-col justify-start items-start gap-2 flex ">
            <RecruitTargetRowText
              title="활동"
              content="1년에 지장이 없는 사람"
            />
            <RecruitTargetRowText
              title="공유"
              content="자신의 경험과 기술을 공유하고 싶은 사람"
            />
            <RecruitTargetRowText
              title="성장"
              content="나눔을 통해 성장하는 가치를 추구하는 사람"
            />
            <RecruitTargetRowText
              title="열정"
              content="개발 열정과 활동에 적극적으로 참여할 수 있는 사람"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 mt-12">
        <RecruitPartRow recruitPart={PARTI_INTRODUCE['web']} />
        <RecruitPartRow recruitPart={PARTI_INTRODUCE['server']} />
        <RecruitPartRow recruitPart={PARTI_INTRODUCE['ai']} />
      </section>
    </section>
  );
};

export default RecruitTarget;
