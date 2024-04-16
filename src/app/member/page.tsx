import React from 'react';
import BannerSvg from 'public/svg/member_header.svg';
import BannerPng from 'public/images/member_banner.png';
import Image from 'next/image';

import Circle from 'public/svg/icons/member/futureCircle.svg';
import FutureDotLine from 'public/svg/icons/member/futureDotLine.svg';
import ShortDotLine from 'public/svg/icons/member/shortDotLine.svg';

export const metadata = {
  title: 'Member',
};

const MemberPage = () => {
  return (

    
    <div className="w-4/5 px-10 flex flex-col items-center justify-center">
      {/* 배너 */}
      <div className="w-full flex justify-center mt-20 mb-20" style={{ height: '10.6875rem' }}>
        <BannerSvg style={{ height: '100%' }} />
      </div>
      <div className="w-full flex justify-center">
        <Image
          src={BannerPng}
          alt="BannerPng"
          height={630} // rem으로 변환한 높이 값을 px로 다시 설정
          priority
        />
      </div>
    


      <div className="w-full flex justify-center mt-20 mb-20">
        {/* 타임라인 */}
      <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="  border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className="   border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <ShortDotLine />
      <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className=" border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <ShortDotLine />
       <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className="border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <FutureDotLine />
    </div>




<div className="w-70rem flex justify-center mt-20 mb-20">

  {/*Lead 소개 */}
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





</div>





  );
};

export default MemberPage;
