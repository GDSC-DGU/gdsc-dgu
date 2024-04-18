import Image from 'next/image';

const ProfileBox = ({ member }: { member: any }) => {
  return (
    <div>
      <div className="flex flex-col items-start bg-[#1C1D1F] pl-[1rem] pr-[1rem] pt-[1.25rem] pb-[1.25rem] w-[22rem]">
        <div className="flex mb-[1rem]">
          <Image
            className="mr-[1rem]"
            src={member.image}
            alt={member.name}
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
        <div>{member.description}</div>
      </div>
    </div>
  );
};

export default ProfileBox;
