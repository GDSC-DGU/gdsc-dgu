import BannerSvg from 'public/svg/member_header.svg';
import BannerPng from 'public/images/member_banner.png';
import Image from 'next/image';

const MemberHeader = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-20 mb-20">
        <BannerSvg style={{ height: '100%' }} />
      </div>
      <div
        className="flex justify-center"
        style={{ width: '100%', maxWidth: '1120px' }}
      >
        <div style={{ position: 'relative', width: '1120px', height: '630px' }}>
          <Image
            src={BannerPng}
            alt="BannerPng"
            priority
            width={1120}
            height={630}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberHeader;
