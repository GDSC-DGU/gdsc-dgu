import React from 'react';
import GDSCLOGO from '@/svg/seminar/gdsc_logo.svg';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';


/**
 * @description
 * 세미나 상세 페이지 배너 썸네일 컴포넌트
 * @component SeminarDetailBannerThumbnail
 * @returns {JSX.Element} SeminarDetailBanner
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */

const SeminarDetailBannerThumbnail = ({ data }: { data: SeminarThumnail }) => {
    return (
        <div className="flex aspect-w-16 aspect-h-9">
      <div className="flex-1">
        <GDSCLOGO />
        <p className="mt-2 text-xl font-bold tracking-wide truncate">GDSC DGU {data.flag}st</p>
        <p className="text-xl font-bold tracking-wide truncate">{data.type}</p>
        <p className="mt-1 text-md font-thin tracking-wide truncate">{data.date}</p>
        <p className="mt-2 w-14 border border-solid text-zinc-500 h-0 tracking-wide"></p>
        <p className="text-4xl font-normal mt-[1rem] tracking-wide">{data.title}</p>
        <p className="mt-2 text-sm font-thin tracking-wide">{data.description}</p>
      </div>
      </div>
    );
  };
  export default SeminarDetailBannerThumbnail;
  