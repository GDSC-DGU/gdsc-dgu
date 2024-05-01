import Image from 'next/image';

const ProfileBox = ({ member }: { member: any }) => {
  const formatDescription = (description: string) => {
    if (description.length > 81) {
      return description.substring(0, 78) + '...'; // 첫 78자에 말줄임표 추가
    }
    return description.padEnd(81, ' '); // 81자 미만이면 공백으로 채움
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-start bg-mono_900 pl-[1rem] pr-[1rem] pt-[1.25rem] pb-[1.25rem] rounded-[0.25rem]">
        <div className="w-full flex mb-[1rem]">
          <Image
            className="mr-[1rem] rounded-[0.2rem]"
            src={member.image}
            alt={`${member.name}의 프로필 사진`}
            width={64}
            height={64}
            priority
          />
          <div className="flex-col">
            <div className="flex">
              <div className="Sb1 mt-2 mr-[0.5rem]">{member.name}</div>
              <div className="B1 mt-2 text-mono_200">{member.role}</div>
            </div>
            <div className="B1 mt-1">{member.department}</div>
          </div>
        </div>
        <div className="B2 min-h-[4.5rem]" style={{ whiteSpace: 'pre-wrap' }}>
          {formatDescription(member.description)}
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
