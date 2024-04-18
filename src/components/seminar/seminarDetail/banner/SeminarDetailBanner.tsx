import React from 'react';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import SeminarDetailBannerThumbnail from './SeminarDetailBannerThumbnail';


/**
 * @description
 * 세미나 상세 페이지 배너 컴포넌트
 * @component SeminarDetailBanner
 * @returns {JSX.Element} SeminarDetailBanner
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarDetailBanner = ({ data }: { data: SeminarThumnail }) => {
  return (
    <div className="mt-20 w-full flex relative gap-10">
      {/* 왼쪽 컨텐츠 */}
  <SeminarDetailBannerThumbnail data={data} />
    {/* 오른쪽 컨텐츠 */}
    <div className='flex flex-col justify-end align-end mr-20 justify-between text-end align-end h-full'>
      <div
        className="relative" 
        style={{
          backgroundImage: `url(${data.profile_image_url})`,
          backgroundSize: "cover",
          borderRadius: 100,
          aspectRatio: 1/1,
          height: 160,
          width: 160,
        }}
      >
        <div className="flex flex-col absolute bottom-0 right-0 gap-1.5">
          <p className="text-center py-0.5 px-1 bg-[#fff] text-[#000] text-[0.6rem] font-bold rounded-2xl">
            {data.presenter}
          </p>
          <p className="text-center py-0.5 px-1 bg-[#fff] text-[#000] text-[0.6rem] font-bold rounded-2xl">
            {data.flag}st {data.role}
          </p>
        </div>
      </div>
      </div>
    <div className="flex-1 flex-col">
        <p className="font-bold text-lg">
            Date
        </p>
        <p className="mt-1 font-thin text-md">
            {data.date}
        </p>
        <p className="mt-5 font-bold text-lg">
            Location
        </p>
        <p className="mt-1 font-thin text-md">
            {data.location}
        </p>
        <p className="mt-5 font-bold text-lg">
            Speaker
        </p>
        <p className="mt-1 font-thin text-md">
            {data.presenter}
        </p>
    </div>
  </div>
  );
};
export default SeminarDetailBanner;
