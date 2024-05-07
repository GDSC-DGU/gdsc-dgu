import SeminarDetailHeader from '@/components/seminar/seminarDetail/header/SeminarDetailHeader';
import SeminarDetailBanner from '@/components/seminar/seminarDetail/banner/SeminarDetailBanner';
import SeminarDetailPdf from '@/components/seminar/seminarDetail/pdf/SeminarDetailPdf';
import NotFoundPage from '@/app/not-found';
import SeminarDetailReview from '@/components/seminar/seminarDetail/review/SeminarDetailReview';
import { refactorSeminarData, refactorSeminarMemberData, refactorSeminarReviewData } from '@/hooks/seminar/notionDataRefactor';
import { headers } from "next/headers";
import { changePathtoSeperate } from '@/hooks/seminar/changePathtoNumber';
import { SEMINAR_MEMBER_DATA } from '@/constants/seminar/seminarMemberData';

const SeminarDetailPage = async () => {
  // server comp에서 path 가져오기
  const header = headers();
  const pathname = header.get('next-url')

  const seminarId = changePathtoSeperate(pathname ?? '');

  // seminar data 정의
  const seminarResponse = await fetch('http://localhost:3001/api/seminar');
  const seminarList = await seminarResponse.json();
  const seminars = refactorSeminarData(seminarList.data ?? []);

  // reviews 데이터 정의
  const seminarReviewResponse = await fetch(`http://localhost:3001/api/seminar/review?seminarId=${seminarId}`);
  const seminarReviewList = await seminarReviewResponse.json();
  const reviews = refactorSeminarReviewData(seminarReviewList.reviews ?? []);

  // member 데이터 정의
  const memberResponse = await fetch(`http://localhost:3001/api/member?seminarId=${seminarId}`);
  const memberList = await memberResponse.json();
  const member = refactorSeminarMemberData(memberList.data[0] ?? SEMINAR_MEMBER_DATA);

  // 세미나 디테일 데이터로 분리
  const seminar = seminars.find(seminar => `${seminar.id}` === `${seminarId}`);
    // 오픈 세미나 데이터
  if (!seminar) {
      return <NotFoundPage />;
    }

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
        {/* header */}
    <SeminarDetailHeader key={`${seminar.id}_header`} seminar={seminar}/>

{/* banner */}
<SeminarDetailBanner key={`${seminar.id}_banner`} seminar={seminar} member={member}/>

{/* pdf file */}
<SeminarDetailPdf key={`${seminar.id}_pdf`} seminar={seminar}/>

{/* review */}
<SeminarDetailReview key={`${seminar.id}_review`} reviews={reviews} />
  </div>
  <div className="h-[7.5rem]"></div>
  </div>
  </section>;
};

export default SeminarDetailPage;
