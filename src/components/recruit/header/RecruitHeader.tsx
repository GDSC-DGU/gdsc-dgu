import BannerImg from '@/images/recruit_banner.png';
import BannerImg2 from '@/svg/recruit_banner2.svg';
import ChervonDownIcon from '@/svg/icons/common/chervon_down.svg';
import Link from 'next/link';

/**
 * @description
 * 모집 페이지 헤더 컴포넌트
 * @component RecruitHeader
 * @returns {JSX.Element} RecruitHeader
 * @since 2024.04.12
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const RecruitHeader = () => {
  return (
    <header className="h-lvh flex flex-col">
      {/* Main section */}

      <div
        className="w-full flex-col justify-center items-center gap-2.5 inline-flex h-[35.75rem] 2xl:h-[40rem] min-h-fit mt-10"
        style={{
          backgroundImage: `url(${BannerImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <article className="flex flex-col items-center w-full">
          <BannerImg2 className="scale-75 max-md:scale-50" />
          <div className="flex-col items-center flex mt-14">
            <p className="text-center Cap tracking-wide">
              2기 모집 기간 <br />
              2024/08/28 ~ 2024/09/14
            </p>
            <Link href="https://forms.gle/MGWVqDKK5zwUTjes5" target="_blank">
              <p className="border mt-8 py-4 px-28 border-solid text-mono_500 Btn">
                2기 모집 사전 알림 신청 하기
              </p>
            </Link>
          </div>
        </article>
      </div>
      {/* <ChervonDownIcon className="self-center" /> */}
    </header>
  );
};
export default RecruitHeader;
