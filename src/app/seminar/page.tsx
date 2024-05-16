import SeminarHeader from '@/components/seminar/header/SeminarHeader';
import SeminarThumbnailList from '@/components/seminar/thumbnail/SeminarThumbnailList';
import SeminarToggle from '@/components/seminar/toggle/SeminarToggle';
import { refactorOpenSeminarData, refactorSeminarData } from '@/hooks/seminar/notionDataRefactor';
import NotFoundPage from '../not-found';


export const dynamic = "force-dynamic";

const SeminarPage = async () => {
  // seminar 데이터 가져오기
  const tag = '🏕️ Camping Seminar'
  const seminarResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar?Tag=${tag}`);
  const seminarList = await seminarResponse.json();
  const seminars = refactorSeminarData(seminarList.data || []);

      // open seminar 데이터 가져오기
      const openSeminarResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar/open`);
      const openSeminar = await openSeminarResponse.json();
      const openSeminars = refactorOpenSeminarData(openSeminar.data);

          // 세미나 데이터
  if (!seminars) {
    return <NotFoundPage />;
  }
      
  return <section className="flex justify-center">
  <div className="w-full desktop:px-10 bigTablet:px-10 lg:px-10 md:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">

      {/* header */}
<SeminarHeader openSeminars={openSeminars} />

{/* toggle */}
<SeminarToggle openSeminars={openSeminars} />

{/* seminar list */}
<SeminarThumbnailList seminars={seminars} />

<div className="h-[7.5rem]"></div>
  </div>
  </div>
  </section>;
};

export default SeminarPage;
