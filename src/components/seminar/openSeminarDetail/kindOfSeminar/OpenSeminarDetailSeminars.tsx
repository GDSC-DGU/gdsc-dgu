import React from 'react';
import OpenSeminarsDetailBox from './OpenSeminarsDetailBox';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';
import Link from 'next/link';

/**
 * @description
 * 오픈 세미나 상세 페이지 세미나 종류 컴포넌트
 * @component OpenSeminarDetailSeminars
 * @returns {JSX.Element} OpenSeminarDetailSeminars
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailSeminars = ({ data }: { data: OpenSeminar }) => {

  return (
    <div className="w-full mt-10 pt-6 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 font-normal px-2 pb-4">
      Seminars
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
    <div className='mt-5 flex grid desktop:grid-cols-2 tablet:grid-cols-1 gap-8'>
    {data.seminars.map((seminar, index) => (
      <Link
      href={`/seminar/0${data.id}${seminar.id}`}
      key={seminar.id}
    >
    <OpenSeminarsDetailBox
      key={`${seminar.id}_${index}_seminar`} 
      data={seminar}
    />
    </Link>
  ))}
  </div>
  </div>
  );
};
export default OpenSeminarDetailSeminars;
