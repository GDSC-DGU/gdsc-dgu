'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TimeLine from '@/components/member/timeline/TimeLine';
import LeadIntro from '@/components/member/introduce/LeadIntro';
import MemberIntro from '@/components/member/introduce/MemberIntro';
import RecruitHeader from '@/components/recruit/header/RecruitHeader';

const GenerationPage = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(1);

  // 애니메이션 variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full flex-col justify-center mt-[5rem] mb-[5rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1.5초로 설정
      >
        <TimeLine onSelectIndex={setSelectedTimelineIndex} />
      </motion.div>

      {selectedTimelineIndex === 2 ? (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <RecruitHeader />
        </motion.div>
      ) : (
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <LeadIntro />
          </motion.div>

          <MemberIntro title="DevRel" />

          <MemberIntro title="Web/App" />

          <MemberIntro title="Server/Cloud" />

          <MemberIntro title="AI/ML" />
        </div>
      )}
    </div>
  );
};

export default GenerationPage;
