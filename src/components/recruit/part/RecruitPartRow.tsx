import WebAppIcon from '@/svg/icons/recruit/webAppIcon.svg';
import ServerCloudIcon from '@/svg/icons/recruit/serverCloudIcon.svg';
import AiMlIcon from '@/svg/icons/recruit/aiMlIcon.svg';

import RecruitPartKeyword from './RecruitPartKeyword';
import { RecruitPart } from '@/interfaces/recruit/recruitPart';

const RecruitPartRow = ({ recruitPart }: { recruitPart: RecruitPart }) => {
  return (
    <section className="self-stretch justify-start items-start gap-8 flex max-md:flex-col">
      <div className="p-8 bg-black rounded flex-col justify-start items-start gap-5 relative overflow-hidden max-md:w-full">
        {/* 배경으로 사용할 div */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div
            className={`w-full h-60 relative opacity-40 ${
              recruitPart.id == 1
                ? 'bg-[#33A852]'
                : recruitPart.id == 2
                ? 'bg-[#4186F4]'
                : 'bg-[#EA4236]'
            } rounded-[9px] blur-[120px]`}
          />
        </div>
        {/* 배경 위에 올라갈 내용 */}
        <div className="relative z-10 max-md:flex-row flex flex-col">
          <div className="mb-10 max-md:mr-8">
            {recruitPart.id == 1 ? (
              <WebAppIcon />
            ) : recruitPart.id == 2 ? (
              <ServerCloudIcon />
            ) : (
              <AiMlIcon />
            )}
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="H6">{recruitPart.title}</div>
            <div className="B2">{recruitPart.description}</div>
          </div>
        </div>
      </div>

      <div className="grow p-8 bg-mono_900 rounded flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="H6">Preferred</div>
          <div className="B1">
            {recruitPart.preferred[0]}
            <br />
            {recruitPart.preferred[1]}
            <br />
            {recruitPart.preferred[2]}
          </div>
        </div>

        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
          <div className="justify-start items-start gap-3 flex">
            {recruitPart.keywords.map((keyword, index) => (
              <RecruitPartKeyword key={index} keyword={keyword} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitPartRow;
