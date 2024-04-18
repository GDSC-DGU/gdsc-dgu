/* 
기수별 버튼 컴포넌트(1st, 2nd, 3rd)
*/
import React from 'react';

const GenerationButton: React.FC<GenerationButtonProps> = ({ label, isActive, onClick }) => {
  const borderColor = isActive ? 'white' : '#536E7B';
  const textColor = isActive ? 'white' : '#536E7B';

  return (
    <button
      className="w-10 h-8 bg-transparent border rounded-lg text-xs leading-4 px-2 py-1"
      style={{ borderWidth: '1.5px', borderColor, color: textColor }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default GenerationButton;
