'use client';

import React, {useEffect} from 'react';
import { usePathname } from 'next/navigation';
import SeminarDetailHeader from '@/components/seminar/seminarDetail/header/SeminarDetailHeader';
import SeminarDetailBanner from '@/components/seminar/seminarDetail/banner/SeminarDetailBanner';
import { SEMINAR_DATA } from '@/constants/seminar/seminarData';
import { OPEN_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';
import SeminarDetailPdf from '@/components/seminar/seminarDetail/pdf/SeminarDetailPdf';
import NotFoundPage from '@/app/not-found';
import SeminarDetailReview from '@/components/seminar/seminarDetail/review/SeminarDetailReview';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import { changePathtoNumber } from '@/hooks/seminar/changePathtoNumber';

const SeminarDetailPage = () => {
  const pathname = usePathname();
  let id = changePathtoNumber(pathname);
  console.log(id);

  let data: SeminarThumnail | undefined;

  // 일반객체
    data = SEMINAR_DATA.find(seminar => `${seminar.id}` === `${id}`);

    // 오픈 세미나 데이터
  if (!data) {
    let found = OPEN_SEMINAR_DATA.find(oseminar =>
      oseminar.seminars.some(seminar => `0${oseminar.id}${seminar.id}` === `${id}`)
    );

    if (found) {
      const matchingSeminar = found.seminars.find(seminar => `0${found.id}${seminar.id}` === `${id}`);
      console.log('match', matchingSeminar);
      
      if (matchingSeminar) {
        data = matchingSeminar;
      } else {
        // 일치하는 세미나를 찾지 못한 경우
        return <NotFoundPage />;
      }
    } else {
      // 일치하는 OpenSeminar를 찾지 못한 경우
      return <NotFoundPage />;
    }
  }
  

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
    {/* header */}
    <SeminarDetailHeader key={`${data.id}_header`} data={data}/>

    {/* banner */}
    <SeminarDetailBanner key={`${data.id}_banner`} data={data}/>

    {/* pdf file */}
    <SeminarDetailPdf key={`${data.id}_pdf`}/>

    {/* review */}
    <SeminarDetailReview key={`${data.id}_review`} />

  </div>
  <div className="h-[120px]"></div>
  </div>
  </section>;
};

export default SeminarDetailPage;
