/**
  * @description
  * 타임라인 페이지 헤더 컴포넌트
  * @component TimelineHeader
  * @returns {JSX.Element} TimelineHeader
  * @since 2024.04.17
  * @returns The rendered header component.
  */
 
 const TimelineHeader = () => {
  return (
    <>
      <div className="px-3 pt-10 H3">Timeline</div> 
      <div className="px-3 pt-3 H6">우리가 함께한 시간</div>
      <div className="w-full pt-6 border-b border-solid"></div>
  </>
  );
};

export default TimelineHeader;

