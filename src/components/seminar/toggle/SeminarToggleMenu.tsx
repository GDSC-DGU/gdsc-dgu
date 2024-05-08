import { OpenSeminar } from "@/interfaces/seminar/openSeminar";
import { motion } from 'framer-motion';

/**
 * @description
 * 세미나 페이지 오픈 세미나 토클 메뉴
 * @component SeminarToggleMenu
 * @returns {JSX.Element} SeminarToggleMenu
 * @since 2024.04.18
 */

/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */

const SeminarToggleMenu = ({openSeminar}: {openSeminar:OpenSeminar}) => {      
  return (
    <div>
        <motion.section
           key={openSeminar.id}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.2 }}
         >
      <div
        className="p-3 flex justify-between items-center">
            <div className="flex-col">
      <p className="H6">{openSeminar.title}{" "}{openSeminar.type}</p>
      <p className="Cap">{openSeminar.date}</p>
      </div>
      <p className={`text-[0.75rem] font-medium py-2 px-3 border border-solid rounded-lg ${openSeminar.status === false ? "text-mono_500 border-mono_500" : "text-mono_white border-mono_white"}`}>
              {openSeminar.status === false ? "종료" : "모집중"}
            </p>
      </div>
      </motion.section>
      <p className="mt-3 border border-solid text-mono_700 h-0"/>
      </div>
  );
};
export default SeminarToggleMenu;
