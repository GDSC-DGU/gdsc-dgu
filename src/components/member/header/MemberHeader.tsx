import BannerHead from 'public/images/member_header.png';
import BannerPng from 'public/images/member_banner_up.png';
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
        <div style={{ maxWidth: '701px', width: '100%' }}>
          <Image
            src={BannerHead}
            alt="GDSC 사이트 멤버 페이지 배너 텍스트 이미지"
            priority
            width={1400}
            height={630}
            layout="responsive"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div style={{ width: '100%' }}>
          <Image
            src={BannerPng}
            alt="GDSC 멤버들 단체사진"
            priority
            width={1400}
            height={630}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberHeader;
