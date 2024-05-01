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
      <div className="w-full flex-col flex-end">
        <div className="w-full flex flex-col justify-start mt-20">
          <div className="H4">{title}</div>
          <hr className="border-t-[1px] border-[#3E4348] my-1" />
        </div>

        <div className="w-full flex justify-start overflow-hidden">
          <div className="h-full flex flex-wrap justify-start items-start w-full">
            {memberType &&
              memberType.map((member, index, array) => {
                // 조건을 사용하여 줄의 마지막 박스에 패딩을 제거
                const isLastItemInRowBigTablet = (index + 1) % 2 === 0;
                const isLastItemInRowMainDesktop = (index + 1) % 3 === 0;
                return (
                  <div
                    key={member.id}
                    className={`w-full bigTablet:w-1/2 mainDesktop:w-1/3 flex pt-[2rem] justify-center items-start ${
                      isLastItemInRowBigTablet
                        ? 'bigTablet:pr-0 bigTablet:pt-[2rem]'
                        : 'bigTablet:pr-[2rem] bigTablet:pt-[2rem]'
                    } ${
                      isLastItemInRowMainDesktop
                        ? 'mainDesktop:pr-0 mainDesktop:pt-[2rem]'
                        : 'mainDesktop:pr-[2rem] mainDesktop:pt-[2rem]'
                    } overflow-hidden`} // items-start 추가
                  >
                    <ProfileBox member={member} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberIntro;
