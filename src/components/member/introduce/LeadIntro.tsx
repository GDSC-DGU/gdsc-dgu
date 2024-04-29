import Image from 'next/image';
import { LEAD } from '@/constants/member/lead';
import React from 'react';

const LeadIntro = () => {
  return (
    <div>
      <div className="flex justify-start mt-20 mb-20">
        <div className="flex flex-col bigTablet:flex-row">
          <div className="w-full bigTablet:w-[22rem]">
            <div
              style={{ position: 'relative', width: '100%', height: '200px' }}
            >
              <Image
                src="/images/members/lead.png"
                alt="DGU GDSC Lead 사진"
                layout="fill" // 부모 컨테이너를 채움
                objectFit="cover" // 너비는 반응형으로 조절되고, 높이는 고정되며 이미지가 컨테이너에 맞춰 잘릴 수 있음
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center ml-[0rem] mt-[1.75rem] bigTablet:ml-[2rem]  bigTablet:mt-[0rem]">
            <div className="H4 mb-[1.25rem]">Lead</div>
            <div className="flex flex">
              <div className="H6 mr-[0.5rem]">{LEAD.name}</div>
              <div className="B1 mb-[1.25rem]">{LEAD.department}</div>
            </div>
            <div className="B2 flex items-center">
              <div className="w-1 h-full bg-white mr-2.5"></div>
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
