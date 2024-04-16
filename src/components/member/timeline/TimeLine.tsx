import Circle from 'public/svg/icons/member/futureCircle.svg';
import FutureDotLine from 'public/svg/icons/member/futureDotLine.svg';
import ShortDotLine from 'public/svg/icons/member/shortDotLine.svg';

const TimeLine = () => {
    return (
        <div>
        <div className="w-full flex justify-center mt-20 mb-20">
      <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="  border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className="   border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <ShortDotLine />
      <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className=" border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <ShortDotLine />
       <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
        <Circle />
        <div className="border-solid text-zinc-500 text-sm font-medium" style={{ fontSize: '14px', color: '#9FA4A8' }}>
          start
        </div>
        <div className="border-solid text-zinc-500 text-xs font-medium" style={{ fontSize: '12px', color: '#9FA4A8' }}>
          2023.7
        </div>
      </div>
      <FutureDotLine />
    </div>
    </div>
    );
    };
    
    export default TimeLine;