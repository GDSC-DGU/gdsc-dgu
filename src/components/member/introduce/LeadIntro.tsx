import Image from 'next/image';

const LeadIntro = () => {
    return (
        <div>
        
<div className="w-70rem flex justify-center mt-20 mb-20">
  <div className="flex">
    <div>
      <Image
        src="/images/members/lead.png"
        alt="lead"
        width={352}
        height={200}
        priority
      
      />
    </div>

    <div className="flex flex-col justify-center ml-[2rem]">
      <div className="text-4xl mb-[1.25rem]">Lead</div>
      <div className='flex'>
      <div className="text-3xl mr-[0.5rem]">서희찬</div>
      <div className="text-2xl mb-[1.25rem]">컴퓨터공학과</div>
      </div>
      <div className="flex items-center text-lg">
        <div className="w-1 h-12 bg-white mr-2.5"></div>
        <div>
          안녕하세요! GDSC DGU Lead 서희찬입니다.
          <br/>
          GDSC DGU는 많은 학우분들과 함께 성장하고 싶습니다.
          많은 관심 부탁드립니다! 감사합니다.
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default LeadIntro;