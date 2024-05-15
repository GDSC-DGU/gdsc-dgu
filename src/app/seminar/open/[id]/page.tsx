import OpenSeminarDetailHeader from '@/components/seminar/openSeminarDetail/header/OpenSeminarDetailHeader';
import OpenSeminarDetailBanner from '@/components/seminar/openSeminarDetail/banner/OpenSeminarDetailBanner';
import OpenSeminarDetailSeminars from '@/components/seminar/openSeminarDetail/kindOfSeminar/OpenSeminarDetailSeminars';
import OpenSeminarDetailInformation from '@/components/seminar/openSeminarDetail/information/OpenSeminarDetailInformation';
import { OPEN_SEMINAR_DATA, OPEN_SEMINAR_DETAIL_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';
import NotFoundPage from '@/app/not-found';
import { headers } from "next/headers";
import { findSeminarsByIds, refactorOpenSeminarData, refactorOpenSeminarDetailSeminarsData, refactorSeminarData, refactorSeminarMemberData } from '@/hooks/seminar/notionDataRefactor';
import { changePathtoSeperate } from '@/hooks/seminar/changePathtoNumber';
import { SEMINAR_MEMBER_DATA } from '@/constants/seminar/seminarMemberData';

const OpenSeminarDetailPage = async () => {
    // server comp에서 path 가져오기
    const header = headers();
    const pathname = header.get('next-url')
    const openSeminarId = changePathtoSeperate(pathname ?? '', 'seminar/open');

    // seminar 데이터 가져오기
    const openSeminarResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar/open`);
    const openSeminarList = await openSeminarResponse.json();
    const openSeminars = refactorOpenSeminarData(openSeminarList.data || {});
      // 오픈 세미나 디테일 데이터로 분리
    const openSeminar = openSeminars.find(seminar => `${seminar.id}` === `${openSeminarId}`) || OPEN_SEMINAR_DATA[0];

      // 오픈 세미나 데이터
  if (!openSeminar) {
    return <NotFoundPage />;
  }

    // seminar 데이터 가져오기
    const tag = '🌲 Open Seminar'
    const seminarResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar?Tag=${tag}`);
    const seminarList = await seminarResponse.json();
    const seminars = refactorSeminarData(seminarList.data || []);
    const detailSeminarInfo = findSeminarsByIds(seminars, openSeminar.seminars);


    // 각 세미나에 대한 멤버 데이터를 비동기로 불러오기
    const results = await Promise.all(
      detailSeminarInfo.map(async seminar => {
        const memberResponse = await fetch(`${process.env.SERVER_HOST}/api/member?seminarId=${seminar.id}`);
        const memberList = await memberResponse.json();
        const member = refactorSeminarMemberData(memberList.data[0] ?? SEMINAR_MEMBER_DATA, seminar.id);
        return refactorOpenSeminarDetailSeminarsData(seminar, member) ?? OPEN_SEMINAR_DETAIL_SEMINAR_DATA[0];
      })
    );

    const markDownResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar/open/info?pageId=${openSeminar.id}`);
    const markdown = await markDownResponse.json();
    // console.log('real ::: ', markdown);
    
  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 bigTablet:px-10 lg:px-10 md:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">

         {/* header */}
         <OpenSeminarDetailHeader key={`${openSeminar.id}_header`} openSeminar={openSeminar}/>
    {/* banner */}
    <OpenSeminarDetailBanner key={`${openSeminar.id}_banner`} openSeminar={openSeminar}/>
    {/* seminars */}
    <OpenSeminarDetailSeminars key={`${openSeminar.id}_seminars`} detailSeminars={results}/>
     {/* information */}
    <OpenSeminarDetailInformation key={`${openSeminar.id}_information`} information={markdown}/>


  </div>
  <div className="h-[7.5rem]"></div>
  </div>
    </section>;
};

export default OpenSeminarDetailPage;
