import ProfileBox from '@/components/member/profilebox/ProfileBox';
import { DEVREL_MEMBERS } from '@/constants/member/devRel';
import { WEBAPP_MEMBERS } from '@/constants/member/webApp';
import { AIML_MEMBERS } from '@/constants/member/AIML';
import { SERVER_MEMBERS } from '@/constants/member/serverCloud';

const MemberIntro = ({ title }: { title: string }) => {
  interface Member {
    id: number;
    name: string;
    role: string;
    department: string;
    description: string;
    image: string;
  }

  let memberType: Member[] | undefined;

  if (title === 'Web/App') memberType = WEBAPP_MEMBERS;
  else if (title === 'Server/Cloud') memberType = SERVER_MEMBERS;
  else if (title === 'AI/ML') memberType = AIML_MEMBERS;
  else if (title === 'DevRel') memberType = DEVREL_MEMBERS;

  return (
    <div>
      <div className="w-70rem flex-col justify-center mb-[2rem]">
        <div className="w-70rem flex flex-col justify-center mt-20 mb-20">
          <div className="text-4xl mb-[0.75rem]">{title}</div>
          <hr className="border-t-[1px] border-[#3E4348] my-1" />
        </div>

        <div className="w-[70rem] flex justify-center mt-20 mb-20 overflow-hidden">
          <div className="flex flex-wrap justify-start w-full">
            {memberType &&
              memberType.map((member, index) => (
                <div
                  key={member.id}
                  className="w-full md:w-1/3 p-4 flex justify-center"
                >
                  <ProfileBox member={member} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberIntro;
