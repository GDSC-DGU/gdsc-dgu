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
    <>
    <div className="w-full px-3 pt-10 H3 font-normal">Seminar</div> 
    <div className="px-3 pt-3 H6 font-medium">여러분과 함께 나누고싶은 이야기</div>
    <p className="mt-6 border border-solid text-mono_700 h-0"/>
    <BannerImg className='mt-10 scale-100' />
</>
  );
};
export default SeminarHeader;
