'use client';

import { slideUpVariants } from '@/constants/project/slideUpVariants';
import LightIcon from '@/svg/icons/solutionChallenge/lightIcon.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * @description
 * 솔루션 챌린지 페이지 상단 탭 컴포넌트
 * @component SollutionChallengeTab
 * @returns {JSX.Element} SollutionChallengeTab
 * @since 2024.04.13
 */
/**
 * Renders the Tab component for the SollutionChallenge section.
 * @returns The rendered Tab component.
 */

const SolutionChallengeTab = ({
  selectedYear,
  changeSelectedYear,
}: {
  selectedYear: string;
  changeSelectedYear: (year: string) => void;
}) => {
  const yearData: string[] = ['2024'];
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });

  return (
    <section>
      <section
        ref={motionRef}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="w-full mt-8 mb-10 p-5 flex flex-row items-center gap-2 rounded-xl bg-mono_900"
      >
        <LightIcon className="scale-90" />
        <div className="B1">
          2024 Solution Challenge 에서 GDSC DGU의 2팀이 TOP100에 진출했습니다.
        </div>
      </section>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true, amount: 0.9 }}
        variants={slideUpVariants}
        style={{ transformOrigin: '10% 60%' }}
        className="w-full pb-10 px-3 flex items-center gap-3"
      >
        {yearData.map((year) => (
          <motion.button
            onClick={() => changeSelectedYear(year)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            key={year}
            className={`py-2 px-3 bg-transparent border ${
              year === selectedYear
                ? 'border-white'
                : 'border-mono_500 text-mono_500'
            } rounded-lg Btn`}
          >
            {year}
          </motion.button>
        ))}
      </motion.section>
    </section>
  );
};

export default SolutionChallengeTab;
