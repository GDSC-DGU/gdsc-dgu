import ProfileBox from '@/components/member/profilebox/ProfileBox';
import { DEVREL_MEMBERS } from '@/constants/member/devRel';
import { WEBAPP_MEMBERS } from '@/constants/member/webApp';
import { AIML_MEMBERS } from '@/constants/member/AIML';
import { SERVER_MEMBERS } from '@/constants/member/serverCloud';

/**
 * @description
 * 팀 멤버들을 소개하는 컴포넌트로, 사용자가 선택한 팀 카테고리에 따라 다른 팀 멤버 정보를 보여줍니다.
 * 각 팀 카테고리에 해당하는 멤버 정보는 상수로 정의된 배열에서 가져옵니다.
 * @component MemberIntro
 * @param {string} title - 선택된 팀 카테고리의 이름 (예: 'Web/App', 'Server/Cloud', 'AI/ML', 'DevRel')
 * @returns {JSX.Element} 각 팀 멤버의 프로필을 나타내는 ProfileBox 컴포넌트가 포함된 시각적 인터페이스
 * @since 2024.04.18
 */
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
