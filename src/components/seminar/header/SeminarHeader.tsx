import BannerImg from '@/svg/seminar/seminar_banner.svg';

/**
 * @description
 * 세미나 페이지 헤더 컴포넌트
 * @component SeminarHeader
 * @returns {JSX.Element} SeminarHeader
 * @since 2024.04.12
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarHeader = () => {

  return (
    <div className="w-full flex-col justify-center gap-[1rem] inline-flex min-h-fit relative"> 
    <p className="text-5xl font-normal leading-[3rem] tracking-wide">
      Seminar
    </p>
    <p className="text-md font-normal leading-[3rem] tracking-wide">
      여러분과 함께 나누고싶은 이야기
    </p>
    <p className="w-full border border-solid text-zinc-500 h-0"/>
   <BannerImg className='mt-3 scale-100 w-full'/>
  </div>
  );
};
export default SeminarHeader;
