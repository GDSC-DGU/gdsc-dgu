'use client';
import React, { useState, useRef, useEffect } from 'react';
import Circle from 'public/svg/icons/member/futureCircle.svg';
import FutureDotLine from 'public/svg/icons/member/futureDotLine.svg';
import ShortDotLine from 'public/svg/icons/member/shortDotLine.svg';
import { TIME_LINE } from '@/constants/member/timeLine';

/**
 * @description
 * 타임라인 인터랙티브 컴포넌트로, 사용자는 타임라인의 각 지점을 클릭하여 선택할 수 있습니다.
 * 선택된 지점의 정보를 부모 컴포넌트에 전달합니다.
 * @component TimeLine
 * @param {function} onSelectIndex - 선택된 인덱스를 부모 컴포넌트로 전달하는 함수.
 * @returns {JSX.Element} The TimeLine interactive component.
 * @since 2024.04.18
 */
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

  const scrollContainer = useRef(null);

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
      <div className="w-full justify-center mt-20 mb-20">
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
