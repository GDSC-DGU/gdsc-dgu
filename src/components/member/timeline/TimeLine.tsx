'use client';
import React, { useState } from 'react';
import Circle from 'public/svg/icons/member/futureCircle.svg';
import FutureDotLine from 'public/svg/icons/member/futureDotLine.svg';
import ShortDotLine from 'public/svg/icons/member/shortDotLine.svg';
import { TIME_LINE } from '@/constants/member/timeLine';

const TimeLine = ({
  onSelectIndex,
}: {
  onSelectIndex: (index: number) => void;
}) => {
  const [selected, setSelected] = useState(1);

  const handleCircleClick = (index: any) => {
    if (index === 0) return;
    setSelected(index);
    onSelectIndex(index); // Pass the selected index up to the parent component
  };

  const getCircleColor = (index: any) => {
    if (index === selected) return '#FB8C00';
    if (index < selected) return '#FFCC80';
    return '#9FA4A8';
  };

  const getTextColor = (index: any) => {
    if (index === selected) return '#FFFFFF';
    return '#9FA4A8';
  };

  return (
    <div>
      <div className="w-full flex justify-center mt-20 mb-20">
        <div className="flex">
          {TIME_LINE.map((item, index) => (
            <React.Fragment key={index}>
              <div className="px-4.75 flex flex-col items-center justify-center space-y-2">
                <button
                  onClick={() => handleCircleClick(index)}
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ color: getCircleColor(index) }}>
                    <Circle />
                  </div>
                </button>
                <div
                  className="border-solid text-zinc-500 text-sm font-medium"
                  style={{ fontSize: '14px', color: getTextColor(index) }}
                >
                  {item.generate}
                </div>
                <div
                  className="border-solid text-zinc-500 text-xs font-medium"
                  style={{ fontSize: '12px', color: getTextColor(index) }}
                >
                  {item.date}
                </div>
              </div>
              {index < TIME_LINE.length - 1 && (
                <ShortDotLine style={{ fill: '#FFCC80' }} />
              )}
            </React.Fragment>
          ))}
          <FutureDotLine style={{ fill: '#9FA4A8' }} />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
