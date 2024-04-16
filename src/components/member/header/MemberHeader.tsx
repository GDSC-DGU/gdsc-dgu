import BannerSvg from 'public/svg/member_header.svg';
import BannerPng from 'public/images/member_banner.png';
import Image from 'next/image';

const MemberHeader = () => {
    return (
        <div>
            <div className="w-full flex justify-center mt-20 mb-20" style={{ height: '10.6875rem' }}>
                <BannerSvg style={{ height: '100%' }} />
            </div>
            <div className="w-full flex justify-center">
                <Image
                    src={BannerPng}
                    alt="BannerPng"
                    height={630} // rem으로 변환한 높이 값을 px로 다시 설정
                    priority
                />
            </div>
            </div>
    );
};

export default MemberHeader;
