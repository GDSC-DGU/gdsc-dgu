'user client';
import ProfileBox from '@/components/member/profilebox/ProfileBox';
import { DEVREL_MEMBERS } from '@/constants/member/devRel';
import { WEBAPP_MEMBERS } from '@/constants/member/webApp';
import { AIML_MEMBERS } from '@/constants/member/AIML';
import { SERVER_MEMBERS } from '@/constants/member/serverCloud';
import { motion } from 'framer-motion';

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

  // 애니메이션 variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <div className="w-full flex-col flex-end">
        <div className="w-full flex flex-col justify-start mt-20">
          <div className="H4">{title}</div>
          <hr className="border-t-[1px] border-mono_700 my-1" />
        </div>

        <div className="w-full flex justify-start overflow-hidden">
          <div className="h-full flex flex-wrap justify-start items-start w-full">
            {memberType &&
              memberType.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  className={`w-full bigTablet:w-1/2 mainDesktop:w-1/3 flex pt-[2rem] justify-center items-start ${
                    (index + 1) % 2 === 0
                      ? 'bigTablet:pr-0 bigTablet:pt-[2rem]'
                      : 'bigTablet:pr-[2rem] bigTablet:pt-[2rem]'
                  } ${
                    (index + 1) % 3 === 0
                      ? 'mainDesktop:pr-0 mainDesktop:pt-[2rem]'
                      : 'mainDesktop:pr-[2rem] mainDesktop:pt-[2rem]'
                  } overflow-hidden`}
                >
                  <ProfileBox member={member} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberIntro;
