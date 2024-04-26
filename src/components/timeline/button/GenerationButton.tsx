import React from 'react';

/* 
기수별 버튼 컴포넌트(1st, 2nd, 3rd)
*/

const GenerationButton: React.FC<GenerationButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className="border rounded-lg B2 px-3 py-0.5"
      style={{ borderWidth: '1px', borderColor: isActive ? 'white' : '#536E7B', color: isActive ? 'white' : '#536E7B' }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default GenerationButton;
