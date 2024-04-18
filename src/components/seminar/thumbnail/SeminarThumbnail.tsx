import React, { useState } from 'react';
import GDSCLOGO from '@/svg/seminar/gdsc_logo.svg';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';

/**
 * @description
 * 세미나 페이지 세미나 썸네일 디테일
 * @component SeminarThumbnail
 * @returns {JSX.Element} SeminarThumbnail
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarThumbnail = ({ data }: { data: SeminarThumnail }) => {
  return (
    <div className="scale-container flex relative p-2">
      {/* 왼쪽 컨텐츠 */}
    <div className="flex-6 mr-10">
      <GDSCLOGO />
      <p className="text-md font-bold tracking-wide truncate">GDSC DGU {data.flag}st</p>
      <p className="mt-1 text-md font-bold tracking-wide truncate">{data.type}</p>
      <p className="mt-1 text-sm font-thin tracking-wide truncate">{data.date}</p>
      <p className="mt-2 w-14 border border-solid text-zinc-500 h-0 tracking-wide"></p>
      <p className="text-2xl font-normal mt-[1rem] tracking-wide">{data.title}</p>
      <p className="mt-2 text-xs font-thin tracking-wide">{data.description}</p>
    </div>
    {/* 오른쪽 컨텐츠 */}
    <div className='flex flex-col justify-between text-end align-end h-full'>
      <p className="py-2 px-5 text-md font-normal rounded-xl bg-zinc-900">
        {data.topic}
      </p>
      <div
        className="relative" 
        style={{
          backgroundImage: `url(${data.profile_image_url})`,
          backgroundSize: "cover",
          borderRadius: 100,
          aspectRatio: 1/1,
          height: 100,
          width: 100,
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
  </div>
  );
};
export default SeminarThumbnail;
