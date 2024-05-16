'use client';
import HomeTitle from '../title/HomeTitle';

import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';

const ActivityCard: React.FC<Activity> = ({ icon, title, description }) => {
  return (
    <div className="flex-grow">
      <img className="bg-red-900 w-24 h-24" />
      <div className="H6 pb-2 pt-6">{title}</div>
      <div className="B1 flex flex-col">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

interface Activity {
  icon: string;
  title: string;
  description: string[];
}

const ActivityList: Activity[] = [
  {
    icon: '1stGDSC',
    title: 'First GDSC',
    description: [
      '이건 희찬님이 문구를 써주삼',
      '제가 뭐라쓸지모르겠어요',
      '하이고 쓸말없다 대충 느낌만 보려고 아무말이나 채워넣기',
      '이건 4줄정도는 나와야 보기 좋을 듯 합니다',
    ],
  },
  {
    icon: '1stGDSC',
    title: 'First GDSC',
    description: [
      '이건 희찬님이 문구를 써주삼',
      '제가 뭐라쓸지모르겠어요',
      '하이고 쓸말없다 대충 느낌만 보려고 아무말이나 채워넣기',
      '이건 4줄정도는 나와야 보기 좋을 듯 합니다',
    ],
  },
  {
    icon: '1stGDSC',
    title: 'First GDSC',
    description: [
      '이건 희찬님이 문구를 써주삼',
      '제가 뭐라쓸지모르겠어요',
      '하이고 쓸말없다 대충 느낌만 보려고 아무말이나 채워넣기',
      '이건 4줄정도는 나와야 보기 좋을 듯 합니다',
    ],
  },
  {
    icon: '1stGDSC',
    title: 'First GDSC',
    description: [
      '이건 희찬님이 문구를 써주삼',
      '제가 뭐라쓸지모르겠어요',
      '하이고 쓸말없다 대충 느낌만 보려고 아무말이나 채워넣기',
      '이건 4줄정도는 나와야 보기 좋을 듯 합니다',
    ],
  },
];

const Activity = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-mono_50">
      <section className="w-full max-w-[1200px]  py-40 tablet:px-10 px-4 gap-40 flex flex-col text-mono_black">
        {/* 세미나 소개 */}
        <section className="flex flex-col gap-10">
          {/* 제목 */}
          <HomeTitle
            title={['Week', 'Seminar']}
            description={[
              'GDSC DGU 맴버들이 직접 기획하고, 참여하는 세미나입니다.',
              '세미나 내에서는 각자의 다양한 경험과 지식을 공유합니다',
            ]}
          />

          {/* 제목 */}

          {/* 내용 */}
          <div className="w-full  flex  overflow-scroll">
            {/* 풀페이지에서 overflow를 어떻게 보여줘야할지 모르겠네... */}
            {/* <div className="absolute w-lvw h-[198px] bg-slate-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
            <div className="flex flex-shrink-0 gap-6">
              <img className="w-[352px] h-[198px] flex-shrink-0 bg-red-900" />
              <img className="w-[352px] h-[198px] flex-shrink-0 bg-red-900" />
              <img className="w-[352px] h-[198px] flex-shrink-0 bg-red-900" />
            </div>
            {/* 스크롤되는 부분 */}

            <Swiper
              // navigation={true}
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Autoplay]}
              className="tablet:hidden flex w-full"
              loop
            >
              {[1, 2, 3].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img className="w-[352px] h-[198px] flex-shrink-0 bg-red-900" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* 내용 */}
        </section>
        {/* 세미나 */}
        {/* ----- */}
        {/* 활동 소개 */}
        <section className="flex flex-col gap-10">
          {/* 제목 */}
          <HomeTitle
            title={['Our', 'Activity']}
            description={[
              'GDSC DGU 맴버들이 직접 기획하고, 참여하는 세미나입니다.',
              '다만, 주제는 기술에만 국한되어있지 않습니다.',
            ]}
          />
          {/* 제목 */}

          {/* 내용 */}
          <div className=" grid  desktop:grid-cols-2  grid-cols-1 gap-x-8 gap-y-16">
            {ActivityList.map((item, index) => (
              <ActivityCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          {/* 내용 */}
        </section>
        {/* 활동 소개 */}
      </section>
    </div>
  );
};

export default Activity;
