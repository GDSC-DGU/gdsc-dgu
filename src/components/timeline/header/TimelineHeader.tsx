/**
  * @description
  * 타임라인 페이지 헤더 컴포넌트
  * @component TimelineHeader
  * @returns {JSX.Element} TimelineHeader
  * @since 2024.04.17
  */
 /**
  * Renders the header component for the Timeline section.
  * @returns The rendered header component.
  */
 
 const TimelineHeader = () => {
  return (
    <section className="w-4/5 flex flex-col mx-auto my-10">  
      <div className="px-3 pt-10 text-5xl leading-[3.5rem]">Timeline</div>
      <div className="px-3 pt-3 leading-[1.75rem]">우리가 함께한 시간</div>
      <div className="w-full pt-6 border-b border-white border-solid"></div>
    </section>
  );
};
 
  export default TimelineHeader;
