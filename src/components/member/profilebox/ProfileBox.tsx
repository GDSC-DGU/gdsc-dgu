import Image from 'next/image';

const ProfileBox = () => {
    return (

        <div>
        <div className="flex flex-col items-start bg-[#1C1D1F] pl-[1rem] pr-[1rem] pt-[1.25rem] pb-[1.25rem] w-[22rem]">
      <div className = "flex mb-[1rem]">
      <Image className = "mr-[1rem]"
        src="/images/members/lead.png"
        alt="lead"
        width={64}
        height={64}
        priority
      
      />
      <div className = "flex-col">
        <div className = "flex">
      <div className="text-white mt-2 mr-[0.5rem]">성이름</div>
      <div className="text-white mt-2">part role </div>
      </div>
      <div className="text-white mt-1">학과</div>
      </div>
      </div>

      <div>
      안녕하세요! GDSC DGU Lead 서희찬입니다. GDSC DGU는 많은 학우분들과 함께 성장하고 싶습니다.
          많은 관심 부탁드립니다! 감사합니다.
      </div>
    
    </div>
    </div>
    );
    };

export default ProfileBox;