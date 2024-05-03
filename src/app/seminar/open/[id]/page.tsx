'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import OpenSeminarDetailHeader from '@/components/seminar/openSeminarDetail/header/OpenSeminarDetailHeader';
import OpenSeminarDetailBanner from '@/components/seminar/openSeminarDetail/banner/OpenSeminarDetailBanner';
import OpenSeminarDetailSeminars from '@/components/seminar/openSeminarDetail/kindOfSeminar/OpenSeminarDetailSeminars';
import OpenSeminarDetailInformation from '@/components/seminar/openSeminarDetail/information/OpenSeminarDetailInformation';
import { OPEN_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';
import NotFoundPage from '@/app/not-found';
import { changeOpenPathtoNumber } from '@/hooks/seminar/changePathtoNumber';

const OpenSeminarDetailPage = () => {
  const pathname = usePathname();
  // 숫자 추출
  var id = changeOpenPathtoNumber(pathname);

  // 객체 찾기
  const seminar = OPEN_SEMINAR_DATA.find(seminar => Number(seminar.id) === id);

  if (!seminar) {
    // 세미나를 찾지 못한 경우
    return <NotFoundPage />;
  }

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
    {/* header */}
    <OpenSeminarDetailHeader key={`${seminar.id}_header`} data={seminar}/>
    {/* banner */}
    <OpenSeminarDetailBanner key={`${seminar.id}_banner`} data={seminar}/>
    {/* seminars */}
    <OpenSeminarDetailSeminars key={`${seminar.id}_seminars`} data={seminar}/>
     {/* information */}
     <OpenSeminarDetailInformation key={`${seminar.id}_information`} data={seminar}/>
  </div>
  <div className="h-[7.5rem]"></div>
  </div>
    </section>;
};

export default OpenSeminarDetailPage;
