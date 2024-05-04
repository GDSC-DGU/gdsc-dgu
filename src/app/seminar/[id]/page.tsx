'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SeminarDetailHeader from '@/components/seminar/seminarDetail/header/SeminarDetailHeader';
import SeminarDetailBanner from '@/components/seminar/seminarDetail/banner/SeminarDetailBanner';
import { SEMINAR_DATA } from '@/constants/seminar/seminarData';
import SeminarDetailPdf from '@/components/seminar/seminarDetail/pdf/SeminarDetailPdf';
import NotFoundPage from '@/app/not-found';
import SeminarDetailReview from '@/components/seminar/seminarDetail/review/SeminarDetailReview';
import { changePathtoNumber } from '@/hooks/seminar/changePathtoNumber';

const SeminarDetailPage = () => {
  const pathname = usePathname();
  // 숫자 추출
  var id = changePathtoNumber(pathname);
  
  // 객체 찾기
  const seminar = SEMINAR_DATA.find(seminar => Number(seminar.id) === id);

  if (!id || !seminar) {
    // 세미나를 찾지 못한 경우
    return <NotFoundPage />;
  }
  

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
    {/* header */}
    <SeminarDetailHeader key={`${seminar.id}_header`} data={seminar}/>

    {/* banner */}
    <SeminarDetailBanner key={`${seminar.id}_banner`} data={seminar}/>

    {/* pdf file */}
    <SeminarDetailPdf key={`${seminar.id}_pdf`}/>

    {/* review */}
    <SeminarDetailReview key={`${seminar.id}_review`} />

  </div>
  <div className="h-[120px]"></div>
  </div>
  </section>;
};

export default SeminarDetailPage;
