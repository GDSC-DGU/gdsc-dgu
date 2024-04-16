import ProfileBox from '@/components/member/profilebox/ProfileBox';

const MemberIntro = () => {
    return (
        <div>
        <div className="w-70rem flex-col justify-center mb-[2rem]">
<div className="w-70rem flex flex-col justify-center mt-20 mb-20">
  <div className="text-4xl mb-[0.75rem]">
    DevRel
  </div>
  <hr className="border-t-[1px] border-[#3E4348] my-1" />
</div>

<div className="w-[70rem]  h-[12rem]  flex justify-center mt-20 mb-20">
  <div className="flex justify-between w-full">
    <ProfileBox />
    <ProfileBox />
    <ProfileBox />
  </div>
</div>

  
  
</div>
</div>
    );
    };
export default MemberIntro;