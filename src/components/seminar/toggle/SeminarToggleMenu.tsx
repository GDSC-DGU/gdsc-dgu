/**
 * @description
 * 세미나 페이지 오픈 세미나 토클 메뉴
 * @component SeminarToggleMenu
 * @returns {JSX.Element} SeminarToggleMenu
 * @since 2024.04.18
 */

import { OpenSeminar } from "@/interfaces/seminar/openSeminar";

/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarToggleMenu = ({data}: {data:OpenSeminar}) => {      
  return (
    <div>
      <div
        className="w-full flex justify-between items-center">
            <div className="flex-col">
      <p className="text-lg font-normal leading-[2rem] tracking-wide">{data.opening_date}{" "}{data.type}</p>
      <p className="text-xs font-normal leading-[2rem] tracking-wide">{data.seminar_date}</p>
      </div>
      <p className="border py-2 px-2 border-solid text-zinc-500 text-sm font-bold rounded-lg">
              {data.status === false ? "종료" : "진행중"}
            </p>
      </div>
      <p className="mt-3 mb-6 border border-solid text-zinc-500 h-0"/>
      </div>
  );
};
export default SeminarToggleMenu;
