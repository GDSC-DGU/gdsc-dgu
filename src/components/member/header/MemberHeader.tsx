import BannerSvg from 'public/svg/member_header.svg';
import BannerPng from 'public/images/member_banner.png';
import Image from 'next/image';

/**
 * @description
 * 멤버 페이지 헤더 컴포넌트
 * @component MemberHeader
 * @returns {JSX.Element} MemberHeader
 * @since 2024.04.18
 */
/**
 * Renders the header component for the member section.
 * @returns The rendered header component.
 */
const MemberHeader = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-[5rem] mb-[5rem]">
        <BannerSvg style={{ height: '100%' }} />
      </div>
      <div
        className="flex justify-center"
        style={{ width: '100%', maxWidth: '[70rem]' }}
      >
        <div
          style={{
            position: 'relative',
            width: '[70rem]',
            height: '[39.375rem]',
          }}
        >
          <Image
            src={BannerPng}
            alt="GDSC 멤버들 단체사진"
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
