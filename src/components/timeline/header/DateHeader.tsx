/**
 * @description
 * 날짜 표시 헤더 컴포넌트
 * @component DateHeader
 * @returns {JSX.Element} DateHeader
 * @since 2024.04.17
 */
const DateHeader = () => {
    return (
        <div>
               <section className="w-4/5 flex flex-col mx-auto my-10">  
        <div className="w-70rem flex-col justify-center mb-[2rem]">
        <div className="w-70rem flex flex-col justify-center mt-20 mb-20">
        <div className="text-4xl mb-[0.75rem]">
          2024 January
        </div>
        <hr className="border-t-[1px] border-[#3E4348] my-1" />
      </div>
    </div>
    </section>
    </div>
    );
  };
  
  export default DateHeader;