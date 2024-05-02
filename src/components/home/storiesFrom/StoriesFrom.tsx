const ImageBox: React.FC<{ label: string; img: string }> = ({ label, img }) => {
  return (
    <div className="flex flex-col gap-6">
      <img className="w-full  bg-red-900 " src="/images/main/story_ex.png" />
      <div className="H6">사진에 대한 제목이 들어갑니다.</div>
    </div>
  );
};
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

        <div className="tablet:hidden flex">
          <ImageBox label="1" img="" />
        </div>
        {/* content */}
      </section>
    </div>
  );
};

export default StoriesFrom;
