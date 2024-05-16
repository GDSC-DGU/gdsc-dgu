'use client';
import HomeTitle from '../title/HomeTitle';
import { motion } from 'framer-motion';

import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { aniSlideRight, aniSlideUp } from '../animation/animaiton';

const SeminarCard: React.FC<Seminar> = ({ img, link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aniSlideRight}
      transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
    >
      <img
        className="tablet:w-[352px] w-full h-[198px] flex-shrink-0"
        src={img}
      />
    </motion.div>
  );
};

const ActivityCard: React.FC<Activity> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aniSlideUp}
      transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
      className="flex-grow"
    >
      <img className="w-24 h-24" src={icon} />
      <div className="H6 pb-2 pt-6">{title}</div>
      <div className="B1 flex flex-col">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </motion.div>
  );
};

interface Seminar {
  img: string;
  link: string;
}

interface Activity {
  icon: string;
  title: string;
  description: string[];
}

const SeminarList: Seminar[] = [
  { img: '/images/main/ourActivity/seminar/seminar_1.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_2.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_3.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_4.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_5.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_6.png', link: '@22' },
  { img: '/images/main/ourActivity/seminar/seminar_7.png', link: '@22' },
];

const ActivityList: Activity[] = [
  {
    icon: '/images/main/ourActivity/firstGDSC.png',
    title: 'First GDSC',
    description: [
      '프로젝트, 스터디의 팀원을 구한다면 GDSC DGU에서!',
      '나아가고자 하는 방향과, 이루고자하는 뜻이 같은 사람들을 만나보세요.',
      '다른 곳에서 멤버를 구하는 것이 아니라, GDSC DGU에서',
      '우선적으로 사람을 찾는 문화입니다',
    ],
  },
  {
    icon: '/images/main/ourActivity/solutionChallenge.png',
    title: 'Solution Challenge',
    description: [
      '전 세계 GDSC 구성원들이 참여하는 GDSC의 공식적인 행사입니다.',
      'Google 기술 혹은 제품을 활용하여 지역 사회 문제를 해결합니다.',
      '이를 통하여 UN이 제시하는 17가지 문제점을 ',
      '해결하는 서비스를 만들고자합니다.',
    ],
  },
  {
    icon: '/images/main/ourActivity/withU.png',
    title: 'WithU',
    description: [
      'GDSC DGU만의 자체 스터디입니다.',
      '마음이 맞는 사람이 모여 다양한 스터디를 진행합니다.',
      '누구나 스터디를 진행할 수 있기 때문에 관심 있는 분야에 대한',
      '자율적인 활동이 가능합니다.',
    ],
  },
  {
    icon: '/images/main/ourActivity/demoDay.png',
    title: 'Demo Day',
    description: [
      'GDSC DGU의 수료식 전, 1년간의 활동을 소개하는 시간을 갖습니다.',
      '졸업작품 전시회와 같이 교내 Demo Day를 진행하여, ',
      '학생 및 교수님들에게  Sollution Challenge와 Project를 선보이고,',
      '세미나와 자체 시상식을 진행할 예정입니다.',
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
          <div className="w-full  overflow-scroll tablet:flex hidden">
            {/* 풀페이지에서 overflow를 어떻게 보여줘야할지 모르겠네... */}
            {/* <div className="absolute w-lvw h-[198px] bg-slate-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
            <div className="flex flex-shrink-0 gap-6 overflow-scroll">
              {SeminarList.map((item, index) => {
                return <SeminarCard img={item.img} link={item.link} />;
              })}
            </div>
            {/* 스크롤되는 부분 */}
          </div>
          <div className="tablet:hidden flex w-full">
            <Swiper
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Autoplay]}
              loop
              className="w-full"
            >
              {SeminarList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SeminarCard img={item.img} link={item.link} />
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
