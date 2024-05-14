'use client';
import { aniSlideRight, aniSlideUp } from '../animation/animaiton';
import HomeTitle from '../title/HomeTitle';
import { motion } from 'framer-motion';

const ChannelCard: React.FC<Channel> = ({ title, description }) => {
  return (
    <motion.div
      className="flex-grow bg-mono_900 p-7 gap-3 text-white table:"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aniSlideRight}
      transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
    >
      <p className="H5">{title}</p>
      <p className="B2">{description}</p>
    </motion.div>
  );
};

interface Channel {
  title: string;
  description: string;
  link: string;
}

const ChannelList: Channel[] = [
  {
    title: 'FAQ',
    description: '자주 묻는 질문',
    link: 'instagram',
  },
  {
    title: 'Instagram',
    description: '인스타그램',
    link: 'instagram',
  },
  {
    title: 'Github',
    description: '깃허브',
    link: 'instagram',
  },
  {
    title: 'Youtube',
    description: '유튜브',
    link: 'instagram',
  },
];
const MoreAbout = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-mono_black">
      <section className="w-full max-w-[1200px]  py-40 tablet:px-10 px-4 gap-10 flex flex-col">
        <HomeTitle
          title={['More about', 'GDSC DGU']}
          description={[
            'GDSC DGU에 대해 더 많이 알고 싶다면 둘러보세요~',
            '이것도 세줄이상이면 좋겠습니다!',
          ]}
        />
        <section className=" grid   only_tablet:grid-cols-2  desktop:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8">
          {ChannelList.map((item, index) => (
            <ChannelCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default MoreAbout;
