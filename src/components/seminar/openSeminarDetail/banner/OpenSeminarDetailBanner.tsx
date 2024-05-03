import React from 'react';
import Image from 'next/image';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import TranslateImg from '@/svg/seminar/translate_img.png';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';


/**
 * @description
 * 오픈 세미나 상세 페이지 배너 컴포넌트
 * @component OpenSeminarDetailBanner
 * @returns {JSX.Element} OpenSeminarDetailBanner
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailBanner = ({ data }: { data: OpenSeminar }) => {
  return (
    <div className="w-full mt-8 flex desktop:flex-row tablet:flex-col flex-col flex-col gap-8">
      {/* 왼쪽 컨텐츠 */}
      <div className="desktop:min-w-[544px] tablet:w-full w-full aspect-w-16 aspect-h-9">
        <Image
          src={data.image_url}
          alt={`${data.seminar_month_date}'s open_seminarimage`}
          width={1600}
          height={900}
          quality={100}
          priority
        />
      </div>
    {/* 오른쪽 컨텐츠 */}
    <div className="flex desktop:items-end desktop:mt-0 tablet:mt-8 mt-8">
    <div className="w-full flex flex-col gap-6 py-3 whitespace-nowrap">
        <div className='desktop:flex tablet:hidden hidden'>
    <Image
          src={TranslateImg.src}
          alt="translate_img"
          width={352}
          height={56}
          quality={100}
          priority
        />
        </div>
        <div>
        <p className="H6 font-medium">
            Date
        </p>
        <p className="B1 font-normal">
            {data.seminar_opening_date}
        </p>
        </div>
        <div>
        <p className="H6 font-medium">
            Location
        </p>
        <p className="B1 font-normal">
            {data.location}
        </p>
        </div>
        <div>
      <button className={`w-full rounded py-4 text-[0.75rem] font-medium ${data.status === false ? "text-mono_500 border border-mono_500 pointer-events-none" : "text-mono_black bg-white"}`}>
        {data.status === false ? '모집 기간이 아니에요.' : '모집 신청하기'}
      </button>
        </div>
    </div>
    </div>
  </div>
  );
};
export default OpenSeminarDetailBanner;
