'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import { aniSlideRight, aniSlideUp } from '../animation/animaiton';

interface Story {
  label: string;
  img: string;
}

const ImageBox: React.FC<Story> = ({ label, img }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aniSlideUp}
      transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
      className="flex flex-col gap-6 w-full"
    >
      <img className="w-full" src={img} />
      <div className="H6">{label}</div>
    </motion.div>
  );
};

const StoryList1: Story[] = [
  { label: 'TechTalk', img: '/images/main/storiesFromTheCommunity/3.png' },
  { label: 'Project', img: '/images/main/storiesFromTheCommunity/4.png' },
];

const StoryList2: Story[] = [
  { label: 'DevTalk', img: '/images/main/storiesFromTheCommunity/1.png' },
  {
    label: 'BraninStorming',
    img: '/images/main/storiesFromTheCommunity/2.png',
  },
];

const StoriesFrom = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-white ">
      <section className="w-full max-w-[1200px]  py-40 tablet:px-10 px-4 gap-[6rem] flex flex-col items-center text-mono_black">
        {/* title */}
        <div className="flex flex-col gap-8 items-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={aniSlideUp}
            className="H3 text-center"
          >
            Stories
            <br />
            from the community
          </motion.p>
          <motion.p
            className="B1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={aniSlideUp}
          >
            다양한 활동을 통해 함께 성장하는 우리의 이야기
          </motion.p>
        </div>
        {/* title */}

        {/* content */}
        {/* 데스크탑, 테블릿 */}
        <div className="tablet:flex w-full gap-10 max-w-[640px] hidden">
          <div className="flex-grow flex flex-col gap-14">
            {StoryList1.map((item, index) => {
              return <ImageBox label={item.label} img={item.img} />;
            })}
            <div className="w-full h-12" />
          </div>
          <div className="flex-grow flex flex-col gap-14">
            <div className="w-full h-12" />
            {StoryList2.map((item, index) => {
              return <ImageBox label={item.label} img={item.img} />;
            })}
          </div>
        </div>
        {/* 모바일 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={aniSlideRight}
          className="tablet:hidden flex w-full "
        >
          <Swiper
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Autoplay]}
            className="w-full"
            loop
          >
            {StoryList1.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ImageBox label={item.label} img={item.img} />
                </SwiperSlide>
              );
            })}
            {StoryList2.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ImageBox label={item.label} img={item.img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        {/* content */}
      </section>
    </div>
  );
};

export default StoriesFrom;
