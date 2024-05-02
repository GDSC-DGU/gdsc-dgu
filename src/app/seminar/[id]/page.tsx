'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SeminarDetailHeader from '@/components/seminar/seminarDetail/header/SeminarDetailHeader';
import SeminarDetailBanner from '@/components/seminar/seminarDetail/banner/SeminarDetailBanner';
import { SEMINAR_DATA } from '@/constants/seminar/seminarData';
import SeminarDetailPdf from '@/components/seminar/seminarDetail/pdf/SeminarDetailPdf';
import NotFoundPage from '@/app/not-found';
import SeminarDetailReview from '@/components/seminar/seminarDetail/review/SeminarDetailReview';

const SeminarDetailPage = () => {
  const router = useRouter();
  console.log(router);

  // 객체 찾기
  const seminar = SEMINAR_DATA.find(seminar => Number(seminar.id) === 1);

  if (!seminar) {
    // 세미나를 찾지 못한 경우
    return <NotFoundPage />;
  }
  

  return <div className="w-4/5 px-10 my-20 mx-auto">
    {/* header */}
    <SeminarDetailHeader key={`${seminar.id}_header`} data={seminar}/>

    {/* banner */}
    <SeminarDetailBanner key={`${seminar.id}_banner`} data={seminar}/>

    {/* pdf file */}
    <SeminarDetailPdf key={`${seminar.id}_pdf`}/>

    {/* review */}
    <SeminarDetailReview />
  </div>;
};

export default SeminarDetailPage;
