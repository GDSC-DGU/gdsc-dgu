'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

interface Story {
  label: string;
  img: string;
}

const ImageBox: React.FC<Story> = ({ label, img }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <img className="w-full   bg-red-900 " src="/images/main/story_ex.png" />
      <div className="H6">{label}</div>
    </div>
  );
};

const StoryList: Story[] = [
  { label: '일번', img: '22' },
  { label: '이번', img: '22' },
  { label: '삼번', img: '22' },
  { label: '사번', img: '22' },
];

const StoriesFrom = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-white ">
      <section className="w-full max-w-[1200px]  py-40 tablet:px-10 px-4 gap-[6rem] flex flex-col items-center text-mono_black">
        {/* title */}
        <div className="flex flex-col gap-8 items-center">
          <p className="H3 text-center">
            Stories
            <br />
            from the community
          </p>
          <p className="B1">다양한 활동을 통해 함께 성장하는 우리의 이야기</p>
        </div>
        {/* title */}

        {/* content */}
        <div className="tablet:flex w-full gap-10 max-w-[640px] hidden">
          <div className="flex-grow flex flex-col gap-14">
            <ImageBox label="1" img="" />
            <ImageBox label="1" img="" />
            <div className="w-full h-12" />
          </div>
          <div className="flex-grow flex flex-col gap-14">
            <div className="w-full h-12" />
            <ImageBox label="1" img="" />
            <ImageBox label="1" img="" />
          </div>
        </div>

        <Swiper
          // navigation={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          className="tablet:hidden flex w-full"
          loop
        >
          {StoryList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ImageBox label={item.label} img={item.img} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* content */}
      </section>
    </div>
  );
};

export default StoriesFrom;
