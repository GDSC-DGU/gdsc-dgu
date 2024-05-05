import BannerImg from '@/svg/seminar/seminar_banner.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';
import { OPEN_SEMINAR_DATA } from '@/constants/seminar/openSeminarData';

/**
 * @description
 * 세미나 페이지 헤더 컴포넌트
 * @component SeminarHeader
 * @returns {JSX.Element} SeminarHeader
 * @since 2024.04.12
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarHeader = () => {  
  // 현재 진행 세미나
  const active_seminar_id = OPEN_SEMINAR_DATA.find(seminar => seminar.status)?.id;

  return (
    <>
    <div className="w-full px-3 pt-10 H3">Seminar</div> 
    <div className="px-3 pt-3 H6">여러분과 함께 나누고싶은 이야기</div>
    <p className="mt-6 border border-solid text-mono_700 h-0"/>
    <motion.section
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.2 }}
         >
                <Link
          href={`seminar/open/${active_seminar_id}`}
        >
    <BannerImg className='mt-10 scale-100' />
    </Link>
    </motion.section>
</>
  );
};
export default SeminarHeader;
