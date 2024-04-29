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
      <div className="w-full h-full flex flex-col items-start bg-[#1C1D1F] pl-[1rem] pr-[1rem] pt-[1.25rem] pb-[1.25rem]">
        <div className="w-full flex mb-[1rem]">
          <Image
            className="mr-[1rem]"
            src={member.image}
            alt={`${member.name}의 프로필 사진`}
            width={64}
            height={64}
            priority
          />
          <div className="flex-col">
            <div className="flex">
              <div className="mt-2 mr-[0.5rem]">{member.name}</div>
              <div className="mt-2">{member.role}</div>
            </div>
            <div className="mt-1">{member.department}</div>
          </div>
        </div>
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {formatDescription(member.description)}
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
