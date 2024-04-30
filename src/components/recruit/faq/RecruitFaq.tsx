import RecruiteFaqBox from '@/components/recruit/faq/RecruitFaqBox';
import { RECRUIT_FAQ } from '@/constants/recruit/recruitFaq';
import Link from 'next/link';

const RecruitFaq = () => {
  return (
    <section className="w-full px-10 py-28 flex-col justify-start items-center gap-32 inline-flex">
      <div className="w-4/5 mx-auto my-0 flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch flex-col justify-start items-start flex">
          {/* title */}
          <div className="px-1 pb-10 gap-8 flex items-end">
            <p className="H3">
              Frequently
              <br />
              Asked Questions
            </p>
          </div>
          {/* body */}

          <div className="self-stretch rounded flex-col justify-start items-start gap-6 flex">
            <RecruiteFaqBox faq={RECRUIT_FAQ[0]} />
            <RecruiteFaqBox faq={RECRUIT_FAQ[1]} />
            <RecruiteFaqBox faq={RECRUIT_FAQ[2]} />
          </div>
        </div>
        <Link href="https://www.instagram.com/gdsc.dgu/" target="_blank">
          <div className="w-80 py-4 bg-mono_900 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="Btn">문의하기</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default RecruitFaq;
