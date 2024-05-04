'use client';
import React from 'react';
import RightArrowIcon from 'public/svg/icons/common/right_arrow.svg';

/**
 * @description
 * 레이아웃 Footer
 * @component Footer
 * @returns {JSX.Element} Footer
 * @since 2024.04.26
 */

const Footer = () => {
  const handlePress = () => {
    console.log('Arrow clicked');
  };

  return (
    <footer className="w-full py-10 bg-mono_900 flex desktop:pl-80 tablet:pl-20 pl-10">
      <div className="flex justify-start items-start w-full gap-10">
        <div>
          <h1 className="F1">About Us</h1>
          <p className="F2">Final Update 2023.10.02</p>
          <div className="flex items-center">
            <p className="F2">제작자 소개</p>
            <button onClick={handlePress} className="ml-2 mt-[-2px]">
              <RightArrowIcon />
            </button>
          </div>
          <div className="mt-4">
            <p className="F3">Copyright © GDSC DGU</p>
          </div>
        </div>
        <div>
          <h1 className="F1">Contact</h1>
          <div className="contact-item">
            <p className="F2 label-width">이메일</p>
            <p className="F2">gdsc.gdu@gmail.com</p>
          </div>
          <div className="contact-item">
            <p className="F2 label-width">주소</p>
            <p className="F2">서울특별시 중구 필동로1길 30</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
