import Image from 'next/image';
import { LEAD } from '@/constants/member/lead';
import React from 'react';

const LeadIntro = () => {
  return (
    <div>
      <div className="w-70rem flex justify-center mt-20 mb-20">
        <div className="flex">
          <div>
            <Image
              src="/images/members/lead.png"
              alt="DGU GDSC Lead 서희찬 사진"
              width={352}
              height={200}
              priority
            />
          </div>

          <div className="flex flex-col justify-center ml-[2rem]">
            <div className="text-4xl mb-[1.25rem]">Lead</div>
            <div className="flex">
              <div className="text-3xl mr-[0.5rem]">{LEAD.name}</div>
              <div className="text-2xl mb-[1.25rem]">{LEAD.department}</div>
            </div>
            <div className="flex items-center text-lg">
              <div className="w-1 h-12 bg-white mr-2.5"></div>
              {LEAD.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadIntro;
