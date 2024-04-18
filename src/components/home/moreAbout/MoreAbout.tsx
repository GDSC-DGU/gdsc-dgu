import HomeTitle from '../title/HomeTitle';

const ChannelCard: React.FC<Channel> = ({ label, description }) => {
  return (
    <div className="flex-grow bg-mono_900 p-7 gap-3 text-white table:">
      <p className="H5">{label}</p>
      <p className="B2">{description}</p>
    </div>
  );
};

interface Channel {
  title: string;
  description: string;
  link: string;
}

const ChannelList: Channel[] = [
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
        <section className="flex w-full desktop:flex-row flex-col gap-8 ">
          {ChannelList.map((item, index) => (
            <ChannelCard
              label={item.title}
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
