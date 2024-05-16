import React from 'react';
import CreatorLinkButton from "@/components/timeline/button/CreatorLinkButton";

/**
 * @description
 * 레이아웃 Footer
 * @component Footer
 * @returns {JSX.Element} Footer
 * @since 2024.04.26
 */
const Footer = () => {
  return (
    <footer className="w-full py-10 bg-mono_900 flex justify-center">
      <div className="max-w-[1200px] w-full desktop:px-10 tablet:px-10 px-4">
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center gap-10">
          <div>
            <h1 className="F1">About Us</h1>
            <p className="F2">Final Update 2023.10.02</p>
            <CreatorLinkButton />
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
      </div>
    </footer>
  );
};

export default Footer;
