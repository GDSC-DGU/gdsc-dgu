import React from 'react';
import MemberHeader from '@/components/member/header/MemberHeader'
import TimeLine from '@/components/member/timeline/TimeLine'
import Image from 'next/image';
import LeadIntro from '@/components/member/introduce/LeadIntro';


export const metadata = {
  title: 'Member',
};

const MemberPage = () => {
  return (

    
    <main className="w-4/5 px-10 flex flex-col items-center justify-center">
      {/* -----------------------------------------------*/}
      {/* -------------------- 배너 --------------------*/}
      {/* -----------------------------------------------*/}
    <MemberHeader />
      {/* -----------------------------------------------*/}
      {/* -------------------- 타임라인 --------------------*/}
      {/* -----------------------------------------------*/}
    <TimeLine />
      {/* -----------------------------------------------*/}
      {/* -------------------- 리드 소개 --------------------*/}
      {/* -----------------------------------------------*/}
    <LeadIntro />




<div className="w-70rem flex-col justify-center mb-[2rem]">
  {/*DevRel 소개 */}
<div className="w-70rem flex flex-col justify-center mt-20 mb-20">
  <div className="text-4xl mb-[0.75rem]">
    DevRel
  </div>
  <hr className="border-t-[1px] border-[#3E4348] my-1" />
</div>

<div className="w-[70rem]  h-[12rem]  flex justify-center mt-20 mb-20">
  <div className="flex justify-between w-full">

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

    <div className="flex flex-col items-center bg-[#1C1D1F] p-4 w-[22rem]">
      <div className="text-white">상자 2 텍스트</div>
      <div className="text-white mt-1">추가 텍스트</div>
    </div>

    <div className="flex flex-col items-center bg-[#1C1D1F] p-4 w-[22rem]">
      <div className="text-white">상자 3 텍스트</div>
      <div className="text-white mt-1">추가 텍스트</div>
    </div>
  </div>
</div>

  
  
</div>





</main>



  );
};

export default MemberPage;
