import SeminarHeader from '@/components/seminar/header/SeminarHeader';
import SeminarThumbnailList from '@/components/seminar/thumbnail/SeminarThumbnailList';
import SeminarToggle from '@/components/seminar/toggle/SeminarToggle';
import { refactorSeminarData } from '@/hooks/seminar/notionDataRefactor';

const SeminarPage = async () => {
  // seminar 데이터 가져오기
  const seminarResponse = await fetch('http://localhost:3001/api/seminar');
  const seminarList = await seminarResponse.json();

  const seminars = refactorSeminarData(seminarList.data || []);

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
{/* header */}
<SeminarHeader />

{/* toggle */}
<SeminarToggle />

{/* seminar list */}
<SeminarThumbnailList seminar={seminars} />
<div className="h-[7.5rem]"></div>
  </div>
  </div>
  </section>;
};

export default SeminarPage;
